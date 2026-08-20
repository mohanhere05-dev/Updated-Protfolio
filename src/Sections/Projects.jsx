import { motion } from "framer-motion";
import {
    FiGithub,
    FiExternalLink,
    FiArrowUpRight,
} from "react-icons/fi";
import TurboToys from '../assets/images/E-Commerce.png'
import Portfolio from '../assets/images/Portfolio.png'
import GYM from '../assets/images/GYM.png'
import BMA from '../assets/images/BMA.png'
import "./Projects.css";
import { lazy } from "react";

const projects = [
    {
        title: "TurboToys",
        category: "MERN Stack E-Commerce",

        description:
            "A full-stack RC toys e-commerce application with product browsing, authentication, cart, wishlist, checkout and order management.",

        image: TurboToys,

        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],

        live: "https://vsquare-rc-toys.netlify.app/",
        github: "https://github.com/mohanhere05-dev/RC-toys-ecommerce",
    },

    {
        title: "Personal Portfolio",
        category: "Frontend Development",

        description:
            "A modern responsive developer portfolio designed to showcase my skills, experience, projects and professional journey.",

        image: Portfolio,

        technologies: [
            "React.js",
            "JavaScript",
            "CSS",
            "Framer Motion",
        ],

        live: "#",
        github: "#",
    },

    {
        title: "GYM Supplements",
        category: "Frontend Project",

        description:
            "A responsive e-commerce website for browsing and exploring gym supplements with a clean and modern user interface.",

        image: GYM,

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],

        live: "https://mohanhere05-dev.github.io/GYM-Supplements/index.html",
        github: "https://github.com/mohanhere05-dev/GYM-Supplements",
    },

    {
        title: "BMA Information System - Landing Page",
        category: "Web Development",

        description:
            "A responsive Mac Information System website landing page focused on modern UI, responsive layouts and engaging user experience.",

        image: BMA,

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],

        live: "https://mohanhere05-dev.github.io/MAC-Project/",
        github: "https://github.com/mohanhere05-dev/MAC-Project",
    },
];

const Projects = () => {
    return (
        <>
            <section id="Projects" className="projects-section">

                <div className="projects-container">

                    {/* SECTION HEADING */}

                    <motion.div
                        className="projects-heading"

                        initial={{
                            opacity: 0,
                            y: 30,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: true,
                        }}

                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <span className="projects-label">
                            <span></span>
                            My Work
                        </span>

                        <h2>
                            Featured <span>Projects</span>
                        </h2>

                        <p>
                            Some of the projects I have built while
                            learning and working with modern web technologies.
                        </p>

                    </motion.div>


                    {/* PROJECT GRID */}

                    <div className="projects-grid">

                        {projects.map((project, index) => (

                            <motion.article
                                className="project-card"
                                key={project.title}

                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}

                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >

                                {/* IMAGE */}

                                <div className="project-image-wrapper">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading={lazy}
                                        className="project-image"
                                    />

                                    <div className="project-image-overlay">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open ${project.title}`}
                                        >
                                            <FiExternalLink />
                                        </a>
                                    </div>

                                </div>


                                {/* CONTENT */}

                                <div className="project-content">

                                    <span className="project-category">
                                        {project.category}
                                    </span>

                                    <div className="project-title-row">

                                        <h3>
                                            {project.title}
                                        </h3>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-arrow"
                                            aria-label={`GitHub ${project.title}`}
                                        >
                                            <FiArrowUpRight />
                                        </a>

                                    </div>


                                    <p className="project-description">
                                        {project.description}
                                    </p>


                                    {/* TECHNOLOGIES */}

                                    <div className="project-technologies">

                                        {project.technologies.map((tech) => (
                                            <span key={tech}>
                                                {tech}
                                            </span>
                                        ))}

                                    </div>


                                    {/* BUTTONS */}

                                    <div className="project-actions">

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-live-btn"
                                        >
                                            Live Demo
                                            <FiExternalLink />
                                        </a>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-github-btn"
                                        >
                                            <FiGithub />
                                            GitHub
                                        </a>

                                    </div>

                                </div>

                            </motion.article>

                        ))}

                    </div>


                    {/* MORE PROJECTS */}

                    <motion.div
                        className="projects-more"

                        initial={{
                            opacity: 0,
                        }}

                        whileInView={{
                            opacity: 1,
                        }}

                        viewport={{
                            once: true,
                        }}

                        transition={{
                            delay: 0.3,
                        }}
                    >

                        <a
                            href="https://github.com/mohanhere05-dev"
                            target="_blank"
                            rel="noreferrer"
                            className="all-projects-btn"
                        >
                            View More Projects
                            <FiGithub />
                        </a>

                    </motion.div>

                </div>

            </section>
        </>
    );
};

export default Projects;