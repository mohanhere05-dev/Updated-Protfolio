import React, { lazy } from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import HtmlCss from '../assets/images/Html & Css.png'
import Ai from '../assets/images/AI-Tools.png';
import JsWithReact from '../assets/images/JsWithReact.png';
import "./Certificates.css";

const certificates = [
    {
        title: "HTML & CSS Certification",
        issuer: "GUVI",
        year: "2026",
        image: HtmlCss,
        link: "https://www.guvi.in/verify-certificate?id=u4Do829UN5d5816807",
    },
    {
        title: "AI Tools Workshop",
        issuer: "Be10x",
        year: "2026",
        image: Ai,
        link: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971065121",
    },
    {
        title: "JavaScript With React.js",
        issuer: "Uniq-Technologies",
        year: "2026",
        image: JsWithReact,
        link: "https://drive.google.com/file/d/1o5cwa-sTD5r1BtH-E-6Ldl47n2NVf4EP/view?usp=drive_link",
    },
];

const Certificates = () => {
    return (
        <>
            <section className="certificates-section" id="Certifications">

                <motion.div
                    className="section-heading"
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    <span className="section-label">
                        <span></span>
                        Certifications
                    </span>

                    <h2>
                        My <span>Achievements</span>
                    </h2>

                    <p>
                        Certifications that reflect my continuous learning and technical
                        growth.
                    </p>
                </motion.div>

                <div className="certificates-container">

                    {certificates.map((certificate, index) => (
                        <motion.div
                            className="certificate-card"
                            key={certificate.title}

                            initial={{
                                opacity: 0,
                                y: 60,
                                scale: 0.95,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}

                            whileHover={{
                                y: -10,
                            }}

                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}

                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                        >

                            <div className="certificate-image-wrapper">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    loading={lazy}
                                    className="certificate-image"
                                />

                                <div className="certificate-overlay">
                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certificate-view"
                                    >
                                        <FaExternalLinkAlt />
                                        View Certificate
                                    </a>
                                </div>
                            </div>

                            <div className="certificate-content">

                                <div className="certificate-icon">
                                    <FaCertificate />
                                </div>

                                <div>
                                    <h3>{certificate.title}</h3>

                                    <p>
                                        {certificate.issuer} • {certificate.year}
                                    </p>
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </section>

        </>
    );
};

export default Certificates;