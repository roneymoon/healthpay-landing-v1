import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";

import Image from "next/image";



import workflow_team from "@/assets/images/workflow_team.svg"
import overview_dashboard from "@/assets/images/overview_dashboard.svg"
import claim_validation from "@/assets/images/claim_validation.svg"

const features = [
    "Claims Flow",
    "Pre-Auth Check",
    "AI Parsing",
    "Comm Hub",
    "Elig Checker",
    "Smart Routing",
    "Role Control",
  ];
  


export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>features</Tag>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-center mt-6">
                    India's first AI intergrated {"  "}
                    <span className="bg-gradient-to-r from-[#0079d0] to-[#8bdbf6] bg-clip-text text-transparent">
                        RCM solution
                    </span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Automated Claims Orchestration"
                        description="Seamlessly manage end-to-end claim workflows
                        From pre-auth to final settlement."
                        className="md:col-span-2 lg:col-span-1"
                    >
                        {/* <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-30 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    alt="avatar2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-20 border-amber-500">
                                <Image
                                    src={avatar3}
                                    alt="avatar3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 bg-transparent">
                                <div className="size-full rounded-full bg-neutral-700 inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div> */}
                        <Image src={workflow_team} alt="workflow_team" className="w-full h-full object-cover" />
                    </FeatureCard>
                    <FeatureCard
                        title="AI-Powered Document Parsing"
                        description="Extract insights from unstructured medical documents into structured, claim-ready data."
                        className="md:col-span-2 lg:col-span-1"
                    >
                        {/* <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth this year
                            </p>
                        </div> */}
                        <Image src={overview_dashboard} alt="ai_algorithm" className="w-full h-full object-cover" />
                    </FeatureCard>
                    <FeatureCard
                        title="Real-Time Eligibility Checks"
                        description="Instant insurance policy validation
                        check claim eligibility using patient’s mobile no., insurance ID, or ABHA ID"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1"
                    >
                        {/* <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-30 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    alt="avatar2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-20 border-amber-500">
                                <Image
                                    src={avatar3}
                                    alt="avatar3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 bg-transparent">
                                <div className="size-full rounded-full bg-neutral-700 inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div> */}
                        <Image src={claim_validation} alt="claim_validation" className="w-full h-[100%]" />
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border md:px-5 md:py-2 border-white/10 inline-flex px-3 py-1.5  rounded-2xl gap-3 items-center"
                        >
                            <span className="bg-[#3c8fe8] text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl">
                                &#10038;
                            </span>
                            <span className="font-medium text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
