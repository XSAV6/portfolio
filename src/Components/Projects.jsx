import { Col, Flex, Row, Typography } from "antd";
import Lottie from "lottie-react";
import Project from "./Project";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import { motion, useAnimation, useInView } from "framer-motion";
import LetterAnimation from "./LetterAnimation";
import anim2 from "../assets/anim2.json";
import anim3 from "../assets/anim3.json";
import { useEffect, useRef } from "react";
const { Title, Text } = Typography;

const Projects = ({ previousProjectsRef }) => {
    const cardsRef = useRef(null);
    const cardsIsInView = useInView(cardsRef, { once: true });
    const cardsControls = useAnimation();

    const cardContainer = {
        hidden: { scale: 0, rotate: 180 },
        show: {
            scale: 1,
            rotate: 0,
            transition: {
                staggerChildren: 0.6,
            },
        },
    };

    const cardItem = {
        hidden: { scale: 0, rotate: 180 },
        show: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                // ease: "easeInOut",
                duration: 0.8,
            },
        },
    };

    useEffect(() => {
        if (cardsIsInView) {
            cardsControls.start("show");
        }
    }, [cardsIsInView]);

    return (
        <Flex
            justify="center"
            align="center"
            gap="large"
            vertical
            id="previousProjects"
            ref={previousProjectsRef}
            className="lottieBgCont projectsSec"
        >
            <Lottie animationData={anim2} className="lottieBg daBigLottie" />
            <Lottie animationData={anim3} className="lottieBg daSmolLottie" />
            <Title className="subTitle" level={2}>
                {cardsIsInView && (
                    <LetterAnimation>Previous Projects</LetterAnimation>
                )}
            </Title>
            <motion.ol
                variants={cardContainer}
                initial="hidden"
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                animate={cardsControls}
                ref={cardsRef}
                style={{
                    listStyle: "none",
                    padding: 0,
                }}
            >
                <Row justify="center" gutter={32}>
                    <Col
                        id="project-1"
                        xs={{
                            flex: "100%",
                        }}
                        sm={{
                            flex: "50%",
                        }}
                        md={{
                            flex: "40%",
                        }}
                        lg={{
                            flex: "20%",
                        }}
                        xl={{
                            flex: "10%",
                        }}
                    >
                        <motion.li className="projectCard" variants={cardItem}>
                            <Project
                                linkHref="https://afko-inventory.web.app"
                                src={project1}
                                title="Inventory & Receipts Manager"
                                info="This is a project that i was working on
                                        previously for a company, but was
                                        discontinued from the company for
                                        financial reasons. But it still looks
                                        good and works decently with basic
                                        features."
                                desc={[
                                    "The app can show the current inventory of warehouses and factories",
                                    "You can add manufacturing receipts to add to the warehouse inventory",
                                    "The app lists a complete list of the galvanize receipts that were registered",
                                    "You can register a new galvanize receipt and it will be registered to the database and the receipt items will be deducted from the `exported to` warehouse or company and it will be added the `imported to` warehouse or company",
                                    "After registering the galvanize receipt it will generate a pdf document of the receipt and you can download it",
                                    "You can register item movement receipts to move items from a warehouse to another",
                                    "You can see the items that are currently still galvanizing and are still at the company",
                                    "You can choose a date range and the app will show you the items that have been galvanized in that specific date range",
                                ]}
                                notes={[
                                    <div>
                                        <p>
                                            Since this app was made for a
                                            company to manage its inventory and
                                            receipts. It requires to be
                                            authenticated to use the app. So
                                            here is a test account to try it:
                                        </p>
                                        <p>
                                            <hr />
                                            email: test@test.com - password:
                                            testpass
                                        </p>
                                    </div>,
                                ]}
                            />
                        </motion.li>
                    </Col>
                    <Col
                        xs={{
                            flex: "100%",
                        }}
                        sm={{
                            flex: "50%",
                        }}
                        md={{
                            flex: "40%",
                        }}
                        lg={{
                            flex: "20%",
                        }}
                        xl={{
                            flex: "10%",
                        }}
                        id="project-2"
                    >
                        <motion.li className="projectCard" variants={cardItem}>
                            <Project
                                linkHref="https://xsav6.github.io/landing-page/"
                                src={project2}
                                title="Modern Landing Page"
                                info="Simple yet modern landing page that can fit for any company, it's responsive modern and simple."
                            />
                        </motion.li>
                    </Col>
                    <Col
                        xs={{
                            flex: "100%",
                        }}
                        sm={{
                            flex: "50%",
                        }}
                        md={{
                            flex: "40%",
                        }}
                        lg={{
                            flex: "20%",
                        }}
                        xl={{
                            flex: "10%",
                        }}
                        id="project-3"
                    >
                        <motion.li className="projectCard" variants={cardItem}>
                            <Project comingSoon />
                        </motion.li>
                    </Col>
                </Row>
            </motion.ol>
        </Flex>
    );
};

export default Projects;
