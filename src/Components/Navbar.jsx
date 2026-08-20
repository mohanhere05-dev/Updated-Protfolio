import React, {lazy, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../public/logo.png'
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

const Navbar = () => {

    const navLinks = [
        { name: "Home", href: "#Home" },
        { name: "About", href: "#About" },
        { name: "Skills", href: "#Skills" },
        { name: "Experience", href: "#Experience" },
        { name: "Projects", href: "#Projects" },
        { name: "Certifications", href: "#Certifications" },
        { name: "Contact", href: "#Contact" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    


    return (
        <>
            <header className='navbar'>
                <div className='navbar-container'>
                    <a href="http://localhost:5173/" className='logo' style={{display:"flex", gap:"12px"}}><img src={logo} loading={lazy} alt="" width='34px'/>Mohan<span>N</span></a>
                    <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                            >{link.name}</a>

                        ))}
                        <a href="/resume/Mohan_MERN-Stack_Resume.pdf" download className='resume-btn'><FiDownload /> Resume</a>
                    </nav>

                    <button
                        className='menu-btn'
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label='Toggle menu'
                    >{menuOpen ? <FiX /> : <FiMenu />}</button>
                </div>
            </header>

        </>
    )
}

export default Navbar
