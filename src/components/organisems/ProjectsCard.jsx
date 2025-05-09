import styles from '../../styles/styles.module.css';
import ssTodolist from '../../assets/images/Cuplikan layar 2025-05-02 163837.png';
import Heading3 from '../atoms/Heading3';

const ProjectsCard = () => {
    return (
        <>
            <div className={styles.projectCard}>
                <a href="https://mission-4-latest.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={ssTodolist} alt="todolistapp" />
                <p className={styles.projectCategory}>Productivity App</p>
                <Heading3 className={styles.projectName}>Product To Do List App</Heading3>
                </a>
            </div>
        </>
    )
}

export default ProjectsCard;