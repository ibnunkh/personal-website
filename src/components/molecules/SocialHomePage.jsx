import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../../styles/styles.module.css';
// import linkedIn from '../../assets/icons/linkedin-brands.svg';
// import gitHub from '../../assets/icons/github-brands.svg';

const SocialHomePage = () => {
    return (
        <div id={styles.socialsContainer}>
            <a 
                href="https://linkedin.com/in/ibnunashirk"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin size={30} className={styles.icon} />
            </a>
            <a 
                href="https://github.com/ibnunkh"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={30} className={styles.iconGithub} />
            </a>
        </div>
    )
}

export default SocialHomePage;