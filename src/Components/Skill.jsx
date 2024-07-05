import { Col, Flex, Popconfirm } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Skill = ({
    src,
    title,
    href,
    controls,
    secondStart,
    isInView,
    second,
}) => {
    const item = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.8,
            },
        },
    };

    const confirm = (e) => {
        console.log(e);
        window.open(href, "_blank");
    };
    const cancel = (e) => {
        console.log(e);
    };

    useEffect(() => {
        if (!second && isInView) {
            controls.start("show");
        }
        if (second && secondStart && isInView) {
            controls.start("show");
        }
    }, [secondStart, isInView]);
    return (
        <Col span={8}>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{
                    scale: 0.8,
                    borderRadius: "100%",
                }}
                style={{ height: "100%", margin: 0 }}
                variants={item}
            >
                <Flex
                    vertical
                    justify="space-between"
                    align="center"
                    flex={1}
                    style={{ height: "100%" }}
                    gap={"1rem"}
                    className="ThisONE!!!!!!!!!!!!!!!!!!!!!!!"
                >
                    <Flex
                        style={{ height: "100%" }}
                        justify="center"
                        align="center"
                        className="SkillWrapper"
                    >
                        <Popconfirm
                            title="Exiting"
                            description="Clicking this will take you to its docs, are you sure you want to exit this site?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <img className="Skill" src={src} alt={title} />
                        </Popconfirm>
                    </Flex>
                    <Title className="skillText" level={3}>
                        {title}
                    </Title>
                </Flex>
            </motion.div>
        </Col>
    );
};

export default Skill;
