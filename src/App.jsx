import "./App.css";
import {
    Button,
    Col,
    ConfigProvider,
    Flex,
    Image,
    Layout,
    Modal,
    Row,
    Typography,
    Divider,
    theme,
} from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { useRef, useState, useEffect } from "react";
import { COLORS } from "./assets/colors";
import Link from "antd/es/typography/Link";
import {
    MailOutlined,
    InstagramOutlined,
    WhatsAppOutlined,
    GithubOutlined,
} from "@ant-design/icons";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import heroAnim from "./assets/heroAnim.json";
import codingTabs from "./assets/codingTabs.json";
import Reveal from "./Components/Reveal";
import { motion, useAnimation, useInView } from "framer-motion";
import WAQR from "./assets/images/WhatsAppQR.jpeg";
import Navbar from "./Components/Navbar";
import LetterAnimation from "./Components/LetterAnimation";
import Skills from "./Components/Skills";
import anim1 from "./assets/anim1.json";
import anim3 from "./assets/anim3.json";
import Projects from "./Components/Projects";
import hiImg from "./assets/images/Hi.gif";
import { debounce } from "lodash";

const { Title, Text } = Typography;
const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("themeMode") === "dark" ? true : false
    );
    const [isWAOpen, setIsWAOpen] = useState(false);
    const homeRef = useRef();
    const previousProjectsRef = useRef();
    const contactRef = useRef();

    const handleWAClose = () => {
        setIsWAOpen(false);
    };

    const words = [
        "Mohammed Walid.",
        "A Front-End Dev!",
        "A Builder of Things!",
    ];

    const contactContainer = {
        hidden: { opacity: 0, y: 100, scale: 0 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                staggerChildren: 0.8,
            },
        },
    };

    const contactItem = {
        hidden: { opacity: 0, y: 100, scale: 0 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { ease: "easeInOut", duration: 0.8 },
        },
    };

    const contactSecRef = useRef(null);
    const contactIsInView = useInView(contactRef, { once: true });

    const contactControls = useAnimation();

    useEffect(() => {
        if (contactIsInView) {
            contactControls.start("show");
        }
    }, [contactIsInView]);

    const [hasScrolled, setHasScrolled] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (ref.current.scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        }, 100);

        ref.current.addEventListener("scroll", handleScroll);

        return () => {
            ref.current.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ConfigProvider
            theme={{
                algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
                token: {
                    colorPrimary: COLORS.primaryBlue,
                    colorText: darkMode ? "white" : "black",
                    colorLink: darkMode ? COLORS.cyan : COLORS.primaryBlue,
                },
            }}
        >
            <Layout ref={ref} className="layout">
                <Navbar
                    homeRef={homeRef}
                    contactRef={contactSecRef}
                    previousProjectsRef={previousProjectsRef}
                    setDarkMode={setDarkMode}
                    darkMode={darkMode}
                    isScrolled={hasScrolled}
                />
                <Content className="content ">
                    <Flex
                        align="flex-start"
                        id="home"
                        ref={homeRef}
                        className="sec1"
                        gap="medium"
                        style={{
                            height: "100vh",
                        }}
                    >
                        <Lottie animationData={anim1} className="sec1bg" />
                        <Flex
                            style={{ paddingTop: "5rem" }}
                            justify="center"
                            align="center"
                            className="firstSecFlex"
                        >
                            <Flex
                                align="flex-start"
                                justify="center"
                                vertical
                                flex={1}
                                gap="1rem"
                                className="firstSec1"
                            >
                                <Reveal>
                                    <Flex
                                        style={{ width: "100%" }}
                                        align="flex-start"
                                        vertical
                                        className="textBox1"
                                    >
                                        <Text className="mainText">
                                            Hi There{" "}
                                            <img
                                                style={{
                                                    width: 28,
                                                }}
                                                src={hiImg}
                                                alt="👋"
                                            />
                                            . I'm
                                        </Text>
                                        <Title level={1} className="typewriter">
                                            <Typewriter
                                                words={words}
                                                loop
                                                cursor
                                                cursorBlinking
                                            />
                                        </Title>
                                    </Flex>
                                    <Flex
                                        vertical
                                        align="flex-start"
                                        gap="1rem"
                                        className="textBox2"
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.primaryBlue,
                                                fontWeight: 500,
                                            }}
                                            className="secText"
                                        >
                                            <LetterAnimation>
                                                Frontend Developer
                                            </LetterAnimation>
                                        </Text>
                                        <Text className="smallText">
                                            <LetterAnimation>
                                                4 Years Of Experience
                                            </LetterAnimation>
                                        </Text>
                                        <Button
                                            icon={<MailOutlined />}
                                            type="primary"
                                            size="large"
                                            className="bigBtn"
                                            onClick={() =>
                                                contactSecRef.current?.scrollIntoView(
                                                    {
                                                        behavior: "smooth",
                                                    }
                                                )
                                            }
                                        >
                                            Contact
                                        </Button>
                                    </Flex>
                                </Reveal>
                            </Flex>
                            <Flex flex={1}>
                                <motion.div
                                    initial={{ x: 75, scale: 0.5, opacity: 0 }}
                                    animate={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Lottie
                                        className="heroLottie"
                                        animationData={heroAnim}
                                    />
                                </motion.div>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Divider />
                    <Reveal>
                        <Flex
                            id="about"
                            justify="space-between"
                            align="center"
                            gap="large"
                            vertical
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
                                    bottom: 0,
                                    right: 0,
                                    width: "20%",
                                    height: "20%",
                                }}
                            />
                            <Title className="subTitle2" level={2}>
                                <LetterAnimation>
                                    Coding Ideas Into Existence!
                                </LetterAnimation>
                            </Title>

                            <Lottie
                                style={{ width: "80%" }}
                                animationData={codingTabs}
                            />
                        </Flex>
                    </Reveal>
                    <Divider />
                    <Skills />
                    <Divider />
                    <Projects previousProjectsRef={previousProjectsRef} />
                    <Divider />
                    <Flex
                        style={{
                            height: "100vh",
                        }}
                        justify="center"
                        vertical
                        align="center"
                        id="contact"
                        ref={contactSecRef}
                        className="lottieBgCont"
                    >
                        <Lottie
                            animationData={anim3}
                            className="lottieBg"
                            style={{
                                width: "50%",
                                height: "50%",
                                transform: "rotate(90deg)",
                            }}
                        />

                        <Title level={2} className="subTitle">
                            <LetterAnimation>Contact me</LetterAnimation>
                        </Title>
                        <motion.ol
                            variants={contactContainer}
                            initial="hidden"
                            animate={contactControls}
                            ref={contactRef}
                            style={{
                                width: "100%",
                                listStyle: "none",
                                zIndex: 5,
                                padding: 0,
                            }}
                        >
                            <Row gutter={32} style={{ width: "100%" }}>
                                <Col span={8}>
                                    <motion.li id="1" variants={contactItem}>
                                        <MailOutlined
                                            style={{
                                                display: "block",
                                                color: COLORS.primaryBlue,
                                            }}
                                            className="contactIcon"
                                        />
                                        <Text className="contactText">
                                            mvalid.cebe275@gmail.com
                                        </Text>
                                    </motion.li>
                                </Col>
                                <Col span={8}>
                                    <motion.li id="2" variants={contactItem}>
                                        <InstagramOutlined
                                            style={{
                                                display: "block",
                                                color: "#e1306c",
                                            }}
                                            className="contactIcon"
                                        />
                                        <Link
                                            className="contactText"
                                            href="https://instagram.com/whosmhmd1"
                                            target="_blank"
                                        >
                                            @whosmhmd1
                                        </Link>
                                    </motion.li>
                                </Col>
                                <Col span={8}>
                                    <motion.li id="3" variants={contactItem}>
                                        <WhatsAppOutlined
                                            style={{
                                                display: "block",
                                                color: "#34c759",
                                            }}
                                            className="contactIcon"
                                        />
                                        <Button
                                            type="link"
                                            style={{ padding: 0 }}
                                            className="contactText"
                                            onClick={() => setIsWAOpen(true)}
                                        >
                                            +90 542 229 99 88
                                        </Button>
                                    </motion.li>
                                </Col>
                            </Row>
                        </motion.ol>
                        <Lottie
                            animationData={anim3}
                            style={{
                                width: "50%",
                                height: "30%",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                zIndex: 1,
                                display: "inline",
                            }}
                        />
                    </Flex>
                    <Footer
                        style={{
                            textAlign: "center",
                        }}
                    >
                        <Link
                            style={{
                                color: darkMode ? "#e3e3e3" : "#333",
                                fontSize: "32px",
                                margin: "1rem",
                                zIndex: 10,
                            }}
                            href="https://github.com/XSAV6"
                            target="_blank"
                        >
                            <GithubOutlined style={{ fontSize: "32px" }} />
                        </Link>
                        <Link
                            style={{
                                color: darkMode ? "#e3e3e3" : "#333",
                                fontSize: "32px",
                                margin: "1rem",
                                zIndex: 10,
                            }}
                            href="https://instagram.com/whosmhmd1"
                            target="_blank"
                        >
                            <InstagramOutlined style={{ fontSize: "32px" }} />
                        </Link>
                    </Footer>

                    <Modal
                        open={isWAOpen}
                        title="Scan this QR code to chat with me!"
                        onCancel={handleWAClose}
                        onOk={handleWAClose}
                    >
                        <Image src={WAQR} alt="WA QR code" />
                    </Modal>

                    <div
                        style={{ height: "1rem", width: "100%" }}
                        className="lottieBgCont"
                    ></div>
                </Content>
            </Layout>
        </ConfigProvider>
    );
}

export default App;
