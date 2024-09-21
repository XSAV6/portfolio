"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconInfoCircle, IconLink, IconX } from "@tabler/icons-react";
import invMan from "../../public/images/invManager.webp";
import lanPage from "../../public/images/landingPage.webp";
import ques from "../../public/images/q.webp";
import adminDashboard from "../../public/images/adminDashboard.webp";

export default function ExpandableCard() {
    const [active, setActive] = useState<
        (typeof cards)[number] | boolean | null
    >(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                            >
                                <Image
                                    width={800}
                                    height={800}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-64 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div className="overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                                <div className="flex justify-between items-start p-4 max-sm:p-2 max-sm:pt-8">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 min-w-[138px] text-sm max-sm:text-xs rounded-full font-bold bg-violet-500 text-white"
                                    >
                                        <IconLink className="inline mx-1" />
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-[90%] md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,0.6))] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={
                            card.disabled ? () => {} : () => setActive(card)
                        }
                        className="p-4 flex flex-col max-md:w-fit max-md:m-auto max-md:my-8 md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={400}
                                    height={400}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-full w-full max-h-56 max-w-96 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            disabled={card.disabled}
                            layoutId={`button-${card.title}-${id}`}
                            className={
                                card.disabled
                                    ? "cursor-not-allowed px-4 py-2 text-sm rounded-full font-bold bg-gray-400 text-black mt-4 md:mt-0"
                                    : "px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-violet-500 hover:text-white text-black mt-4 md:mt-0 transition-colors "
                            }
                        >
                            <IconInfoCircle
                                color="black"
                                className="inline mx-1"
                            />{" "}
                            View Details
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return <IconX color="gray" />;
};

const cards = [
    {
        description: "Inventory & Receipts Manager",
        title: "Inv Manager",
        src: invMan,
        ctaText: "Live Preview",
        ctaLink: "https://afko-inventory.web.app/",
        content: () => {
            return (
                <>
                    <p>
                        This is a project that i was working on previously for a
                        company, but was discontinued from the company for
                        financial reasons. But it still looks good and works
                        decently with basic features.
                    </p>
                    <p>The App's Main Features:</p>
                    <ul>
                        <li>
                            1. The app can show the current inventory of
                            warehouses and factories
                        </li>
                        <li>
                            2. You can add manufacturing receipts to add to the
                            warehouse inventory
                        </li>
                        <li>
                            3. The app lists a complete list of the galvanize
                            receipts that were registered
                        </li>
                        <li>
                            4. You can register a new galvanize receipt and it
                            will be registered to the database and the receipt
                            items will be deducted from the `exported to`
                            warehouse or company and it will be added the
                            `imported to` warehouse or company
                        </li>
                        <li>
                            5. After registering the galvanize receipt it will
                            generate a pdf document of the receipt and you can
                            download it
                        </li>
                        <li>
                            6. You can register item movement receipts to move
                            items from a warehouse to another
                        </li>
                        <li>
                            7. You can see the items that are currently still
                            galvanizing and are still at the company
                        </li>
                        <li>
                            8. You can choose a date range and the app will show
                            you the items that have been galvanized in that
                            specific date range
                        </li>
                    </ul>
                    <p>Additional Notes: </p>
                    <p>
                        Since this app was made for a company to manage its
                        inventory and receipts. It requires to be authenticated
                        to use the app. So here is a test account to try it:{" "}
                        <span>email: test@test.com - password: testpass</span>
                    </p>
                </>
            );
        },
    },
    {
        description: "Admin Dashboard made with NextJs",
        title: "Admin Dashboard",
        src: adminDashboard,
        ctaText: "Live Preview",
        ctaLink: "https://sav-admin-dashboard.web.app/",
        content: () => {
            return (
                <>
                    <p>
                        The Admin Dashboard is a user-friendly web interface
                        that helps administrators manage and visualize data for
                        their applications or services. Built with a modern,
                        responsive design, the dashboard adapts seamlessly to
                        different screen sizes, offering optimal usability
                        across mobile, tablet, and desktop devices.
                    </p>
                    <p>
                        The dashboard includes a dynamic sidebar for easy
                        navigation, comprehensive data tables with sorting and
                        pagination features, and real-time data visualization
                        using interactive charts. With the dark mode toggle,
                        users can customize the look and feel to suit their
                        preferences. Whether for analytics, content management,
                        or system monitoring, this dashboard provides a flexible
                        and customizable environment to manage your project's
                        data efficiently.
                    </p>
                    <p>
                        It's ideal for businesses, developers, and organizations
                        that require an intuitive admin panel to control and
                        monitor their application's operations, analytics, or
                        content.
                    </p>
                </>
            );
        },
    },
    {
        description: "Landing Page Template",
        title: "Landing Page",
        src: lanPage,
        ctaText: "Live Preview",
        ctaLink: "https://xsav6.github.io/landing-page/",
        content: () => {
            return (
                <p>
                    Simple yet modern landing page that can fit for any company.
                    Its responsive, modern and simple.
                </p>
            );
        },
    },

    {
        description: "More Coming Soon",
        title: "?",
        src: ques,
        ctaText: "Live Preview Soon",
        ctaLink: "",
        content: () => {
            return <p>Coming soon</p>;
        },
        disabled: true,
    },
];
