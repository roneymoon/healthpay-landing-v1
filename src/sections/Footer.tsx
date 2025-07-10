import healthPayLogo from "@/assets/images/healthpay.png";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                        <Image
                            src={healthPayLogo}
                            alt="logo"
                            className="h-9 md:h-9 w-auto"
                        />
                        <p className="text-white text-lg">Health<span className="font-bold">Pay</span></p>
                    </div>
                    <div className="flex gap-6">
                        {footerLinks.map((link) => (
                            <a href={link.href}
                                className="text-white/50 text-sm">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
