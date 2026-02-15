"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Agent } from "@/data/agents";

interface AgentCardProps {
  agent: Agent;
  index: number;
}

const AgentCard = ({ agent, index }: AgentCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      <Link
        href={`/agents/${agent.slug}`}
        className="group flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {agent.category}
          </span>
          {agent.status === "coming-soon" && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold">{agent.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {agent.tagline}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-primary">
          Learn more
          <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
};

export { AgentCard };
