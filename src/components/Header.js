import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
    return (
        <div>
            <header>
                <nav className="header-nav container flex-container">
                    <h1 className="logo"><Link to="/*" className="logo-link" href="#">Jennifer Mejia</Link></h1>
                    <ul className="nav-menu flex-container">
                        <li><Link to="/portfolio" className="nav-menu-link" >Portfolio</Link></li>
                        <li><Link to="/contact" className="nav-menu-link">Contact</Link></li>
                        <li><Link to="/about" className="nav-menu-link">About</Link></li>
                    </ul>
                </nav>

                <section className="header-content">
                    <figure className="header-img">
                {/* IMAGE HERE */}
                    </figure>

                    <div className="header-opening container hidden">
                        <h2 className="header-title">Full Stack Developer</h2>

                        <p className="header-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit labore rem illum totam dolorem quam saepe harum reprehenderit consequatur fugit praesentium dolore delectus modi, veritatis debitis officiis enim blanditiis facere!</p>
                    </div>

                </section>
            </header>
        </div>
    )
}

export default Header;