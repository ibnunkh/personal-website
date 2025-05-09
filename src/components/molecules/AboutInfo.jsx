import styles from '../../styles/styles.module.css';

const AboutInfo = () => {
    return (
        <div className={styles.aboutInfo}>
            <h2>Hello, my name is <br /> Ibnu Nashir Khuluq.</h2>
            <p className={styles.descriptionAbout}>I graduated from SMA Istiqamah Bandung. I began my career journey as a freelance video editor and later gained internship experience as a tax staff at an accounting firm, where I developed strong attention to detail and structured work habits.</p>
            <p className={styles.descriptionAbout}>My growing interest in technology led me to explore web development, with a strong focus on Frontend Development. I enrolled in a Web Developer Bootcamp at Harisenin.com, specializing in frontend technologies, where I built several projects using React, JavaScript, and Next.js.</p>
            <p className={styles.descriptionAbout}>I have a passion for learning new things, solving technical challenges, and collaborating with others to create clean, responsive, and user-friendly web interfaces. I am currently seeking opportunities as a Frontend Developer and am eager to grow while contributing meaningfully.</p>
        </div>
    )
}

export default AboutInfo;