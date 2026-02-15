"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Feature234Props {
  className?: string;
}

const Feature234 = ({ className }: Feature234Props) => {
  return (
    <section className={cn("bg-background pt-40 pb-32", className)}>
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="mx-auto max-w-4xl text-center font-inter text-[70px] leading-[65px] font-semibold tracking-tighter lg:text-[85px] lg:leading-[86px]">
          AI agents and websites built to scale your business
        </h1>
        <CardsContainer />
        <p className="mx-auto max-w-xl text-center font-inter text-lg font-medium text-black">
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
    {
      imageAlt: "Card 1",
      rotate: -10.87,
      isDark: false,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      imageAlt: "Card 2",
      rotate: -7.95,
      isDark: true,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-black-1.svg",
    },
    {
      imageAlt: "Card 3",
      rotate: -4.5,
      isDark: false,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
    {
      imageAlt: "Card 4",
      rotate: 0,
      isDark: false,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
    {
      imageAlt: "Card 5",
      rotate: 4.5,
      isDark: false,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    },
    {
      imageAlt: "Card 6",
      rotate: 7.95,
      isDark: false,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    },
    {
      imageAlt: "Card 7",
      rotate: 10.87,
      isDark: true,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-black-1.svg",
    },
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
                  ? "mb-14 border-[#8b8b8b] bg-black shadow-2xl"
                  : "border-[#cecece] bg-[#f5f5f5] shadow-lg"
              }`}
              style={{
                transform: `rotate(${card.rotate}deg)`,
                marginLeft: index === 0 ? "0px" : "-50px",
              }}
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                className="size-full object-cover object-center"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
