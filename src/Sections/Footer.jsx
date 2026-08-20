import React from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaArrowUp,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <footer className="footer">

                <div className="footer-container">

                    {/* TOP */}

                    <div className="footer-top">

                        <div className="footer-brand">
                            <h2>
                                Mohan<span>.</span>
                            </h2>

                            <p>
                                Building modern and meaningful digital experiences.
                            </p>
                        </div>

                        <div className="footer-socials">

                            <a
                                href="https://github.com/mohanhere05-dev"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/mohan-ns/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                    </div>


                    {/* LINE */}

                    <div className="footer-line"></div>


                    {/* BOTTOM */}

                    <div className="footer-bottom">

                        <p>
                            © {new Date().getFullYear()} Mohan. All rights reserved.
                        </p>

                        <p>
                            Designed & Built with <span>♥</span>
                        </p>

                    </div>

                </div>


                {/* BACK TO TOP */}

                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <FaArrowUp />
                </button>

            </footer>
        </>
    );
};

export default Footer;