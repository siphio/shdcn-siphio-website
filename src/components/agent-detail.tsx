"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Agent } from "@/data/agents";

interface AgentDetailProps {
  agent: Agent;
}

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const AgentDetail = ({ agent }: AgentDetailProps) => {
  return (
    <section className="container mx-auto max-w-3xl pt-32 pb-20">
      {/* Back link */}
      <motion.div custom={0} initial="hidden" animate="visible" variants={fade}>
        <Link
          href="/agents"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-1 size-4" />
          Back to Agents
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div custom={1} initial="hidden" animate="visible" variants={fade}>
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {agent.category}
          </span>
          {agent.status === "coming-soon" && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Coming Soon
            </span>
          )}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {agent.name}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{agent.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {agent.description}
        </p>
      </motion.div>

      {/* Capabilities */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fade}
        className="mt-12"
      >
        <h2 className="mb-4 text-xl font-semibold">Capabilities</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {agent.features.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm">{f}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Integrations */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fade}
        className="mt-12"
      >
        <h2 className="mb-4 text-xl font-semibold">Integrations</h2>
        <div className="flex flex-wrap gap-2">
          {agent.integrations.map((name) => (
            <span
              key={name}
              className="rounded-full border bg-muted/50 px-3 py-1 text-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Metrics */}
      {agent.metrics && agent.metrics.length > 0 && (
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mt-12"
        >
          <h2 className="mb-4 text-xl font-semibold">Key Metrics</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {agent.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border bg-card p-5 text-center shadow-sm"
              >
                <div className="text-2xl font-bold">{m.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fade}
        className="mt-16 text-center"
      >
        <h2 className="text-xl font-semibold">Ready to deploy {agent.name}?</h2>
        <p className="mt-2 text-muted-foreground">
          Let&apos;s talk about how this agent fits your workflow.
        </p>
        <Button asChild className="mt-6 rounded-full px-8">
          <a href="/#contact">Book a Call</a>
        </Button>
      </motion.div>
    </section>
  );
};

export { AgentDetail };
