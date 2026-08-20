import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "./Experience.css";

const experiences = [
    {
        role: "Web Designer Intern",
        company: "MAC Information System",
        duration: "1 Month",
        type: "Internship",
        description:
            "Worked on designing and developing responsive web interfaces with a focus on clean UI, usability and modern web design.",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
        role: "Mern Stack Developer Intern",
        company: "BDreamz Global Soltion Pvt Ltd",
        duration: "6 Months",
        type: "Internship",
        description:
            "Built responsive web applications using React.js, Node.js, Express.js, and MongoDB, with hands-on experience in REST APIs and full-stack development.",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "RestAPI", "GitHub", "Postman"],
    },

    // Future experience inga add pannalam
];

const Experience = () => {
    return (
        <>
            <section id="Experience" className="experience-section">

                <div className="experience-container">

                    {/* SECTION HEADING */}

                    <motion.div
                        className="experience-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="experience-label">
                            <span></span>
                            My Journey
                        </span>

                        <h2>
                            Work <span>Experience</span>
                        </h2>

                        <p>
                            My professional journey and the experience I have
                            gained while building real-world projects.
                        </p>
                    </motion.div>


                    {/* TIMELINE */}

                    <div className="experience-timeline">

                        {/* CURVED LINE */}

                        <div className="timeline-line"></div>


                        {experiences.map((experience, index) => (

                            <motion.div
                                className={`experience-item ${index % 2 === 0 ? "left" : "right"
                                    }`}
                                key={index}

                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -80 : 80,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}

                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                }}

                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                            >

                                {/* TIMELINE DOT */}

                                <div className="timeline-dot">
                                    <FaBriefcase />
                                </div>


                                {/* CARD */}

                                <div className="experience-card">

                                    <div className="experience-card-top">

                                        <div>
                                            <span className="experience-type">
                                                {experience.type}
                                            </span>

                                            <h3>
                                                {experience.role}
                                            </h3>

                                            <h4>
                                                {experience.company}
                                            </h4>
                                        </div>

                                        <div className="experience-date">
                                            <FaCalendarAlt />
                                            <span>
                                                {experience.duration}
                                            </span>
                                        </div>
                                    </div>


                                    <p className="experience-description">
                                        {experience.description}
                                    </p>


                                    {/* SKILLS */}

                                    <div className="experience-skills">
                                        {experience.skills.map((skill) => (
                                            <span key={skill}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>
        </>
    );
};

export default Experience;