import Tag from "@/components/Tag";
import Image from "next/image";

import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";

import ABHA from "@/assets/images/ABHA.png"

import IntegrationsColumn from "@/components/IntegrationsColumn";
const integrations = [
    {
        name: "ABHA (NDHM)",
        icon: ABHA,
        description:
            "seamless health record linkage and patient verification.",
    },
    {
        name: "eSanjeevani",
        icon: ABHA,
        description:
            "streamline virtual consultations and linked billing.",
    },
    {
        name: "Aarogya Setu",
        icon: ABHA,
        description:
            "fetch patient health data and enable faster claim approvals.",
    },
    {
        name: "TPA Portals",
        icon: ABHA,
        description:
            "pre-auth, claim updates, and final settlement automation.",
    },
    {
        name: "Hospital HIS/EHR",
        icon: ABHA,
        description:
            "direct data extraction and real-time updates.",
    },
    {
        name: "Insurance Core Systems",
        icon: ABHA,
        description:
            "eliminate manual entries, verify policies, and track claim status in real time.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-1">
                    <div>
                        <Tag className="mb-4">Integrations</Tag>
                        <h2 className="text-5xl md:text-6xl font-medium leading-tight">
                            Tailored for EHRs, TPAs, and{" "}
                            <span className="bg-gradient-to-r from-[#0079d0] to-[#8bdbf6] bg-clip-text text-transparent">
                                Insurers
                            </span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Layers that seamlessly connects with your favourite
                            tools, making it easy to plug into workflow and
                            collaborate across platforms.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] overflow-hidden mt-14 ml-8 grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
