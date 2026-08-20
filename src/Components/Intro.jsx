import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Intro.css";

const Intro = () => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        className="intro-screen"
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut",
                            },
                        }}
                    >

                        <motion.h1
                            className="intro-name"

                            initial={{
                                opacity: 0,
                                scale: 0.6,
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}

                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            MOHAN
                        </motion.h1>


                        <motion.div
                            className="intro-line"

                            initial={{
                                scaleX: 0,
                            }}

                            animate={{
                                scaleX: 1,
                            }}

                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                            }}
                        />


                        {/* ZOOM INTO NAME */}

                        <motion.div
                            className="intro-zoom"

                            initial={{
                                scale: 1,
                            }}

                            animate={{
                                scale: 7,
                                opacity: 0,
                            }}

                            transition={{
                                duration: 1,
                                delay: 1.1,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                        />

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Intro;