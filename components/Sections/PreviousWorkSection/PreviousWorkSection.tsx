"use client";
import ExpandableCard from "@/components/ExpandableCard/ExpandableCard";
import React from "react";

const PreviousWorkSection = () => {
    return (
        <section
            id="work"
            className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen max-md:mt-48"
        >
            <p className="text-2xl text-center font-bold sm:text-4xl mb-4 lg:text-6xl">
                Some Previous Projects
            </p>
            <ExpandableCard />
        </section>
    );
};

export default PreviousWorkSection;
