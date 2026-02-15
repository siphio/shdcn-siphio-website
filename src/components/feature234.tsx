"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  IllustrationAgent,
  IllustrationSwarm,
  IllustrationCodeGen,
  IllustrationDecision,
  IllustrationAPI,
  IllustrationQueue,
  IllustrationLogs,
} from "@/components/bento-illustrations";

interface Feature234Props {
  className?: string;
}

const Feature234 = ({ className }: Feature234Props) => {
  return (
    <section className={cn("relative bg-background pt-40 pb-32", className)}>
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,_var(--muted)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--muted)_1px,_transparent_1px)] bg-[length:32px_32px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      <div className="relative z-10 container mx-auto flex flex-col items-center">
        <h1 className="mx-auto max-w-4xl text-center font-inter text-[70px] leading-[65px] font-semibold tracking-tighter lg:text-[85px] lg:leading-[86px]">
          AI agents and websites built to scale your business
        </h1>
        <CardsContainer />
        <p className="mx-auto max-w-xl text-center font-inter text-lg font-medium text-muted-foreground">
          We design and deploy custom AI agents and high-performance websites
          that automate workflows, engage customers, and drive real revenue.
        </p>
        <div className="mt-10 flex items-center gap-2">
          <Button
            asChild
            variant="default"
            className="block h-fit w-fit rounded-full px-6 py-2 text-sm leading-loose"
          >
            <a href="#contact">Book a Call</a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="block h-fit w-fit rounded-full px-6 py-2 text-sm leading-loose"
          >
            <a href="/agents">See Our Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Feature234 };

const CardsContainer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { rotate: -10.87, isDark: false, graphic: <IllustrationAgent /> },
    { rotate: -7.95, isDark: true, graphic: <IllustrationSwarm /> },
    { rotate: -4.5, isDark: false, graphic: <IllustrationCodeGen /> },
    { rotate: 0, isDark: false, graphic: <IllustrationDecision /> },
    { rotate: 4.5, isDark: false, graphic: <IllustrationAPI /> },
    { rotate: 7.95, isDark: false, graphic: <IllustrationQueue /> },
    { rotate: 10.87, isDark: true, graphic: <IllustrationLogs /> },
  ];

  return (
    <div className="my-16 flex items-center justify-center">
      {cards.map((card, index) => {
        const yOffset = Math.pow(Math.abs(index - 3), 1.2) * 12;
        const isHovered = hoveredIndex === index;
        const visibilityClasses =
          // Hide 0,1,6,7 on small screens
          (index === 0 || index === 1 || index === 5 || index === 6
            ? " hidden sm:hidden "
            : "") +
          // Hide 0,7 on medium screens (but show others)
          (index === 0 || index === 6 ? "md:hidden " : "md:block ") +
          // Show all on large screens
          "lg:block";

        return (
          <motion.div
            className={visibilityClasses}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ y: yOffset }}
            animate={{
              y: isHovered ? yOffset - 20 : yOffset,
              zIndex: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`relative h-[176px] w-[177px] overflow-hidden rounded-3xl border ${
                card.isDark
                  ? "mb-14 border-border bg-card shadow-2xl"
                  : "border-border bg-muted shadow-lg"
              }`}
              style={{
                transform: `rotate(${card.rotate}deg)`,
                marginLeft: index === 0 ? "0px" : "-50px",
              }}
            >
              {card.graphic}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
