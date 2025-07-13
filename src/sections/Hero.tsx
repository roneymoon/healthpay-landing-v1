'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';


export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">


      {/* 🔼 Content on top */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="inline-flex py-1 px-3 text-neutral-950 font-semibold rounded-full bg-gradient-to-r from-[#0079d0] to-[#8bdbf6]">
          ✨ 98% accuracy & compliance
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-bold mt-6 leading-tight">
          <motion.span
            initial={{ opacity: 0, rotateX: 90, y: -100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }}
            className="block"
          >
            Claims Simplified.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotateX: 90, y: -100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.6, 0.01, 0.05, 0.9] }}
            className="block bg-gradient-to-r from-[#0079d0] to-[#8bdbf6] bg-clip-text text-transparent"
          >
            Revenue Accelerated.
          </motion.span>
        </h1>

        <p className="text-center text-xl text-white/60 mt-6 max-w-2xl">
          Effortlessly handle medical claims with HealthPay, streamline insurance workflows to maximize revenue.
        </p>

        <form className="flex border border-white/15 rounded-full p-2 mt-8 relative max-w-lg w-full">
          <input
            type="text"
            placeholder="Enter Your Mail"
            className="bg-transparent py-4 px-4 outline-none flex-1 text-white placeholder-white/50"
          />
          <Button
            variant="primary"
            className="whitespace-nowrap absolute right-2 bottom-3"
            type="submit"
            size="sm"
          >
            Book a Call
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
