"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useId, useRef } from "react";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero211Props {
  className?: string;
}

const Hero211 = ({ className }: Hero211Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person4.jpeg",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
    },
  ];

  return (
    <section className={cn("relative overflow-hidden pt-12 pb-8", className)}>
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4">
          <h1 className="text-center font-calSans text-5xl lg:text-6xl">
            Ready to put AI to work for your business?
          </h1>
          <p className="px-10 text-center text-muted-foreground lg:text-lg">
            Book a free discovery call and we&apos;ll show you exactly how a
            custom AI agent or website can transform your operations.
          </p>
        </div>

        <div className="relative z-10 mt-16 flex h-full items-center justify-center">
          <Swiper
            loop={true}
            grabCursor={true}
            style={{ width: 300, height: 330, borderRadius: 30 }}
            className="border bg-muted [&_.swiper-slide]:flex [&_.swiper-slide]:items-center [&_.swiper-slide]:justify-center [&_.swiper-slide]:rounded-[25px] [&_.swiper-slide]:bg-black [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:opacity-100"
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            effect="creative"
            pagination={{
              clickable: true,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
              },
            }}
            modules={[EffectCreative, Pagination, Autoplay]}
          >
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="h-full w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Marquee background - positioned behind content */}
      <div className="absolute inset-0 z-0">
        <SkiperUiMarquee />
      </div>
    </section>
  );
};

export { Hero211 };

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row ![animation-duration:10s]": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

function Card() {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-17 cursor-pointer overflow-hidden rounded-2xl border border-muted p-4",
        "bg-gradient-to-b from-muted/50 to-background",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    ></motion.div>
  );
}

export function SkiperUiMarquee() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-4 md:px-8">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="flex w-full flex-col items-center justify-center"
          >
            <Marquee reverse repeat={5}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Card key={idx} />
              ))}
            </Marquee>
          </div>
        ))}
        <div className="absolute right-0 h-full w-24 bg-gradient-to-r from-transparent to-background to-70% dark:to-background" />
        <div className="absolute left-0 h-full w-24 bg-gradient-to-l from-transparent to-background to-70% dark:to-background" />
        <div className="absolute bottom-0 h-36 w-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background" />
      </div>
    </div>
  );
}
