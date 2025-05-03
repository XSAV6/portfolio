import React, { ReactNode } from "react";
import Button from "../ui/Button";
import {
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandTailwind,
} from "@tabler/icons-react";

const TechSkill = ( {icon, text}: {icon: ReactNode, text: string} ) => <div className="flex flex-justify-center items-center gap-2 flex-col text-sm w-16">
{icon}
<span className="text-gray-300">{text}</span>
</div>

const DesktopTechStack = () => {
    return (
        <div className="lg:block hidden mt-24">
            <p className="text-6xl font-medium max-md:text-1xl max-sm:text-1xl mb-8 align-middle text-center">
                Tech Stack
            </p>
            <div className="flex flex-row gap-6 max-sm:gap-4 font-medium text-lg bg-[#171717] border-2  rounded-full px-14 py-3 mb-4">
                <TechSkill icon={<IconBrandHtml5 size={32} />} text="HTML"/>
                <TechSkill icon={<IconBrandCss3 size={32} />} text="CSS"/>
                <TechSkill icon={<IconBrandJavascript size={32} />} text="Javascript"/>
                <TechSkill icon={<IconBrandReact size={32} />} text="React"/>
            <TechSkill icon={<IconBrandNextjs size={32} />} text="NextJS"/>
            <TechSkill icon={<IconBrandTailwind size={32} />} text="Tailwind"/>
            </div>
            
        </div>
    );
};

export default DesktopTechStack;
