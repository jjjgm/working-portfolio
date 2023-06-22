import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.css';

import {PiTelegramLogoThin, PiFileTextThin, PiLinkedinLogoThin, PiGithubLogoThin } from 'react-icons/pi';

function handleEmailLinkClick(event) {
    event.preventDefault();

    const emailAddress = event.target.getAttribute('href');
    window.location.href = 'mailto:' + emailAddress;
}


function Footer() {
    return (
        
        <div>
            <footer className="footer-nav container flex-container">
                    <h1>
                        <Link to="/" className="footer-logo" alt="homepage link"> ✷ </Link></h1>

            </footer>
</div>

    )
}

export default Footer