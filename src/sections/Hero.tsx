'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

const titleItem = {
  hidden: {
    opacity: 0,
    rotateX: 90,
    y: -100,
    transformPerspective: 1000,
  },
  show: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <motion.div
        className="container relative"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Tagline */}
        <motion.div
          variants={titleItem}
          className="flex justify-center"
        >
          <div className="inline-flex py-1 px-3 text-neutral-950 font-semibold rounded-full bg-gradient-to-r from-[#0079d0] to-[#8bdbf6]">
            ✨ 98% accuracy & compliance
          </div>
        </motion.div>

        {/* 3D Animated Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 leading-tight">
          <motion.span
            className="block"
            variants={titleItem}
          >
            Claims Simplified.
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-[#0079d0] to-[#8bdbf6] bg-clip-text text-transparent"
            variants={titleItem}
          >
            Revenue Accelerated.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={titleItem}
          className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto"
        >
          Effortlessly handle medical claims with HealthPay, streamline
          insurance workflows to maximize revenue.
        </motion.p>

        {/* Form */}
        <motion.form
          variants={titleItem}
          className="flex border border-white/15 rounded-full p-2 mt-8 relative max-w-lg mx-auto"
        >
          <input
            type="text"
            placeholder="Enter Your Mail"
            className="bg-transparent py-4 px-4 outline-none md:flex-1 text-white"
          />
          <Button
            variant="primary"
            className="whitespace-nowrap absolute right-2 bottom-3"
            type="submit"
            size="sm"
          >
            Book a Call
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
}
