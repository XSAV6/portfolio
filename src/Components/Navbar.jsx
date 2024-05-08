import { Button, Flex, Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "../assets/colors";
import { SunOutlined, MoonOutlined, GithubOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";

const Navbar = ({
    darkMode,
    setDarkMode,
    homeRef,
    contactRef,
    previousProjectsRef,
    isScrolled,
}) => {
    const ThemeChangeHandler = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("themeMode", newMode ? "dark" : "light");
    };

    return (
        <Header className={"header"}>
            <motion.div
                initial={{
                    scale: 1,
                    border: "2px solid transparent",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                }}
                animate={
                    isScrolled
                        ? {
                              scale: 0.9,
                              border: "2px solid gray",
                              backgroundColor: darkMode ? "black" : "white",
                              boxShadow: darkMode
                                  ? "rgba(255, 240, 245, 0.3) 0px 2px 29px 0px"
                                  : "rgba(100, 100, 111, 0.2) 0px 2px 29px 0px",
                          }
                        : {}
                }
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="headerDiv"
            >
                <div className="demo-logo">
                    <a href="/">
                        <motion.h2
                            initial={{
                                x: -100,
                                opacity: 0,
                            }}
                            animate={isScrolled ? {} : { x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{
                                color: COLORS.primaryBlue,
                                margin: 0,
                                fontWeight: 700,
                                transition: "all 500ms easeInOut",
                                lineHeight: 0,
                            }}
                            className="logo1"
                        >
                            Mohammed Dev
                        </motion.h2>
                        <motion.h2
                            initial={{
                                x: -50,
                                opacity: 0,
                            }}
                            animate={isScrolled ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{
                                color: darkMode ? "white" : "black",
                                margin: 0,
                                fontWeight: 700,
                                transition: "all 500ms easeInOut",
                                lineHeight: 0,
                                position: "relative",
                            }}
                        >
                            <span
                                style={{
                                    color: COLORS.blue,
                                    position: "absolute",
                                    top: -10,
                                    left: "0",
                                }}
                            >
                                {"<"}
                            </span>
                            <span
                                style={{
                                    position: "absolute",
                                    top: -10,
                                    left: "1rem",
                                }}
                            >
                                SAV
                            </span>
                            <span
                                style={{
                                    color: COLORS.productRed,
                                    position: "absolute",
                                    top: 10,
                                    left: "1.7rem",
                                }}
                            >
                                DEV
                            </span>
                            <span
                                style={{
                                    color: COLORS.green,
                                    position: "absolute",
                                    top: 10,
                                    left: "4.2rem",
                                }}
                            >
                                {"/>"}
                            </span>
                        </motion.h2>
                    </a>
                </div>
                <Flex gap="middle">
                    {/* <Link
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            color: darkMode ? "white" : "black",
                        }}
                        href="/"
                    >
                        <LinkedinOutlined
                            style={{
                                fontSize: "1.5rem",
                            }}
                        />
                    </Link> */}
                    <Link
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            color: darkMode ? "white" : "black",
                        }}
                        href="https://github.com/XSAV6"
                    >
                        <GithubOutlined
                            className="githubLink"
                            style={{ fontSize: "1.5rem" }}
                        />
                    </Link>
                    <Button
                        onClick={() =>
                            homeRef.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className="homeBtn"
                    >
                        Home
                    </Button>
                    <Button
                        onClick={() =>
                            previousProjectsRef.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className="prevWorkBtn"
                    >
                        Previous Work
                    </Button>
                    <Button
                        onClick={() =>
                            contactRef.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className="contactBtn"
                    >
                        Contact
                    </Button>
                    <Flex gap="middle" justify="space-around" align="center">
                        <SunOutlined
                            style={{
                                color: darkMode ? "white" : "black",
                                fontSize: "1rem",
                            }}
                        />
                        <Switch
                            defaultChecked={darkMode}
                            onChange={ThemeChangeHandler}
                        />
                        <MoonOutlined
                            style={{
                                color: darkMode ? "white" : "black",
                                fontSize: "1rem",
                            }}
                        />
                    </Flex>
                </Flex>
            </motion.div>
        </Header>
    );
};

export default Navbar;
