"use client";

import { motion } from "framer-motion";
import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
};

export default function Background() {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: "linear" }}
            className="fixed top-0 left-0 -z-10 w-full h-full"
        >
            <BackgroundBeamsWithCollision />
        </motion.div>
    );
}
