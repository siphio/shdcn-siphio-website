"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  X,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { WebsiteCategory, WebsiteProject } from "@/data/websites";
import { websiteCategories } from "@/data/websites";

interface WebsitesShowcaseProps {
  websites: WebsiteProject[];
  className?: string;
}

const WebsitesShowcase = ({ websites, className }: WebsitesShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState<
    WebsiteCategory | "All"
  >("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? websites
      : websites.filter((w) => w.category === activeCategory);

  return (
    <section className={cn("pt-40 pb-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold tracking-tighter text-foreground lg:text-6xl">
              Websites
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              High-performance websites engineered for speed, SEO, and
              conversion — built with modern frameworks and designed to grow
              with your business.
            </p>
          </div>

          {/* Category filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {(["All", ...websiteCategories] as const).map((cat) => (
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

          {/* Project grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <WebsiteCard
                  key={project.slug}
                  project={project}
                  isExpanded={expandedSlug === project.slug}
                  onToggle={() =>
                    setExpandedSlug(
                      expandedSlug === project.slug ? null : project.slug,
                    )
                  }
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-lg text-muted-foreground">
              No projects found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export { WebsitesShowcase };

/* ────────────────────────────────────────────────────── */

interface WebsiteCardProps {
  project: WebsiteProject;
  isExpanded: boolean;
  onToggle: () => void;
}

const WebsiteCard = ({ project, isExpanded, onToggle }: WebsiteCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={cn(
        "group overflow-hidden rounded-3xl border bg-card transition-shadow",
        isExpanded
          ? "shadow-lg md:col-span-2"
          : "shadow-sm hover:shadow-md",
      )}
    >
      {/* Image + overlay */}
      <button onClick={onToggle} className="relative block w-full text-left">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="flex w-full items-end justify-between">
              <div>
                <p className="text-xs font-medium tracking-widest text-gray-300">
                  {project.category.toUpperCase()}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>
              <ArrowUpRight className="size-5 text-white" />
            </div>
          </div>
        </div>

        {/* Card footer — always visible */}
        <div className="px-6 py-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-lg bg-muted px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
              {project.category}
            </span>
            {project.status === "in-development" && (
              <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary">
                In Dev
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground/70">
            {project.tagline}
          </p>
        </div>
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
              {/* Client + description */}
              <p className="mb-1 text-xs font-medium text-muted-foreground/60">
                Client: {project.client}
              </p>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {/* Highlights */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-tight">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-tight">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl bg-muted px-3 py-1 text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA row */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <Button asChild className="rounded-full px-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                      <ExternalLink className="ml-1 size-4" />
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a href="/#contact">Start a Project Like This</a>
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
