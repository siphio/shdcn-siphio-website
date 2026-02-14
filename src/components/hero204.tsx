"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Hero204Props {
  className?: string;
}

const Hero204 = ({ className }: Hero204Props) => {
  return (
    <section className={cn("bg-background overflow-hidden pt-32 pb-0", className)}>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-4 text-center">
        <Button
          variant="secondary"
          className="text-sm group flex w-fit items-center justify-center gap-2 rounded-full bg-muted/60 px-4 py-0.5 tracking-tight"
        >
          <span className="size-1.5 rounded-full bg-foreground" />
          <span>Flexible Plan customized for you</span>
        </Button>
        <h1 className="max-w-xl font-playfair text-4xl tracking-tighter text-foreground md:text-7xl">
          The Shadcn Blocks Just Copy Paste.
        </h1>
        <p className="mt-7 max-w-xl text-xl tracking-tight text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipiasicing elit.Lorem ipsum
          dolor sit amet consectetur seams
        </p>

        <div className="mt-10 flex w-full max-w-xl items-center justify-center rounded-full border p-1">
          <Input
            placeholder="Enter Your Email"
            className="w-full border-none pl-5 text-xl! tracking-tight shadow-none outline-none focus-visible:ring-0 focus-visible:outline-none"
          />
          <Button className="rounded-full px-10 py-7 text-lg text-background transition-all ease-in-out hover:px-12">
            Sign Up
          </Button>
        </div>

        {/* Iphone mockup with content */}
        <div className="relative mt-12 flex h-[450px] w-full justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0.8 }}
            animate={{ opacity: 100, y: 0, scale: 1 }}
            transition={{ ease: [0, 0.51, 0.2, 1.01], duration: 0.8 }}
            className="absolute mx-auto mt-6 mr-58 hidden h-[850px] w-[400px] -rotate-18 items-center justify-center rounded-[75px] bg-black md:mt-12 md:flex md:h-[840px] md:w-[400px]"
          >
            <img
              className="absolute z-2 scale-105 object-cover"
              alt="Gold phone frame"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
            />
            <div className="h-full w-full">
              <div className="mt-20 flex justify-between px-0">
                <h1 className="flex items-end gap-2 px-12 text-5xl font-semibold tracking-tight text-background md:text-6xl">
                  Mon
                  <div className="mb-2 size-3 rounded-full bg-red-500 md:size-5" />
                </h1>
                <div className="mt-2 mr-8 flex flex-col items-end">
                  <p className="text-lg tracking-tighter text-muted-foreground md:text-xl">
                    Feburary 9
                  </p>
                  <p className="-mt-1 text-xl font-semibold tracking-tighter text-muted-foreground/50 md:text-2xl">
                    2025
                  </p>
                </div>
              </div>
              <img
                className="z-2 mx-auto mt-20 size-40 object-cover"
                alt="Gold phone frame"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0.8 }}
            animate={{ opacity: 100, y: 0, scale: 1 }}
            transition={{
              ease: [0, 0.71, 0.2, 1.01],
              duration: 0.8,
            }}
            className="absolute mx-auto mt-6 flex h-[850px] w-[400px] items-center justify-center rounded-[75px] bg-background md:mt-24 md:ml-58 md:h-[840px] md:w-[400px] md:rotate-20"
          >
            <img
              className="absolute z-2 scale-105 object-cover"
              alt="Gold phone frame"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
            />
            <div className="h-full w-full">
              <div className="mt-20 flex justify-between px-0">
                <h1 className="flex items-end gap-2 px-12 text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  Tue
                  <div className="mb-2 size-3 rounded-full bg-red-500 md:size-5" />
                </h1>
                <div className="mt-2 mr-8 flex flex-col items-end">
                  <p className="text-lg tracking-tighter text-muted-foreground md:text-xl">
                    Feburary 14
                  </p>
                  <p className="-mt-1 text-xl font-semibold tracking-tighter text-muted-foreground/50 md:text-2xl">
                    2025
                  </p>
                </div>
              </div>
              <img
                className="z-2 mx-auto mt-20 size-40 object-cover"
                alt="Gold phone frame"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Hero204 };
