"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_QUESTIONS = [
  {
    question: "What kind of AI agents does Siphio build?",
    answer:
      "We build custom AI agents for lead generation, customer support, internal operations, data analysis, and more. Each agent is tailored to your specific workflows and integrates directly with your existing tools.",
  },
  {
    question: "How long does it take to build and deploy an agent?",
    answer:
      "Most projects go from discovery to production in 2–6 weeks depending on complexity. We work in rapid sprints with continuous feedback loops so you see progress from day one.",
  },
  {
    question: "Do you also build websites?",
    answer:
      "Yes. We design and develop high-performance websites optimized for speed, SEO, and conversion. Many clients pair a new site with an AI agent to maximize impact.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with cutting-edge frameworks including Next.js, React, Tailwind CSS, and leverage the latest AI models from OpenAI, Anthropic, and open-source alternatives depending on your needs.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. Our agents are designed to plug into your current stack — CRMs, databases, APIs, Slack, email, and more. We handle the integration so you don't have to.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Every project is scoped individually based on complexity and requirements. Book a call with us and we'll provide a transparent quote after understanding your needs.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer maintenance and optimization packages to ensure your agents and websites continue performing at their best as your business evolves.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through our contact form or book a call. We'll schedule a free discovery session to understand your goals and map out the right solution.",
  },
];

interface Faq16Props {
  className?: string;
}

const Faq16 = ({ className }: Faq16Props) => {
  return (
    <section className={cn("bg-background pt-0 pb-32", className)}>
      <div className="container mx-auto">
        <h1 className="mb-10 text-center text-6xl font-bold tracking-tighter text-foreground">
          FAQs
        </h1>
        <div className="z-20 mx-auto max-w-2xl rounded-2xl border border-border bg-background p-3">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col items-center justify-center gap-3"
          >
            {FAQ_QUESTIONS.map((item, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className="m-0 w-full rounded-xl bg-muted px-4 py-2"
              >
                <AccordionTrigger className="flex flex-1 justify-between text-left font-semibold transition-all hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq16 };
