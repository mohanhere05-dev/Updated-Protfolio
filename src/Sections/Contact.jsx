import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedinIn,
    FaPaperPlane,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Frontend validation
        if (formData.name.trim().length < 2) {
            toast.error("Please enter a valid name.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            toast.error("Please enter a valid email.");
            return;
        }

        if (formData.subject.trim().length < 3) {
            toast.error("Subject must contain at least 3 characters.");
            return;
        }

        if (formData.message.trim().length < 10) {
            toast.error("Message must contain at least 10 characters.");
            return;
        }

        try {
            setIsSending(true);

            // EmailJS sendForm function
            await emailjs.sendForm(
                "service_fkg3a75",   
                "template_f70ot15",  
                formRef.current,
                "ibE6huIfB2VgK5gWh"    
            );

            toast.success("Message sent successfully! 🚀");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error("EmailJS error:", error);
            toast.error("Something went wrong! Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <section className="contact-section" id="Contact">
                <div className="contact-container">

                    {/* LEFT */}
                    <motion.div className="contact-info"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}>
                        <span className="contact-label">
                            <span></span>
                            Get In Touch
                        </span>

                        <h2>Let's Build
                            <br />
                            Something <span>Great</span>
                        </h2>

                        <p>
                            Have a project idea, job opportunity, or just want to
                            connect? Feel free to reach out. I'd love to hear from you.
                        </p>

                        <div className="contact-details">
                            <a href="mailto:mohanhere05@gmail.com">
                                <div className="contact-icon">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <small>Email</small>
                                    <span>mohanhere05@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+919080911362">
                                <div className="contact-icon">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <small>Phone</small>
                                    <span>+91 9080911362</span>
                                </div>
                            </a>

                            <div className="contact-detail-item">
                                <div className="contact-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <small>Location</small>
                                    <span>Chennai, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="https://github.com/mohanhere05-dev" target="_blank" rel="noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/mohan-ns/" target="_blank" rel="noreferrer">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.instagram.com/mr_sketch_390/" target="_blank" rel="noreferrer">
                                <GrInstagram />
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                        }}>
                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name" // EmailJS template la {{name}} nu irukanum
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        minLength={2}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input
                                        type="email"
                                        name="email" // EmailJS template la {{email}} nu irukanum
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject" // EmailJS template la {{subject}} nu irukanum
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    minLength={3}
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message" // EmailJS template la {{message}} nu irukanum
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me how I can help..."
                                    required
                                    minLength={10}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="contact-submit"
                                disabled={isSending}
                            >
                                {isSending ? (
                                    <>
                                        Sending...
                                        <span className="sending-spinner"></span>
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <FaPaperPlane />
                                    </>
                                )}
                            </button>

                        </form>
                    </motion.div>

                </div>
            </section>
        </>
    );
};

export default Contact;