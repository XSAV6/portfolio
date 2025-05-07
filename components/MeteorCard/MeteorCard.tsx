"use client";
import React, { useEffect, useRef, useState } from "react";
import { Meteors } from "../ui/meteors";
import { motion, useAnimationControls } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";

export function MeteorCard({
    title,
    desc,
    btnText,
}: {
    title: React.ReactNode;
    desc: string;
    btnText: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimationControls();

    const popUpRef = useRef<HTMLDivElement>(null);

    // Function to toggle the pop-up
    const togglePopUp = async () => {
        if (isOpen) {
            await controls.start({
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.1, ease: "easeInOut" },
            });
            setIsOpen(false);
        } else {
            setIsOpen(true);
            controls.start({
                opacity: 1,
                scale: 1,
                transition: { duration: 0.2, ease: "easeInOut" },
            });
        }
    };

    // Detect outside click and close pop-up
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popUpRef.current &&
                !popUpRef.current.contains(event.target as Node)
            ) {
                controls.start({
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.1, ease: "easeInOut" },
                });
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, controls]);

    return (
        <div className="flex-1 ">
            <div className=" w-full relative max-w-sm max-sm:max-w-72">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-8 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                        {title}
                    </h1>

                    <p className="font-normal text-base max-sm:text-sm text-slate-500 mb-4 relative z-50">
                        {desc}
                    </p>

                    {/* <a href="/files/cv.pdf" download> */}
                    {/* </a> */}

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="border px-4 py-1 rounded-full max-sm:text-sm border-gray-500 text-gray-300 text-center align-middle"
                        onClick={togglePopUp}
                    >
                        <IconDownload size={20} className="inline mr-1" />{" "}
                        {btnText}
                    </motion.button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={controls}
                    ref={popUpRef}
                    className="absolute -bottom-20 left-5 flex flex-col gap-2 z-50 px-2 py-2 rounded-lg ml-4 bg-[#202020]"
                >
                    <div className="absolute rounded-lg top-0 left-8 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#202020]"></div>
                    <a href="/files/enCV.pdf" download>
                        <motion.button
                            whileHover={{
                                backgroundColor: "#313131",
                                color: "white",
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="max-sm:text-sm text-gray-300 text-center align-middle rounded-lg px-4 py-2"
                        >
                            <IconDownload size={20} className="inline mr-1" />{" "}
                            English CV
                        </motion.button>
                    </a>
                    <a href="/files/trCV.pdf" download>
                        <motion.button
                            whileHover={{
                                backgroundColor: "#313131",
                                color: "white",
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="max-sm:text-sm text-gray-300 text-center align-middle rounded-lg px-4 py-2"
                        >
                            <IconDownload size={20} className="inline mr-1" />{" "}
                            Turkish CV
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
