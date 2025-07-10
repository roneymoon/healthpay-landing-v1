"use client";

import Image from "next/image";
import logoImage from "../assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import healthPayLogo from "@/assets/images/healthpay.png";

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "FAQs", href: "#faqs" },
    { label: "Blog", href: "#blog" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[32px] backdrop-blur bg-neutral-950/70">
                        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={healthPayLogo}
                                    alt="logo"
                                    className="h-9 md:h-9 w-auto"
                                />
                                <p className="text-white text-lg">
                                    Health<span className="font-bold">Pay</span>
                                </p>
                            </div>
                            <div className="hidden lg:flex justify-center items-center">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => {
                                        return (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                            >
                                                {link.label}
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4 ">
                                <Button
                                    variant="primary"
                                    className="hidden md:inline-flex items-center justify-center"
                                >
                                    Try Free
                                </Button>
                                {/* hamburger menu icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu lg:hidden md:flex md:mt-3 md:mr-4"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4 ">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className="py-2"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button
                                            className="md:hidden"
                                            variant="primary"
                                            
                                        >
                                            Try Free
                                        </Button>
                                        <Button variant="secondary">
                                            Book a Demo
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]">

            </div>
        </>
    );
}
