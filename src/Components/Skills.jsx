import { Flex, Row } from "antd";
import Title from "antd/es/typography/Title";
import LetterAnimation from "./LetterAnimation";
import Skill from "./Skill";
import HTML from "../assets/expertise/html.svg";
import CSS from "../assets/expertise/css.svg";
import JS from "../assets/expertise/javascript.svg";
import ReactLogo from "../assets/expertise/react.svg";
import Tailwind from "../assets/expertise/tailwind.svg";
import Antd from "../assets/expertise/antd.svg";
import React, { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import anim3 from "../assets/anim3.json";
import Lottie from "lottie-react";

const Skills = () => {
    const [secondStart, setSecondStart] = useState(false);
    const ref = useRef();
    const ref2 = useRef();
    const isInView = useInView(ref, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const container = {
        hidden: { scale: 0, rotate: 180 },
        show: {
            scale: 1,
            rotate: 0,
            transition: {
                staggerChildren: 0.6,
            },
        },
    };
    const container2 = {
        hidden: { scale: 0, rotate: 180 },
        show: {
            scale: 1,
            rotate: 0,
            transition: {
                staggerChildren: 0.6,
            },
        },
    };
    const controls = useAnimation();
    const controls2 = useAnimation();

    return (
        // <Reveal>
        <Flex
            justify="space-between"
            align="center"
            gap="large"
            vertical
            // style={{
            //     height: "100vh",
            // }}
            id="skills"
            className="lottieBgCont"
        >
            <Lottie
                animationData={anim3}
                className="lottieBg"
                style={{ width: "40%", height: "40%" }}
            />
            <Lottie
                animationData={anim3}
                style={{
                    position: "absolute",
                    top: "20%",
                    right: 0,
                    width: "30%",
                    height: "30%",
                }}
            />
            <Lottie
                animationData={anim3}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: "30%",
                    width: "20%",
                    height: "20%",
                }}
            />
            <Title className="subTitle" style={{ letterSpacing: 3 }} level={2}>
                <LetterAnimation>Expertise</LetterAnimation>
            </Title>
            <Row style={{ margin: "1rem auto 3rem auto" }}>
                <motion.div
                    variants={container}
                    initial="hidden"
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                    }}
                    animate={controls}
                    ref={ref}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: 0,
                    }}
                    onAnimationEnd={() => setSecondStart(true)}
                >
                    <Skill
                        href="https://html.com/"
                        title="HTML"
                        src={HTML}
                        controls={controls}
                        isInView={isInView}
                    />
                    <Skill
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        title="CSS"
                        controls={controls}
                        src={CSS}
                        isInView={isInView}
                    />
                    <Skill
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        title="Javascript"
                        controls={controls}
                        src={JS}
                        isInView={isInView}
                    />
                </motion.div>
            </Row>
            <Row>
                <motion.div
                    variants={container2}
                    initial="hidden"
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                    }}
                    animate={controls2}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: 0,
                    }}
                    ref={ref2}
                >
                    <Skill
                        href="https://react.dev/"
                        title="React"
                        src={ReactLogo}
                        controls={controls2}
                        isInView={isInView2}
                        secondStart={secondStart}
                        second={true}
                    />
                    <Skill
                        href="https://tailwindcss.com/"
                        title="Tailwind"
                        src={Tailwind}
                        controls={controls2}
                        isInView={isInView2}
                        secondStart={secondStart}
                        second={true}
                    />
                    <Skill
                        href="https://ant.design/"
                        title="Ant Design"
                        src={Antd}
                        controls={controls2}
                        isInView={isInView2}
                        secondStart={secondStart}
                        second={true}
                    />
                </motion.div>
            </Row>
        </Flex>
        // </Reveal>
    );
};

export default Skills;
