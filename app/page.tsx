import Lamp from "@/components/Lamp/Lamp";
import type { Metadata } from "next";
import Head from "next/head";
import Background from "@/components/Background/Background";
import React from "react";
import MyTracingBeam from "@/components/MyTracingBeam/MyTracingBeam";
import { FloatingNav } from "@/components/ui/floating-navbar";
import ContactSection from "@/components/Sections/ContactSection/ContactSection";
import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import AboutSection from "@/components/Sections/AboutSection/AboutSection";
import PreviousWorkSection from "@/components/Sections/PreviousWorkSection/PreviousWorkSection";

export const metadata: Metadata = {
    title: "XSAV6 Portfolio 👀",
    description:
        "My Name is Mohammed Walid AKA XSAV6, and this is my web development portfolio.",
    icons: {
        icon: [
            {
                url: "/favicon-32x32.png",
                href: "/favicon-32x32.png",
            },
        ],
    },
};
export default function Home() {
    return (
        <>
            <Head>
                <title>XSAV6 Portfolio 👀</title>
                <meta
                    name="description"
                    content="My Name is Mohammed Walid AKA XSAV6, and this is my web development portfolio."
                />
                <meta name="theme-color" content="#171717" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between mb-6 ">
                {/* <Lamp /> */}
                {/* <MyTracingBeam> */}
                            <Head>
                                <title>XSAV6 Portfolio 👀</title>
                                <meta
                                    name="description"
                                    content="My Name is Mohammed Walid AKA XSAV6, and this is my web development portfolio."
                                />
                                <meta name="theme-color" content="#171717" />
                                <link rel="icon" href="/favicon.ico" />
                            </Head>
                            <Background />
                            <FloatingNav />
                            <HeroSection />
                            <AboutSection />
                            <PreviousWorkSection />
                            <ContactSection />
                        {/* </MyTracingBeam> */}
            </main>
        </>
    );
}

// tailwind.config.js code
