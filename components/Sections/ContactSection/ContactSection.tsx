"use client";
import React, { useState } from "react";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandWhatsapp,
    IconCircleDashedCheck,
    IconClipboard,
    IconMail,
} from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const ContactSection = () => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = ({ text }: { text: string }) => {
        // URL to your sound file
        const successSoundUrl = "/sounds/copySound.mp3";

        // Create an Audio instance
        const successSound = new Audio(successSoundUrl);
        if (navigator.clipboard && navigator.clipboard.writeText) {
            // Modern clipboard API (works in most desktop browsers and some mobile)
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    console.log("Text copied to clipboard!");
                    setCopied(true);

                    // Play the success sound
                    successSound
                        .play()
                        .catch((error) =>
                            console.error("Failed to play sound:", error)
                        );

                    setTimeout(() => {
                        setCopied(false);
                    }, 3000);
                })
                .catch((error) => {
                    console.error("Failed to copy text: ", error);
                    alert("Failed to copy text.");
                });
        } else {
            // Fallback for iOS and older browsers
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px"; // Move textarea offscreen
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand("copy");
                console.log("Fallback: Text copied to clipboard!");
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 3000);
            } catch (error) {
                console.error("Fallback: Failed to copy text: ", error);
                alert("Failed to copy text.");
            }
            document.body.removeChild(textarea); // Cleanup
        }
    };

    return (
        <section
            id="contact"
            className="relative flex flex-row max-lg:flex-col gap-4 items-center justify-center px-4 "
        >
            <span
                className={
                    copied
                        ? "fixed font-medium align-middle top-28 left-[50%] transform -translate-x-1/2 bg-[#171717] border-solid border-gray-900 border-2 rounded-full py-2 px-8 transition-all opacity-1 z-[9999] duration-300"
                        : "fixed font-medium align-middle top-28 left-[50%] transform -translate-x-1/2 bg-[#171717] border-solid border-gray-900 border-2 rounded-full py-2 px-8 transition-all opacity-0 z-[9999] duration-300"
                }
            >
                <IconCircleDashedCheck
                    color="#32d74b"
                    className="inline mr-2"
                />
                Copied!
            </span>

            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center px-4">
                <div className="flex flex-col gap-4 justify-center items-center sm:flex-row lg:w-auto sm:w-[470px] sm:justify-between">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm"
                        onClick={() =>
                            copyToClipboard({
                                text: "mvalid.cebe275@gmail.com",
                            })
                        }
                    >
                        <IconMail />
                        <span>mvalid.cebe275@gmail.com</span>
                        <IconClipboard />
                    </HoverBorderGradient>
                    <a href="https://instagram.com/whosmhmd1/">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm"
                        >
                            <IconBrandInstagram />
                            <span>Instagram</span>
                        </HoverBorderGradient>
                    </a>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center sm:flex-row lg:w-auto sm:w-[470px] sm:justify-between">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm"
                        onClick={() =>
                            copyToClipboard({ text: "+905422299988" })
                        }
                    >
                        <IconBrandWhatsapp />
                        <span>+90 542 229 99 88</span>
                        <IconClipboard />
                    </HoverBorderGradient>
                    <a href="https://github.com/XSAV6">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm"
                        >
                            <IconBrandGithub />
                            <span>Github</span>
                        </HoverBorderGradient>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
