export type AgentCategory = "Support" | "Sales" | "Operations" | "Marketing";

export interface Agent {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: AgentCategory;
  features: string[];
  integrations: string[];
  metrics?: { label: string; value: string }[];
  status: "live" | "coming-soon";
}

export const categories: AgentCategory[] = [
  "Support",
  "Sales",
  "Operations",
  "Marketing",
];

export const agents: Agent[] = [
  {
    slug: "lead-qualifier",
    name: "LeadQualifier AI",
    tagline: "Score and route inbound leads in real time",
    description:
      "LeadQualifier AI analyses every inbound enquiry against your ideal customer profile, assigns a fit score, and routes high-intent leads straight to your sales team — so no opportunity slips through the cracks.",
    category: "Sales",
    features: [
      "Real-time lead scoring against your ICP criteria",
      "Automatic CRM enrichment with firmographic data",
      "Instant Slack alerts for high-priority leads",
      "Customisable qualification rules and thresholds",
    ],
    integrations: ["HubSpot", "Slack", "Salesforce", "Zapier"],
    metrics: [
      { label: "Avg. response time", value: "<30s" },
      { label: "Lead conversion lift", value: "+42%" },
      { label: "Hours saved / week", value: "18" },
    ],
    status: "live",
  },
  {
    slug: "support-resolve",
    name: "SupportResolve AI",
    tagline: "Resolve tier-1 tickets before they reach your team",
    description:
      "SupportResolve AI handles common customer questions, troubleshooting steps, and account lookups autonomously — escalating only the edge cases that need a human touch.",
    category: "Support",
    features: [
      "Natural-language ticket triage and classification",
      "Knowledge-base retrieval with source citations",
      "Seamless handoff to human agents with full context",
      "Multi-channel support: email, chat, and SMS",
    ],
    integrations: ["Zendesk", "Intercom", "Slack", "Twilio"],
    metrics: [
      { label: "Tickets auto-resolved", value: "67%" },
      { label: "First-response time", value: "<10s" },
      { label: "CSAT score", value: "4.8/5" },
    ],
    status: "live",
  },
  {
    slug: "ops-scheduler",
    name: "OpsScheduler AI",
    tagline: "Automate scheduling, reminders, and follow-ups",
    description:
      "OpsScheduler AI coordinates meetings across time zones, sends smart reminders, and follows up automatically — keeping your operations running without the admin overhead.",
    category: "Operations",
    features: [
      "Cross-timezone calendar coordination",
      "Smart reminder sequences with escalation",
      "Automated meeting-prep briefs from CRM data",
      "No-show detection and instant rescheduling",
      "Weekly ops digest with actionable insights",
    ],
    integrations: ["Google Calendar", "Outlook", "Slack", "Notion"],
    metrics: [
      { label: "Meetings booked / mo", value: "340+" },
      { label: "No-show rate", value: "-58%" },
      { label: "Admin hours saved", value: "22/wk" },
    ],
    status: "live",
  },
  {
    slug: "content-engine",
    name: "ContentEngine AI",
    tagline: "Generate on-brand social and email content at scale",
    description:
      "ContentEngine AI drafts social posts, email campaigns, and blog outlines aligned to your brand voice — ready for a quick review and publish.",
    category: "Marketing",
    features: [
      "Brand-voice fine-tuning from your existing content",
      "Multi-platform draft generation (LinkedIn, X, email)",
      "A/B variant creation for subject lines and CTAs",
      "Content calendar integration and auto-scheduling",
    ],
    integrations: ["Buffer", "Mailchimp", "Notion", "Slack"],
    status: "coming-soon",
  },
  {
    slug: "pipeline-pilot",
    name: "PipelinePilot AI",
    tagline: "Forecast revenue and surface at-risk deals automatically",
    description:
      "PipelinePilot AI monitors your entire sales pipeline, flags deals going cold, and generates accurate revenue forecasts — giving your leadership team a real-time view of what's closing and what needs attention.",
    category: "Sales",
    features: [
      "AI-powered deal health scoring",
      "Weekly pipeline forecast reports",
      "Automated follow-up nudges for stalled deals",
      "Win/loss pattern analysis across your team",
    ],
    integrations: ["Salesforce", "HubSpot", "Slack", "Google Sheets"],
    metrics: [
      { label: "Forecast accuracy", value: "94%" },
      { label: "Deals rescued / mo", value: "12" },
      { label: "Revenue visibility", value: "Real-time" },
    ],
    status: "live",
  },
  {
    slug: "onboard-flow",
    name: "OnboardFlow AI",
    tagline: "Guide new customers from sign-up to success",
    description:
      "OnboardFlow AI delivers personalised onboarding sequences, answers setup questions in real time, and tracks activation milestones — reducing time-to-value and boosting retention from day one.",
    category: "Support",
    features: [
      "Personalised onboarding sequences per plan tier",
      "In-app guidance and contextual help",
      "Milestone tracking with automated check-ins",
      "Escalation to success team when users stall",
    ],
    integrations: ["Intercom", "Segment", "Slack", "Stripe"],
    metrics: [
      { label: "Time-to-value", value: "-60%" },
      { label: "Activation rate", value: "89%" },
      { label: "Support tickets (wk 1)", value: "-45%" },
    ],
    status: "live",
  },
  {
    slug: "inbox-zero",
    name: "InboxZero AI",
    tagline: "Triage, draft, and route emails so you never fall behind",
    description:
      "InboxZero AI reads incoming email, categorises by urgency and topic, drafts context-aware replies, and routes messages to the right team member — so your inbox stays clean and nothing gets missed.",
    category: "Operations",
    features: [
      "Smart email categorisation by urgency and intent",
      "Auto-drafted replies with your tone of voice",
      "Routing rules based on topic, sender, or keyword",
      "Daily digest summarising what needs your attention",
    ],
    integrations: ["Gmail", "Outlook", "Slack", "Notion"],
    metrics: [
      { label: "Emails auto-triaged", value: "85%" },
      { label: "Response time", value: "-70%" },
      { label: "Inbox backlog", value: "Near zero" },
    ],
    status: "live",
  },
  {
    slug: "review-pulse",
    name: "ReviewPulse AI",
    tagline: "Monitor, respond to, and analyse customer reviews",
    description:
      "ReviewPulse AI aggregates reviews from Google, G2, Trustpilot, and more — generating sentiment reports, drafting on-brand responses, and alerting you to trends before they become problems.",
    category: "Marketing",
    features: [
      "Multi-platform review aggregation and alerts",
      "Sentiment analysis with trend detection",
      "Auto-drafted responses matching your brand voice",
      "Monthly reputation reports with actionable insights",
    ],
    integrations: ["Google Business", "G2", "Trustpilot", "Slack"],
    metrics: [
      { label: "Review response time", value: "<1hr" },
      { label: "Sentiment accuracy", value: "96%" },
      { label: "Reviews monitored", value: "5 platforms" },
    ],
    status: "coming-soon",
  },
  {
    slug: "data-sync",
    name: "DataSync AI",
    tagline: "Keep your tools in sync without manual data entry",
    description:
      "DataSync AI watches for changes across your CRM, project tools, and databases — syncing records, resolving conflicts, and ensuring every team works from a single source of truth.",
    category: "Operations",
    features: [
      "Bi-directional sync across 50+ integrations",
      "Conflict detection and smart resolution",
      "Change logs with full audit trail",
      "Custom field mapping and transformation rules",
    ],
    integrations: ["Salesforce", "Airtable", "Notion", "HubSpot"],
    metrics: [
      { label: "Sync errors", value: "<0.1%" },
      { label: "Manual entry eliminated", value: "95%" },
      { label: "Data freshness", value: "<5min" },
    ],
    status: "live",
  },
  {
    slug: "campaign-copilot",
    name: "CampaignCopilot AI",
    tagline: "Plan, launch, and optimise ad campaigns with AI",
    description:
      "CampaignCopilot AI analyses your audience data, suggests targeting strategies, generates ad copy variations, and continuously optimises spend allocation — so every dollar works harder.",
    category: "Marketing",
    features: [
      "Audience analysis and targeting recommendations",
      "AI-generated ad copy and creative briefs",
      "Budget allocation optimisation across channels",
      "Performance dashboards with actionable insights",
    ],
    integrations: ["Meta Ads", "Google Ads", "Slack", "Google Sheets"],
    status: "coming-soon",
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}

export function getAgentsByCategory(category: AgentCategory): Agent[] {
  return agents.filter((a) => a.category === category);
}
