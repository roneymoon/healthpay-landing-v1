"use client"


import NHA from "@/assets/images/NHA.png"
import NBHA from "@/assets/images/NABH_2.png"
import HIPAA from "@/assets/images/HIPAA.png"
import ISO_27001 from "@/assets/images/ISO_27001_2.png"


import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "NHA", image: NHA },
    { name: "NBHA", image: NBHA },
    { name: "HIPAA", image: HIPAA },
    { name: "ISO_27001", image: ISO_27001 },
    // { name: "Outside", image: outsideLogo },
    // { name: "Apex", image: apexLogo },
    // { name: "Celestial", image: celestialLogo },
    // { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Certified to Deliver Confidence in Every Claim
                </h3>
                <div
                    className="flex overflow-hidden mt-12"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <motion.div
                    animate={{x: "-50%"}}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-none gap-24 pr-24 ">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Fragment key={index}>
                                {logos.map((logo) => (
                                    <Image
                                        src={logo.image}
                                        key={logo.name}
                                        alt={logo.name}
                                        className="h-14 w-full"
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
