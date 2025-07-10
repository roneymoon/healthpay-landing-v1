"use client";
import Tag from "@/components/Tag";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const text = `is fragmented and manual, resulting in delays of up to 46 days, claim rejection rates of 20% and significant cash flow challenges for hospitals.`;
const words = text.split(" ");

// Words that should show the gradient
const gradientWords = ["46", "days", "20%", "cash", "flow"];

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latestValue) => {
      setCurrentWord(Math.floor(latestValue));
    });
    return () => unsubscribe();
  }, [wordIndex]);

  const isComplete = currentWord >= words.length;

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20">
          <div className="flex justify-center">
            <Tag>Introducing HealthPay</Tag>
          </div>

          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_0%,black_96%,transparent)]">
            <span>The current healthcare claims process </span>
            <span>
              {words.map((word, index) => {
                const isVisible = index < currentWord;
                const cleanedWord = word.replace(/[.,]/g, ""); // Remove punctuation
                const isGradientWord = gradientWords.includes(cleanedWord);

                return (
                  <span
                    key={index}
                    className={twMerge(
                      "transition duration-500 text-white/15",
                      isVisible &&
                        (isGradientWord
                          ? "bg-gradient-to-r from-[#0079d0] via-[#4bbbe8] to-[#8bdbf6] bg-clip-text text-transparent font-semibold"
                          : "text-white")
                    )}
                  >
                    {word + " "}
                  </span>
                );
              })}
            </span>

            {/* Final glowing reveal */}
            <motion.span
              initial={{ opacity: 0, scale: 0.96, filter: "blur(2px)" }}
              animate={
                isComplete
                  ? {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    }
                  : { opacity: 0, scale: 0.96, filter: "blur(2px)" }
              }
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className={twMerge(
                "mt-6 block bg-gradient-to-r from-[#0079d0] via-[#4bbbe8] to-[#8bdbf6] bg-clip-text text-transparent font-semibold",
                "drop-shadow-[0_0_10px_rgba(139,219,246,0.15)]"
              )}
            >
              That&apos;s why we built HealthPay.
            </motion.span>
          </div>
        </div>

        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
