import styles from '../../styles/styles.module.css';
import Heading3 from '../atoms/Heading3';

const EducationItem = () => {
    return (
        <>
            <div className={styles.educationItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.educationContent}>
                    <Heading3>Social Science</Heading3>
                    <p className={styles.date}>2017 - 2020 | <span className={styles.school}>Senior High School at SMA Istiqamah Bandung</span></p>
                    <p><strong>GPA: 8.30</strong></p>
                </div>
            </div>

            <div className={styles.educationItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.educationContent}>
                    <Heading3>Frontend Developer</Heading3>
                    <p className={styles.date}>December 2024 - May 2025 | <span className={styles.school}>Bootcamp Full Stack Developer at Harisenin.com</span></p>
                    <p className={styles.description}>Graduated Full-Stack Web Developer bootcamp program from Harisenin.com to acquire essential skills in web development. Key skills include JavaScript, Tailwind CSS, React.js, Next.js, and more.</p>
                </div>
            </div>
        </>
    )
}

export default EducationItem;