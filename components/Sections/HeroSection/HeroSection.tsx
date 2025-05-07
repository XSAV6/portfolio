"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
import { IconArrowRight } from "@tabler/icons-react";

const HeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <section
                id="home"
                className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen"
            >
                <p className="text-8xl font-extrabold max-md:text-6xl max-sm:text-6xl">
                    Hello There
                </p>
                <p className="text-center max-md:text-sm font-medium text-gray-400">
                    I'm a computer enthusiast & front-end developer. I create
                    modern web sites and web apps. Check out some of my work in
                    the previous projects section.
                </p>
                <a href="#work">
                    <Button >Previous Projects <IconArrowRight color="#9ca3af" className="ml-2"/></Button>
                    
                </a>
            </section>
        </motion.div>
    );
};

export default HeroSection;
