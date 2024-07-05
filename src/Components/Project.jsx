import { InfoCircleOutlined, LinkOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Image, Modal } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Project = ({
    comingSoon,
    title,
    src,
    info,
    notes,
    desc,
    linkHref,
    id,
}) => {
    const [infoIsOpen, setInfoIsOpen] = useState(false);
    const handleClose = () => {
        setInfoIsOpen(false);
    };
    return comingSoon ? (
        <Card
            id={id}
            style={{
                width: 300,
            }}
            headStyle={{
                height: 150,
            }}
            title={<span style={{ fontSize: "2rem" }}>?</span>}
            actions={[
                <Button type="text" disabled={true}>
                    <InfoCircleOutlined key="info" style={{ marginRight: 5 }} />{" "}
                    Info
                </Button>,
                <Button type="text" disabled={true}>
                    <LinkOutlined key="link" style={{ marginRight: 5 }} /> Live
                    View
                </Button>,
            ]}
        >
            <Title level={5}>More Projects To Come...</Title>
        </Card>
    ) : (
        <motion.div
            whileHover={{
                scale: 1.15,
                boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
            }}
            whileTap={{
                scale: 0.8,
                borderRadius: "100%",
            }}
            style={{ borderRadius: 16 }}
        >
            <Card
                id={id}
                style={{
                    width: 300,
                }}
                cover={
                    <img
                        style={{
                            // border: "1px solid #d1d1d1",
                            borderBottom: "none",
                        }}
                        height={150}
                        alt="Image"
                        src={src}
                    />
                }
                actions={[
                    <Button type="link" onClick={() => setInfoIsOpen(true)}>
                        <b>
                            <InfoCircleOutlined
                                key="info"
                                style={{ marginRight: 5 }}
                            />
                            <span>Info</span>
                        </b>
                    </Button>,
                    <Button href={linkHref} type="link">
                        <b>
                            <LinkOutlined
                                key="link"
                                style={{ marginRight: 5 }}
                            />
                            <span>Live View</span>
                        </b>
                    </Button>,
                ]}
            >
                <Title level={5}>{title}</Title>
            </Card>
            <Modal
                style={{ width: "90%", maxWidth: 900 }}
                width="90%"
                onCancel={handleClose}
                title={title}
                open={infoIsOpen}
                footer={[
                    <Button
                        style={{ fontSize: "1rem" }}
                        type="link"
                        key="link"
                        onClick={handleClose}
                        href={linkHref}
                        target="_blank"
                    >
                        <b>
                            <LinkOutlined /> Live Preview
                        </b>
                    </Button>,
                    <Button type="primary" key="done" onClick={handleClose}>
                        Done
                    </Button>,
                ]}
            >
                <Divider />
                <Image src={src} />
                <p>{info}</p>
                {desc?.length > 0 && (
                    <>
                        <p>The App's Main Features: </p>
                        <ul>
                            {desc.map((item) => {
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </>
                )}
                {notes?.length > 0 && (
                    <>
                        <p>Additional Notes: </p>
                        <ul>
                            {notes.map((note) => {
                                return <li key={note}>{note}</li>;
                            })}
                        </ul>
                    </>
                )}
            </Modal>
        </motion.div>
    );
};

export default Project;
