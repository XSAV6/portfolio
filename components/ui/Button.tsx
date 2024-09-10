"use client";
import React from "react";
import { motion } from "framer-motion";

const Button = ({ children }: { children: string }) => {
    return (
        // Button code
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex rounded-full h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none "
        >
            {children}
        </motion.button>
    );
};

export default Button;
