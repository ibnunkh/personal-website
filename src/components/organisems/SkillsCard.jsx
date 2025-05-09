import styles from '../../styles/styles.module.css';
import Heading3 from '../atoms/Heading3';
import iconHTML from '../../assets/icons/html5-brands.svg';
import iconCSS from '../../assets/icons/css3-alt-brands.svg';
import iconJS from '../../assets/icons/js-brands.svg';
import iconReact from '../../assets/icons/react-brands.svg';
import iconTailwind from '../../assets/icons/Tailwind CSS.svg';
import iconNextJS from '../../assets/icons/Next.js.svg';

const SkillsCard = () => {
    return (
        <div className={styles.skillsFlex}>
            <div className={styles.skillCard}>
                <div className={styles.iconCard}>
                    <img src={iconHTML} alt="icon HTML" />
                </div>
                <Heading3 className={styles.h3MySkills}>HTML</Heading3>
                <p>Advanced</p>
            </div>

            <div className={styles.skillCard}>
                <div className={styles.iconCard}>
                    <img src={iconCSS} alt="icon CSS" />
                </div>
                <Heading3 className={styles.h3MySkills}>CSS</Heading3>
                <p>Advanced</p>
            </div>

            <div className={styles.skillCard}>
                <div className={styles.iconCard}>
                    <img src={iconJS} alt="icon JS" />
                </div>
                <Heading3 className={styles.h3MySkills}>JavaScript</Heading3>
                <p>Advanced</p>
            </div>

            <div className={styles.skillCard}>
                <div className={styles.iconCard}>
                    <img src={iconReact} alt="icon React" />
                </div>
                <Heading3 className={styles.h3MySkills}>React.js</Heading3>
                <p>Intermediate</p>
            </div>

            <div className={styles.skillCard}>
                <div className={styles.iconCard}>
                    <img src={iconTailwind} alt="icon Tailwindcss" />
                </div>
                <Heading3 className={styles.h3MySkills}>Tailwindcss</Heading3>
                <p>Intermediate</p>
            </div>

            <div className={styles.skillCard}>
                <div className={styles.iconCard}>
                    <img src={iconNextJS} alt="icon Next.js" />
                </div>
                <Heading3 className={styles.h3MySkills}>Next.js</Heading3>
                <p>Intermediate</p>
            </div>
        </div>
    )
}

export default SkillsCard;