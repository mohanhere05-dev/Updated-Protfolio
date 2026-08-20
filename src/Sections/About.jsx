import React, { lazy } from 'react'
import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiMail, FiBriefcase, FiDownload, } from "react-icons/fi";
import './About.css'
import aboutImage from "../assets/images/AboutImg.png";
const About = () => {
    return (
        <>
            <section id="About" className="about-section">
                <div className="about-container">

                    {/* SECTION TITLE */}
                    <motion.div
                        className="section-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="section-label">
                            <span></span>
                            About Me
                        </span>
                        <h2>Get to know me</h2>
                    </motion.div>

                    {/* ABOUT CONTENT */}
                    <div className="about-content">

                        {/* IMAGE */}
                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="about-image-card">
                                <img
                                    src={aboutImage}
                                    alt="Mohan"
                                    loading={lazy}
                                    className="about-image"
                                />
                                <div className="image-glow"></div>
                            </div>
                        </motion.div>

                        {/* DETAILS */}
                        <motion.div
                            className="about-info"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                            }}
                        >

                            <p className="about-intro">
                                I'm <span>Mohan</span>, a passionate{" "}
                                <strong>MERN Stack Developer</strong>{" "}
                                focused on building responsive, modern and
                                user-friendly web applications.
                            </p>

                            <p className="about-text">
                                I enjoy turning ideas into clean and interactive
                                digital experiences. I'm continuously improving
                                my skills in frontend and backend development
                                while building real-world projects.
                            </p>

                            {/* DETAILS GRID */}
                            <div className="about-details">
                                <div className="detail-item">
                                    <FiUser />
                                    <div>
                                        <span>Name</span>
                                        <strong>Mohan N</strong>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <FiBriefcase />
                                    <div>
                                        <span>Role</span>
                                        <strong>MERN Stack Developer</strong>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <FiMapPin />
                                    <div>
                                        <span>Location</span>
                                        <strong>Chennai, India</strong>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <FiMail />
                                    <div>
                                        <span>Email</span>
                                        <strong>mohanhere05@gmail.com</strong>
                                    </div>
                                </div>
                            </div>

                            {/* RESUME */}
                            <a href="/resume/Mohan_MERN-Stack_Resume.pdf"
                                download
                                className="resume-btn"
                            >
                                Download Resume
                                <FiDownload />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
