import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Modern Design Tool Landing Page",
    description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white pb-[100px]`}
            >
                {/* 🎥 Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="fixed inset-0 w-full h-full object-cover -z-20"
                >
                    <source src="/videos/blue_background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* ✨ Glassmorphism Overlay */}
                <div className="fixed inset-0 -z-10 backdrop-blur-sm bg-white/10 border-t border-white/10" />

                {/* 🔼 Page Content */}
                {children}
            </body>
        </html>
    );
}
