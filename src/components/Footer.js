import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.css';

import { PiFileTextThin, PiLinkedinLogoThin, PiGithubLogoThin } from 'react-icons/pi';

function Footer() {
    return (
        
        <div>
            <footer className="footer-nav container flex-container">
                    <h1>
                        <Link to="/" className="footer-logo" alt="homepage link"> ✷ </Link>
                        
                        <h2 className="header-icons">
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
                        
                        </h1>

            </footer>
</div>

    )
}

export default Footer