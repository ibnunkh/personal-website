import React from 'react';
import logoInk from '../../assets/images/logoInk.png';
import iconBars from '../../assets/icons/iconBars.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav id="desktopNav">
                <div className="logo">
                    <img src={logoInk} alt="logoInk" />
                </div>
                <div>
                    <ul className="navLinks">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav id="mobileNav">
                <div className="logo">
                    <img src={logoInk} alt="logoInk" />
                </div>
                <div className="mobileMenu">
                    <div className="mobileIcon">
                        <img src={iconBars} alt="logo-menu" onClick={toggleMenu} className="bars" />
                    </div>
                    <div className={`menuLinks ${isMenuOpen ? 'open' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;