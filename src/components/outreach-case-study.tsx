"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";


interface OutreachCaseStudyProps {
  className?: string;
}

const steps = [
  {
    number: 1,
    title: "Prospect Research",
    agent: "DataSync AI",
    description:
      "Aggregates prospect data from LinkedIn, company databases, and intent signals — building enriched profiles automatically so we never outreach blind.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    imageAlt: "Prospect research data aggregation",
  },
  {
    number: 2,
    title: "Lead Scoring & Qualification",
    agent: "LeadQualifier AI",
    description:
      "Scores every prospect against our ICP criteria in real time, filtering out poor fits and prioritising high-intent leads for immediate action.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    imageAlt: "Lead scoring dashboard",
  },
  {
    number: 3,
    title: "Personalised Outreach",
    agent: "ContentEngine AI",
    description:
      "Generates tailored email sequences for each prospect — matching tone, referencing their company context, and A/B testing subject lines at scale.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    imageAlt: "Personalised email generation",
  },
  {
    number: 4,
    title: "Follow-Up & Booking",
    agent: "OpsScheduler AI",
    description:
      "Handles all follow-ups, detects replies and no-shows, and books qualified meetings directly into our calendar — zero manual scheduling.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    imageAlt: "Automated calendar booking",
  },
];

const metrics = [
  { value: "3x", label: "Reply rate vs manual outreach" },
  { value: "40+", label: "Meetings booked per month" },
  { value: "0hrs", label: "Manual outreach time per week" },
];

const OutreachCaseStudy = ({ className }: OutreachCaseStudyProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={cn("pb-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          {/* Section header — matches Feature102 */}
          <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
            <span className="mx-auto w-fit rounded-xl bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              Case Study
            </span>
            <h2 className="text-2xl md:text-4xl">
              How We Fully Automated Our Outreach Pipeline
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              We chained four of our own AI agents into a single pipeline that
              takes us from raw prospect data to booked meetings — with zero
              manual effort in between.
            </p>
          </div>

          {/* Pipeline steps — same layout as Feature102 */}
          <div
            ref={ref}
            className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16"
          >
            {steps.map((step, i) => {
              const isFirst = i === 0;
              const isLast = i === steps.length - 1;
              const isMiddle = !isFirst && !isLast;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10"
                >
                  {/* Left: step indicator + text */}
                  <div className="flex gap-4 min-[960px]:max-w-md">
                    <div
                      className={cn(
                        "flex flex-col items-center justify-between gap-1",
                        isMiddle && "relative",
                      )}
                    >
                      {/* Connector bridges for middle steps */}
                      {isMiddle && (
                        <>
                          <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70" />
                          <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70" />
                        </>
                      )}

                      {/* Top connector */}
                      {isFirst ? (
                        <span className="h-20 shrink-0" />
                      ) : (
                        <span
                          className={cn(
                            "h-20 w-[3px] shrink-0 opacity-70",
                            isFirst
                              ? "bg-linear-to-b from-transparent to-primary"
                              : "bg-primary",
                          )}
                        />
                      )}

                      {/* Number circle */}
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                        {step.number}
                      </span>

                      {/* Bottom connector */}
                      {isLast ? (
                        <span className="h-20 shrink-0" />
                      ) : (
                        <span
                          className={cn(
                            "h-20 w-[3px] shrink-0 opacity-70",
                            isFirst
                              ? "bg-linear-to-b from-transparent to-primary"
                              : "bg-primary",
                          )}
                        />
                      )}
                    </div>

                    <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                      <h3 className="text-xl min-[960px]:text-2xl">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground min-[960px]:text-base">
                        {step.description}
                      </p>
                      <span className="text-xs font-medium text-muted-foreground/60">
                        Powered by {step.agent}
                      </span>
                    </div>
                  </div>

                  {/* Right: large image — matches Feature102 */}
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="z-10 aspect-video w-full rounded-xl border object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Results metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mx-auto mt-16 max-w-3xl"
          >
            <h3 className="mb-6 text-center text-sm font-semibold tracking-tight">
              The Results
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border bg-muted/50 px-4 py-6 text-center"
                >
                  <div className="text-3xl font-bold">{m.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Outcome + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="mx-auto mt-14 max-w-2xl text-center"
          >
            <p className="leading-relaxed text-muted-foreground">
              What used to take our team 15+ hours a week now runs entirely on
              autopilot. Every lead is researched, scored, contacted, and
              followed up with — and we only step in when a meeting is booked.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { OutreachCaseStudy };
