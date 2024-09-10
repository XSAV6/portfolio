"use client";

import { FloatingDockDemo } from "@/components/FloatingDock/FloatingDock";
import MobileTechStack from "@/components/MobileTechStack/MobileTechStack";
import Image from "next/image";
import React from "react";
import Me from "@/public/images/me.webp";
import { MeteorCard } from "@/components/MeteorCard/MeteorCard";
import { FlipWords } from "@/components/ui/flip-words";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen"
        >
            <p className="text-6xl font-medium max-md:text-5xl max-sm:text-4xl m-6">
                About Me
            </p>
            <div className="flex flex-row max-lg:flex-col gap-32 max-lg:gap-4 items-center justify-around">
                <div className="flex-1 items-center justify-center">
                    <MeteorCard
                        title={
                            <>
                                <p className="text-center max-md:text-sm inline">
                                    I build
                                </p>
                                <FlipWords
                                    words={["beautiful", "modern", "amazing"]}
                                />
                                <p className="text-center max-md:text-sm inline">
                                    websites.
                                </p>
                            </>
                        }
                        desc="I'm Mohammed Cebe, 18 years old, I've been self-learning and passionate about tech and programming since the age of 13, leading to being successful at creating projects independently or within a team and being very adaptable to change and learning new things, I care a lot about details and creating an amazing user experience. I have proved competence whenever I faced a problem. I believe my competence gives me a huge advantage making me a problem solver for almost every problem I may face."
                        btnText="Download CV"
                    />
                </div>

                <div className="flex-1 rounded-full h-full flex items-center justify-between flex-col gap-8">
                    <FloatingDockDemo />
                    <Image
                        width={800}
                        height={800}
                        src={Me}
                        alt="self portrait"
                        className="aspect-square max-w-96 max-sm:max-w-64 rounded-full object-cover"
                    />
                    <MobileTechStack />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
