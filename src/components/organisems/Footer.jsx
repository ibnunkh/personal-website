import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../../styles/styles.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <p className="text-sm">&copy; { new Date().getFullYear() } ibnunashirk. All rights reserved.</p>
                <div className={styles.iconFooter}>
                    <a 
                        href="https://github.com/ibnunkh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaGithub size={35} />
                    </a>
                    <a 
                        href="https://linkedin.com/in/ibnunashirk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaLinkedin size={35} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;