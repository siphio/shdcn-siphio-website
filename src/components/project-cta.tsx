"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProjectCtaProps {
  className?: string;
}

const interests = [
  "AI Agent",
  "Website",
  "Automated Workflow",
  "Both",
  "Not sure yet",
];

const ProjectCta = ({ className }: ProjectCtaProps) => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="contact" className={cn("pt-24 pb-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-card shadow-sm">
          <div className="grid gap-0 lg:grid-cols-5">
            {/* Left — copy */}
            <div className="flex flex-col justify-center bg-muted/50 p-8 lg:col-span-2 lg:p-12">
              <span className="mb-4 w-fit rounded-lg bg-muted px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                Start a Project
              </span>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Let&apos;s build something together
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us a bit about what you need and we&apos;ll get back to you
                within 24 hours with a free project outline and next steps.
              </p>
              <div className="mt-8 hidden space-y-3 lg:block">
                <Stat label="Avg. project kickoff" value="< 1 week" />
                <Stat label="Response time" value="< 24 hours" />
                <Stat label="Discovery call" value="Free" />
              </div>
            </div>

            {/* Right — form */}
            <div className="p-8 lg:col-span-3 lg:p-12">
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-muted">
                    <ArrowRight className="size-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    We&apos;ll be in touch
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Thanks for reaching out. We&apos;ll review your project
                    details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setError(null);
                    setIsSubmitting(true);
                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name,
                          email,
                          interest: selectedInterest ?? "Not sure yet",
                          message,
                        }),
                      });
                      if (!res.ok) {
                        const body = await res.json().catch(() => ({}));
                        throw new Error(
                          body.error || "Something went wrong. Please try again.",
                        );
                      }
                      setSubmitted(true);
                    } catch (err) {
                      setError(
                        err instanceof Error
                          ? err.message
                          : "Something went wrong. Please try again.",
                      );
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="flex flex-col gap-5"
                >
                  {/* Name + Email row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="cta-name">Name</Label>
                      <Input
                        id="cta-name"
                        type="text"
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="cta-email">Email</Label>
                      <Input
                        id="cta-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        disabled={isSubmitting}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Interest selector */}
                  <div className="grid w-full gap-1.5">
                    <span className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                      I&apos;m interested in
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((item) => (
                        <button
                          key={item}
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => setSelectedInterest(item)}
                          className={cn(
                            "rounded-xl px-3.5 py-1.5 text-sm font-medium transition-colors",
                            selectedInterest === item
                              ? "bg-foreground text-background"
                              : "bg-muted text-muted-foreground hover:bg-muted/80",
                            isSubmitting && "opacity-50 cursor-not-allowed",
                          )}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="cta-message">
                      Tell us about your project
                    </Label>
                    <Textarea
                      id="cta-message"
                      placeholder="What are you looking to build? Any specific goals, timeline, or tools you're using?"
                      rows={4}
                      disabled={isSubmitting}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-1 size-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Project Details
                        <ArrowRight className="ml-1 size-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectCta };

/* ────────────────────────────────────────────────────── */

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between border-b border-border/50 pb-3">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-sm font-semibold">{value}</span>
  </div>
);
