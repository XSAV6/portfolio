"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export default function MyTracingBeam({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TracingBeam className="">
            <div className=" antialiased pt-4 relative">{children}</div>
        </TracingBeam>
    );
}
