"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import type { Agent, AgentCategory } from "@/data/agents";
import { categories } from "@/data/agents";
import { AgentCard } from "@/components/agent-card";

interface AgentsGridProps {
  agents: Agent[];
  className?: string;
}

const filters: (AgentCategory | "All")[] = ["All", ...categories];

const AgentsGrid = ({ agents, className }: AgentsGridProps) => {
  const [active, setActive] = useState<AgentCategory | "All">("All");

  const filtered =
    active === "All" ? agents : agents.filter((a) => a.category === active);

  return (
    <section className={cn("container mx-auto pb-32", className)}>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((agent, i) => (
            <AgentCard key={agent.slug} agent={agent} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export { AgentsGrid };
