"use client";

import { FloatingDockDemo } from "@/components/FloatingDock/FloatingDock";
import TechStack from "@/components/TechStack/TechStack";
import Image from "next/image";
import React from "react";
import { MeteorCard } from "@/components/MeteorCard/MeteorCard";
import { FlipWords } from "@/components/ui/flip-words";
import me from "../../../public/images/me.webp";

const AboutSection = () => {
    const age = new Date().getFullYear() - 2006;
    return (
        <section
            id="about"
            className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen"
        >
            <p className="text-6xl font-bold max-md:text-5xl max-sm:text-4xl m-6">
                About Me
            </p>
            <div className="flex flex-row max-lg:flex-col max-lg:mx-0 gap-32 max-lg:gap-4 items-center justify-around max-w-7xl w-full">
                {/* First Section */}
                <div className="flex-1 items-center justify-center">
                    <MeteorCard
                        title={
                            <>
                                <p className="text-center max-md:text-sm inline">
                                    I build
                                </p>
                                <FlipWords
                                    words={["beautiful", "modern", "unique"]}
                                />
                                <p className="text-center max-md:text-sm inline">
                                    websites.
                                </p>
                            </>
                        }
                        desc={
                            "I'm Mohammed Walid, " +
                            age +
                            " years old, I've been self-learning and passionate about tech and programming since the age of 13, leading to being successful at creating projects independently or within a team and being very adaptable to change and learning new things, I care a lot about details and creating an amazing user experience. I have proved competence whenever I faced a problem. I believe my competence gives me a huge advantage making me a problem solver for almost every problem I may face."
                        }
                        btnText="Download CV"
                    />
                </div>

                {/* Second Section */}
                <div className="flex-1 h-[500px] box-border rounded-xl flex items-center justify-between flex-col gap-8 max-w-lg w-full">
                    <Image
                        src={me}
                        alt="self portrait"
                        className="aspect-square h-full max-w-96 max-sm:max-w-64 rounded-xl object-cover"
                    />
                    <TechStack />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
