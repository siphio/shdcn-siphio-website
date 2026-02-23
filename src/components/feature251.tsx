"use client";

import { motion } from "motion/react";
import React, { useRef } from "react";
import { RefObject, useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";

import { Globe } from "@/components/ui/globe";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Feature251Props {
  className?: string;
}

const Feature251 = ({ className }: Feature251Props) => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <section className={cn("relative pt-16 pb-12", className)}>
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,_var(--muted)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--muted)_1px,_transparent_1px)] bg-[length:32px_32px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 100%, #000 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 100%, #000 40%, transparent 100%)",
        }}
      />
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-5">
          {/* 1st Card  */}
          <Card className="relative h-96 w-full rounded-3xl border md:w-166">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Multi-Platform Integration
              </h3>
              <p className="mt-2 text-muted-foreground/70">
                Our agents connect seamlessly to your existing tools — CRMs,
                databases, APIs, and more — so automation fits into your
                stack, not around it.
              </p>
            </CardHeader>
            <CardContent ref={containerRef1} className="relative ml-5">
              <IconCard
                ref={div1Ref as React.RefObject<HTMLDivElement>}
                icon={<SlackIcon />}
                className="mb-3"
              />
              <IconCard
                ref={div2Ref as React.RefObject<HTMLDivElement>}
                icon={<HubSpotIcon />}
                className="translate-x-16 md:translate-x-32"
              />
              <IconCard
                ref={div3Ref as React.RefObject<HTMLDivElement>}
                icon={<ZapierIcon />}
                className="mt-3"
              />
              <IconCard
                ref={div5Ref as React.RefObject<HTMLDivElement>}
                icon={<OpenAIIcon />}
                className="absolute top-1/2 right-4 -translate-y-1/2 md:right-12"
              />
              <div
                ref={div4Ref as React.RefObject<HTMLDivElement>}
                className="absolute top-1/2 left-1/2 z-99 h-4 w-4 -translate-y-1/2 rounded-full border bg-muted"
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div1Ref}
                curvature={40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div2Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div3Ref}
                curvature={-40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div4Ref}
                toRef={div5Ref}
              />
            </CardContent>
          </Card>

          {/* 2nd Card */}
          <Card className="h-96 w-full rounded-3xl border md:w-83">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Intelligent Automation
              </h3>
              <p className="text-muted-foreground/70">
                Agents that learn, adapt, and handle complex tasks — from lead
                qualification to customer support — without human intervention.
              </p>
            </CardHeader>
            <CardContent
              ref={containerRef2}
              className="relative flex h-full flex-col items-center justify-between"
            >
              <IconCard
                ref={div6Ref as React.RefObject<HTMLDivElement>}
                icon={<TriggerIcon />}
                className="mb-3"
              />

              <IconCard
                ref={div7Ref as React.RefObject<HTMLDivElement>}
                icon={<AgentIcon />}
                className="mt-3"
              />

              <AnimatedBeam
                duration={3}
                containerRef={containerRef2}
                fromRef={div6Ref as React.RefObject<HTMLDivElement>}
                direction="vertical"
                curvature={40}
                toRef={div7Ref as React.RefObject<HTMLDivElement>}
              />
            </CardContent>
          </Card>

          {/* 3rd card */}
          <Card className="relative flex h-96 w-full flex-col rounded-3xl border sm:w-[330px]">
            <CardContent className="flex items-center justify-center pt-4">
              <WebsiteGraphic />
            </CardContent>
            <CardHeader className="mt-auto">
              <h3 className="text-2xl font-semibold tracking-tight">
                Websites That Convert
              </h3>
              <p className="text-muted-foreground/70">
                High-performance sites engineered for speed, SEO, and conversion
                — not just aesthetics.
              </p>
            </CardHeader>
          </Card>
          {/* 4th card */}
          <Card className="h-96 w-full overflow-hidden rounded-3xl border md:w-166">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Global Reach, Local Precision
              </h3>
              <p className="text-muted-foreground/70">
                We build for businesses worldwide — deploying agents and
                infrastructure that operate across time zones, languages, and
                markets without missing a beat.
              </p>
            </CardHeader>

            <CardContent className="relative">
              <Globe className="-top-4" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Feature251 };

const IconCard = ({
  icon,
  className,
  ref,
}: {
  icon: React.ReactNode;
  className?: string;
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex size-14 items-center justify-center rounded-xl bg-muted",
        className,
      )}
    >
      {icon}
      <HandleIcon className="absolute -top-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rotate-90" />
      <HandleIcon className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rotate-90" />
    </div>
  );
};

const HandleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="14"
      height="5"
      viewBox="0 0 14 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.543457"
        y1="0.972656"
        x2="0.543457"
        y2="4.625"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
      <line
        x1="4.54346"
        y1="0.972656"
        x2="4.54346"
        y2="4.625"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
      <line
        x1="8.54346"
        y1="0.972656"
        x2="8.54346"
        y2="4.625"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
      <line
        x1="12.5435"
        y1="0.972656"
        x2="12.5435"
        y2="4.625"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
    </svg>
  );
};

// Below is the modified component from Magic UI
// Original source: https://magicui.design/docs/components/animated-beam
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>; // Container ref
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  direction?: "horizontal" | "vertical";
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  direction = "horizontal",
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates =
    direction === "vertical"
      ? reverse
        ? {
            x1: ["0%", "0%"],
            x2: ["0%", "0%"],
            y1: ["90%", "-10%"],
            y2: ["100%", "0%"],
          }
        : {
            x1: ["0%", "0%"],
            x2: ["0%", "0%"],
            y1: ["10%", "110%"],
            y2: ["0%", "100%"],
          }
      : reverse
        ? {
            // Horizontal (existing logic)
            x1: ["90%", "-10%"],
            x2: ["100%", "0%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
          }
        : {
            x1: ["10%", "110%"],
            x2: ["0%", "100%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
          };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (const _entry of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

/* ── Integration Icon SVGs ─────────────────────────── */

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
  </svg>
);

const HubSpotIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="#FF7A59">
    <path d="M18.16 7.58V4.85a2.11 2.11 0 0 0 1.23-1.91 2.13 2.13 0 0 0-2.13-2.13 2.13 2.13 0 0 0-2.13 2.13c0 .84.49 1.57 1.2 1.91v2.73a5.85 5.85 0 0 0-2.7 1.34L7.4 4.29a2.43 2.43 0 0 0 .08-.59A2.37 2.37 0 1 0 5.1 6.07a2.35 2.35 0 0 0 1.07-.27l6.14 4.57a5.86 5.86 0 0 0-.86 3.07 5.88 5.88 0 0 0 .98 3.26l-1.92 1.92a1.86 1.86 0 0 0-.54-.09 1.88 1.88 0 1 0 1.88 1.88 1.86 1.86 0 0 0-.09-.54l1.89-1.89a5.87 5.87 0 1 0 5.51-10.4zm-1.03 8.65a3.04 3.04 0 1 1 0-6.08 3.04 3.04 0 0 1 0 6.08z"/>
  </svg>
);

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="#FF4A00">
    <path d="M15.088 12.004l3.003-3.003a7.4 7.4 0 0 0 0-2.002l-3.003 3.003-3.003-3.003a7.4 7.4 0 0 0-2.002 0l3.003 3.003-3.003 3.003a7.4 7.4 0 0 0 0 2.002l3.003-3.003 3.003 3.003a7.4 7.4 0 0 0 0-2.002l-3.003-3.003zM12 16.496a4.496 4.496 0 1 1 0-8.992 4.496 4.496 0 0 1 0 8.992zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" fillOpacity="0.8">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

/* ── Automation Card Icons ─────────────────────────── */

const TriggerIcon = () => (
  <svg viewBox="0 0 20 20" className="size-5" fill="none">
    <path d="M11 2L4 12h5l-1 6 7-10H10l1-6z" stroke="#F7931E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#F7931E" fillOpacity="0.15"/>
  </svg>
);

const AgentIcon = () => (
  <svg viewBox="0 0 20 20" className="size-5" fill="none">
    <circle cx="10" cy="8" r="4" stroke="#22D3EE" strokeWidth="1.5" fill="#22D3EE" fillOpacity="0.15"/>
    <circle cx="8" cy="7" r="1" fill="#22D3EE" fillOpacity="0.6"/>
    <circle cx="12" cy="7" r="1" fill="#22D3EE" fillOpacity="0.6"/>
    <path d="M8 9.5Q10 11 12 9.5" stroke="#22D3EE" strokeWidth="0.75" strokeLinecap="round" fill="none" opacity="0.5"/>
    <path d="M5 16c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

/* ── Websites Card Graphic ─────────────────────────── */

const WebsiteGraphic = () => (
  <svg viewBox="0 0 140 140" className="size-32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="web-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F7931E" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    {/* Browser frame */}
    <rect x="8" y="8" width="124" height="124" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    {/* URL bar */}
    <circle cx="22" cy="22" r="3" fill="#F7931E" fillOpacity="0.5" />
    <circle cx="32" cy="22" r="3" fill="rgba(255,255,255,0.15)" />
    <circle cx="42" cy="22" r="3" fill="rgba(255,255,255,0.15)" />
    <rect x="56" y="17" width="64" height="10" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
    <line x1="8" y1="32" x2="132" y2="32" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    {/* Hero headline */}
    <rect x="20" y="44" width="60" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
    <rect x="20" y="56" width="80" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="20" y="64" width="56" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
    {/* CTA button */}
    <rect x="20" y="76" width="44" height="14" rx="7" fill="url(#web-grad)" fillOpacity="0.6" />
    <rect x="28" y="82" width="24" height="2" rx="1" fill="white" fillOpacity="0.5" />
    {/* Feature cards */}
    <rect x="20" y="100" width="44" height="24" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
    <rect x="26" y="106" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
    <rect x="26" y="112" width="32" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
    <rect x="76" y="100" width="44" height="24" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
    <rect x="82" y="106" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
    <rect x="82" y="112" width="28" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
  </svg>
);
