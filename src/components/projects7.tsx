"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: "AI AGENTS" | "WEBSITES";
  description: string;
  image: string;
  tags: string[];
  href: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "LeadQualifier AI",
    category: "AI AGENTS",
    description:
      "Scores and routes inbound leads in real time — so high-intent prospects reach your sales team in seconds, not hours.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    tags: ["ai-agents", "sales"],
    href: "#contact",
  },
  {
    id: 2,
    title: "SupportResolve AI",
    category: "AI AGENTS",
    description:
      "Resolves tier-1 tickets autonomously with knowledge-base retrieval, escalating only the edge cases that need a human.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    tags: ["ai-agents", "support"],
    href: "#contact",
  },
  {
    id: 3,
    title: "OpsScheduler AI",
    category: "AI AGENTS",
    description:
      "Automates scheduling, reminders, and follow-ups across time zones — keeping operations running without admin overhead.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
    tags: ["ai-agents", "operations"],
    href: "#contact",
  },
  {
    id: 4,
    title: "ContentEngine AI",
    category: "AI AGENTS",
    description:
      "Generates on-brand social posts, email campaigns, and blog outlines — aligned to your voice and ready to publish.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg",
    tags: ["ai-agents", "marketing"],
    href: "#contact",
  },
  {
    id: 5,
    title: "Siphio Agency Website",
    category: "WEBSITES",
    description:
      "High-performance marketing site built with Next.js and AI-powered interactions — designed to convert visitors into booked calls.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-5.svg",
    tags: ["websites", "marketing"],
    href: "#",
  },
  {
    id: 6,
    title: "E-Commerce Dashboard",
    category: "WEBSITES",
    description:
      "Real-time analytics dashboard for an e-commerce brand — tracking revenue, inventory, and customer behaviour at a glance.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-6.svg",
    tags: ["websites", "dashboard"],
    href: "#",
  },
];

const filterCategories = ["ALL", "AI AGENTS", "WEBSITES"];

interface Projects7Props {
  className?: string;
}

const Projects7 = ({ className }: Projects7Props) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [filteredItems, setFilteredItems] = useState(projectsData);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);

    if (category === "ALL") {
      setFilteredItems(projectsData);
    } else {
      const filtered = projectsData.filter(
        (item) =>
          item.category === category ||
          item.tags.includes(category.toLowerCase().replace(" ", "-")),
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          {/* Hero heading */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Our Work
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              AI agents and websites we&apos;ve built to automate workflows,
              engage customers, and drive real results.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="mb-16 flex flex-wrap justify-center gap-8">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`text-sm font-medium tracking-wider transition-colors duration-300 hover:text-foreground ${
                  activeFilter === category
                    ? "border-b-2 border-foreground pb-1 text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    href={item.href}
                    className="group relative block cursor-pointer overflow-hidden rounded-lg"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-full object-cover transition-transform duration-300"
                      />

                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-8 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div className="translate-y-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <p className="mb-4 text-xs font-medium tracking-widest text-gray-300">
                            {item.category}
                          </p>
                          <h3 className="mb-4 text-2xl font-light tracking-wide">
                            {item.title}
                          </h3>
                          <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-200">
                            {item.description}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium tracking-wider text-white/80">
                            VIEW PROJECT
                            <ArrowUpRight className="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center"
            >
              <p className="text-lg text-muted-foreground">
                No items found for &ldquo;{activeFilter}&rdquo; category.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Projects7 };
