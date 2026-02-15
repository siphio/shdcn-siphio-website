"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { Agent, AgentCategory } from "@/data/agents";
import { categories } from "@/data/agents";

interface AgentsShowcaseProps {
  agents: Agent[];
  className?: string;
}

const AgentsShowcase = ({ agents, className }: AgentsShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState<
    AgentCategory | "All"
  >("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? agents
      : agents.filter((a) => a.category === activeCategory);

  return (
    <section className={cn("pt-40 pb-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold tracking-tighter text-foreground lg:text-6xl">
              AI Agents
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Purpose-built AI agents that automate real workflows — explore
              each one to see how it works, what it integrates with, and the
              results it delivers.
            </p>
          </div>

          {/* Category filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedSlug(null);
                }}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Agent cards */}
          <motion.div
            layout
            className="flex flex-col gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((agent) => (
                <AgentRow
                  key={agent.slug}
                  agent={agent}
                  isExpanded={expandedSlug === agent.slug}
                  onToggle={() =>
                    setExpandedSlug(
                      expandedSlug === agent.slug ? null : agent.slug,
                    )
                  }
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-lg text-muted-foreground">
              No agents found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export { AgentsShowcase };

/* ────────────────────────────────────────────────────── */

interface AgentRowProps {
  agent: Agent;
  isExpanded: boolean;
  onToggle: () => void;
}

const AgentRow = ({ agent, isExpanded, onToggle }: AgentRowProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={cn(
        "overflow-hidden rounded-3xl border bg-card transition-shadow",
        isExpanded ? "shadow-lg" : "shadow-sm hover:shadow-md",
      )}
    >
      {/* Collapsed header — always visible */}
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        {/* Icon */}
        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-muted">
          <Sparkles className="size-5 text-muted-foreground" />
        </div>

        {/* Name + tagline */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {agent.name}
            </h3>
            {agent.status === "coming-soon" && (
              <span className="rounded-lg bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                Coming Soon
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground/70">
            {agent.tagline}
          </p>
        </div>

        {/* Category badge */}
        <span className="hidden rounded-xl bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-block">
          {agent.category}
        </span>

        {/* Expand chevron */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="size-5 text-muted-foreground" />
        </motion.div>
      </button>

      {/* Expanded detail */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t px-6 pt-6 pb-8">
              {/* Description */}
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                {agent.description}
              </p>

              {/* Capabilities + Integrations */}
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {/* Capabilities */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-tight">
                    Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {agent.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Integrations */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-tight">
                    Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.integrations.map((name) => (
                      <span
                        key={name}
                        className="rounded-xl bg-muted px-3 py-1 text-sm text-muted-foreground"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              {agent.metrics && agent.metrics.length > 0 && (
                <div className="mt-8">
                  <h4 className="mb-3 text-sm font-semibold tracking-tight">
                    Key Metrics
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {agent.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border bg-muted/50 px-4 py-4 text-center"
                      >
                        <div className="text-xl font-bold">{m.value}</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 flex items-center gap-3">
                <Button asChild className="rounded-full px-6">
                  <a href="/#contact">Book a Call</a>
                </Button>
                <Button
                  variant="secondary"
                  className="rounded-full px-6"
                  onClick={onToggle}
                >
                  Close
                  <X className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
