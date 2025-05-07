import React, { ReactNode } from "react";
import {
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandTailwind,
} from "@tabler/icons-react";

const TechSkill = ({ icon, text }: { icon: ReactNode; text: string }) => (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
        <div className="p-4 rounded-full bg-gray-800 shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
            {icon}
        </div>
        <span className="text-white font-bold text-sm sm:text-base">{text}</span>
    </div>
);

const TechStack = () => {
    return (
        <div className="grid grid-cols-3 gap-6 sm:gap-8 max-sm:grid-cols-2 max-sm:gap-4 max-sm:w-full max-sm:justify-center">
            <TechSkill
                icon={<IconBrandHtml5 size={30} color="#E34F26" />}
                text="HTML"
            />
            <TechSkill
                icon={<IconBrandCss3 size={30} color="#1572B6" />}
                text="CSS"
            />
            <TechSkill
                icon={<IconBrandJavascript size={30} color="#F7DF1E" />}
                text="JavaScript"
            />
            <TechSkill
                icon={<IconBrandReact size={30} color="#61DAFB" />}
                text="React"
            />
            <TechSkill
                icon={<IconBrandNextjs size={30} color="#000000" />}
                text="NextJS"
            />
            <TechSkill
                icon={<IconBrandTailwind size={30} color="#38B2AC" />}
                text="Tailwind"
            />
        </div>
    );
};

export default TechStack;
