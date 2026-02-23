import { google } from "googleapis";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  interest: z.string().optional().default("Not sure yet"),
  message: z.string().optional().default(""),
});

function getOAuth2Client() {
  const oauth2 = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );
  oauth2.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  return oauth2;
}

export async function POST(request: Request) {
  // Parse & validate body
  let data: z.infer<typeof contactSchema>;
  try {
    const body = await request.json();
    data = contactSchema.parse(body);
  } catch {
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 400 },
    );
  }

  const timestamp = new Date().toISOString();
  const row = [timestamp, data.name, data.email, data.interest, data.message];

  // Run Sheets (critical) and Telegram (best-effort) in parallel
  const [sheetsResult, telegramResult] = await Promise.allSettled([
    appendToSheet(row),
    sendTelegramMessage(data),
  ]);

  if (sheetsResult.status === "rejected") {
    console.error("Google Sheets error:", sheetsResult.reason);
    return NextResponse.json(
      { error: "Failed to save submission. Please try again." },
      { status: 500 },
    );
  }

  if (telegramResult.status === "rejected") {
    console.error("Telegram error (non-critical):", telegramResult.reason);
  }

  return NextResponse.json({ success: true });
}

async function appendToSheet(row: string[]) {
  const auth = getOAuth2Client();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

async function sendTelegramMessage(data: z.infer<typeof contactSchema>) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return;

  const text = [
    "\ud83d\udce9 *New Contact Submission*",
    "",
    `*Name:* ${escapeMarkdown(data.name)}`,
    `*Email:* ${escapeMarkdown(data.email)}`,
    `*Interest:* ${escapeMarkdown(data.interest)}`,
    data.message ? `*Message:* ${escapeMarkdown(data.message)}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    },
  );

  if (!res.ok) {
    throw new Error(`Telegram API responded with ${res.status}`);
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
