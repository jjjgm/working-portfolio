import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

import { PiTelegramLogoThin, PiFileTextThin, PiLinkedinLogoThin, PiGithubLogoThin } from 'react-icons/pi';

function handleEmailLinkClick(event) {
    event.preventDefault();

    const emailAddress = event.target.getAttribute('href');
    window.location.href = 'mailto:' + emailAddress;
}

function Header() {
    return (
        <div>
            <header>
                <nav className="header-nav container flex-container">
                    <h1 className="logo"><Link to="/*" className="logo-link" alt="homepage link"> ✷ </Link></h1>
                    <ul className="nav-menu flex-container">
                        <li><Link to="/portfolio" className="nav-menu-link" alt="portfolio link">Portfolio</Link></li>
                        <li><Link to="/contact" className="nav-menu-link" alt="contact link">Contact</Link></li>
                        <li><Link to="/about" className="nav-menu-link" alt="about link">About</Link></li>
                    </ul>
                </nav>

                <section className="header-content">
                    <figure className="header-img">
                        {/* IMAGE HERE */}
                    </figure>

                    <div className="header-opening container">
                        <h2 className="header-title">Jennifer Mejia</h2>

                        <p className="header-text">
                            I'm a Full Stack Developer with extensive experience in operations and marketing.</p>

                        <h2 className="header-icons">
                            {/* EMAIL */}
                            <a href="businessjgm@icloud.com" alt="click to send me an email" onClick={handleEmailLinkClick}><PiTelegramLogoThin />
                            </a>
                            {/* RESUME */}
                            <a href="https://docs.google.com/document/d/e/2PACX-1vRhkb2j9Vyz9q-rgvlv6jlKGNnfdoD4XC_jsnKyZGmwaWTIXDpsvfRfw-Q0Tl6L0G2r-qP9-boeLYB-/pub" alt="link to my resume"><PiFileTextThin />
                            </a>
                            {/* LINKEDIN */}
                            <a href="https://www.linkedin.com/in/jennifergiselle/">
                                <PiLinkedinLogoThin />
                            </a>
                            {/* GH */}
                            <a href="https://github.com/jjjgm" alt="link to my github">
                                <PiGithubLogoThin />
                            </a>
                        </h2>
                        
                    </div>

                </section>
            </header>
        </div>
    )
}

export default Header;