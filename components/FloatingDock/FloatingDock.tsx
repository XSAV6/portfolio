import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHtml,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandReact,
    IconBrandNextjs,
    IconBrandTailwind,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "HTML",
            icon: (
                <IconHtml className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "CSS",
            icon: (
                <IconBrandCss3 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Javascript",
            icon: (
                <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "React JS",
            icon: (
                <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "NextJS",
            icon: (
                <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Tailwind",
            icon: (
                <IconBrandTailwind className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock items={links} />
        </div>
    );
}
