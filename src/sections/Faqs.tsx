import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "What is Healthpay and how does it work?",
        answer: "Healthpay is a user-friendly mobile app and web platform designed to simplify healthcare finance management in India. It offers features like Care Now Pay Later options for out-of-pocket expenses and streamlined insurance claim submissions through NHCX integration.",
    },
    {
        question: "How does NHCX benefit healthcare providers?",
        answer: "NHCX streamlines the claims process for healthcare providers by automating data entry and submission, reducing manual errors, and facilitating faster payments. It also helps in standardizing pricing and improving fraud detection.",
    },
    {
        question: "What are the benefits of using NHCX for policyholders?",
        answer: "NHCX provides policyholders with a convenient way to track claims, receive real-time updates, and avail cashless settlements. It simplifies the overall claims experience and reduces the hassle of dealing with multiple insurers.",
    },
    {
        question: "How can I get started with Healthpay and NHCX?",
        answer: "To get started with Healthpay, you can download the mobile app or visit the website. For healthcare providers, NHCX integration can be facilitated through specific partnerships and agreements.",
    },
    {
        question: "Can I use Healthpay with any health insurance provider?",
        answer: "Healthpay is designed to work with a wide range of health insurance providers in India. However, specific features and integrations may vary depending on the insurer. It's recommended to check with your insurance provider for compatibility.",
    },
];

export default function Faqs() {
    const selectedIndex = 0;
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>FAQS</Tag>
                </div>

                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We've got{" "}
                    <span className="bg-gradient-to-r from-[#0079d0] to-[#8bdbf6] bg-clip-text text-transparent">answers</span>
                </h2>
                <p className="text-white/50 mt-4 text-lg text-center">Get answers to common questions about HealthPay and our services</p>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqindex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">{faq.question}</h3>
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
                                    className={twMerge("feather feather-plus text-[#3c8fe8] flex-shrink-0", selectedIndex === faqindex && "rotate-45")}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <div className={twMerge("mt-6", selectedIndex !== faqindex && "hidden")}>
                                <p className="text-white/50">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
