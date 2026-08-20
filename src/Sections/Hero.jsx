import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, } from "react-icons/fi";
import { FaCode, FaReact } from "react-icons/fa";
import './Hero.css';


const Hero = () => {
    const roles = [
        "MERN Stack Developer",
        "Full Stack Developer",
        "React Developer",
        "Frontend Developer",
    ];

    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const typingSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));

                if (text.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setText(currentRole.substring(0, text.length - 1));

                if (text.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    
    return (
        <>
            <section id="Home" className="hero">
                {/* HERO CONTENT */}
                <div className="hero-container">
                    {/* LEFT CONTENT */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        delay={{}}
                        transition={{ delay: 3, duration: 1 }}
                    >
                        <div className="hero-heading">
                            <span className="hero-line"></span>
                            <div className="hero-text">
                                <h1> Hi, I'm<span className="hero-name"> Mohan</span></h1>
                                <h2 className="typing-role">
                                    {text}
                                    <span className="typing-cursor">|</span>
                                </h2>
                            </div>
                        </div>

                        <p className="hero-description">
                            I build responsive, modern and interactive
                            full-stack web applications.
                        </p>

                        <div className="hero-buttons">
                            <a href="#Projects" className="primary-btn" >View My Work<FiArrowRight /></a>
                            <a href="#Contact" className="secondary-btn" >Contact Me </a>
                        </div>

                        <div className="hero-socials">
                            <a href="https://github.com/mohanhere05-dev" target="_blank" rel="GitHub"><FiGithub /></a>
                            <a href="https://www.linkedin.com/in/mohan-ns/" target="_blank" rel="LinkedIn" ><FiLinkedin /></a>
                            <a href="mailto:mohanhere05@gmail.com"><FiMail /></a>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div className="code-icon"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}><FaCode /></motion.div>
                    <motion.div className="react-icon"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}><FaReact /></motion.div>
                </div>


                {/* SCROLL DOWN */}
                <motion.div
                    className="scroll-indicator"
                    animate={{
                        y: [0, 8, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                >

                    <div className="mouse-icon">
                        <span></span>
                    </div>

                    <p>Scroll Down</p>

                </motion.div>
            </section>
        </>
    );
};

export default Hero;