import React from "react";
import Button from "../ui/Button";
import {
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandTailwind,
} from "@tabler/icons-react";

const MobileTechStack = () => {
    return (
        <div className="max-lg:block hidden">
            <p className="text-2xl font-medium max-md:text-1xl max-sm:text-1xl m-2 align-middle text-center">
                Tech Stack
            </p>
            <div className="flex flex-row gap-6 max-sm:gap-4 font-medium text-lg bg-[#171717] rounded-2xl px-6 py-3">
                <IconBrandHtml5 size={32} />
                <IconBrandCss3 size={32} />
                <IconBrandJavascript size={32} />
                <IconBrandReact size={32} />
                <IconBrandNextjs size={32} />
                <IconBrandTailwind size={32} />
            </div>
        </div>
    );
};

export default MobileTechStack;
