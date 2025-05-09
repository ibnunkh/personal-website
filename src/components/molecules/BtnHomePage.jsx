import Button from '../atoms/Button';
import styles from '../../styles/styles.module.css';

const BtnHomePage = () => {
    return (
        <div className={styles.btnContainer}>
            <a 
                href="/CV-ATS-Ibnu-Nashir-Khuluq.pdf"
                target="_blank"
            >
                <Button className={styles.btnColor2}>Resume</Button>
            </a>
            <a href="mailto:ibnunashirk@gmail.com">
                <Button className={styles.btnColor1}>Contact Me</Button>
            </a>
        </div>
    )
}

export default BtnHomePage;