"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion } from "framer-motion";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <title>XSAV6 Portfolio 👀</title>
                <meta
                    name="description"
                    content="My Name is Mohammed Walid AKA XSAV6, and this is my web development portfolio."
                />
                <meta name="theme-color" content="#171717" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.body
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear" }}
                className={inter.className + " dark"}
            >
                {children}
            </motion.body>
        </html>
    );
}
