import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, } from "react-icons/si";
import { PiBracketsCurlyBold } from "react-icons/pi";
import "./Skills.css";

const skills = [
    {
        name: "HTML",
        level: 90,
        icon: <FaHtml5 />,
    },
    {
        name: "CSS",
        level: 88,
        icon: <FaCss3Alt />,
    },
    {
        name: "JavaScript",
        level: 82,
        icon: <FaJs />,
    },
    {
        name: "React.js",
        level: 78,
        icon: <FaReact />,
    },
    {
        name: "Bootstrap",
        level: 85,
        icon: <FaBootstrap />,
    },
    {
        name: "Tailwind CSS",
        level: 78,
        icon: <SiTailwindcss />,
    },
    {
        name: "Node.js",
        level: 75,
        icon: <FaNodeJs />,
    },
    {
        name: "Express.js",
        level: 74,
        icon: <SiExpress />,
    },
    {
        name: "MongoDB",
        level: 75,
        icon: <SiMongodb />,
    },
    {
        name: "MySQL",
        level: 72,
        icon: <SiMysql />,
    },
    {
        name: "Git",
        level: 78,
        icon: <FaGitAlt />,
    },
    {
        name: "GitHub",
        level: 82,
        icon: <FaGithub />,
    },
    {
        name: "Postman",
        level: 76,
        icon: <SiPostman />,

    },
    {
        name: "REST API",
        level: 75,
        icon: <PiBracketsCurlyBold />,
    },
];

const Skills = () => {
    return (
        <>
            <section id="Skills" className="skills-section">
                <div className="skills-container">

                    {/* HEADING */}
                    <motion.div
                        className="skills-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="skills-label">
                            <span></span>
                            My Skills
                        </span>
                        <h2>Technologies I <span>work with</span></h2>
                        <p>A collection of technologies and tools I use to build modern and scalable web applications.</p>
                    </motion.div>


                    {/* SKILLS GRID */}
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <motion.div
                                className="skill-card"
                                key={skill.name}
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                            >

                                {/* TOP */}
                                <div className="skill-top">
                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>

                                    <div className="skill-info">
                                        <h3>{skill.name}</h3>
                                        <span>
                                            {skill.level}%
                                        </span>
                                    </div>
                                </div>


                                {/* PROCESS BAR */}
                                <div className="skill-bar">
                                    <motion.div
                                        className="skill-progress"
                                        initial={{
                                            width: 0,
                                        }}
                                        whileInView={{
                                            width: `${skill.level}%`,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            delay: 0.2 + index * 0.05,
                                            ease: "easeOut",
                                        }}
                                    />

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>
        </>
    );
};

export default Skills;