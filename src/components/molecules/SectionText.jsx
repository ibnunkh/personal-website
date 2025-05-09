import styles from '../../styles/styles.module.css';
import Heading1 from '../atoms/Heading1';

const SectionText = () => {
    return (
        <div className={styles.sectionText}>
            <p className={styles.sectionTextP1} id={styles.greeting}>Hello, I'm</p>
            <Heading1 className={styles.title} id={styles.profileTitle}>Ibnu Nashir Khuluq</Heading1>
            <p className={styles.sectionTextP2}>Frontend Developer</p>
            <p className={styles.sectionTextP3}>I'm a career switcher passionate about web development. Graduated Full-Stack Web Developer bootcamp program from harisenin.com. Now, I create clean, responsive websites using technologies like React, JavaScript and Next.js.</p>
        </div>
    )
}

export default SectionText;