import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                width: "fit-content",
                // overflow: "hidden",
            }}
        >
            <motion.div
                id={id}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.35,
                            ease: "easeInOut",
                            duration: 0.5,
                        },
                    },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                    staggerChildren: 0.35,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
