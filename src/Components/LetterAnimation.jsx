import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const LetterAnimation = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);
    return (
        <div ref={ref} style={{ overflow: "hidden" }}>
            {children.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { y: "100%", opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ delay: index * 0.05 }}
                    style={{
                        display: "inline-block",
                        // marginRight: char === " " ? "0.5ch" : 0, // Add space between letters
                    }}
                >
                    {char === " " ? "\u00A0" : char}{" "}
                    {/* Replace space with &nbsp; */}
                </motion.span>
            ))}
        </div>
    );
};

export default LetterAnimation;
