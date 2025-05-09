import React from 'react';
import styles from '../../styles/styles.module.css';
import Heading1 from '../atoms/Heading1';
import ProjectsCard from '../organisems/ProjectsCard';
import ScrollFadeIn from '../organisems/ScrollFadeIn';

const Projects = () => {
    return (
        <ScrollFadeIn>
            <section id={styles.projects}>
                <Heading1 className={styles.title} id={styles.projectsTitle}>My Projects</Heading1>
                <div className={styles.projectsContainer}>
                    <ProjectsCard />
                </div>
            </section>
        </ScrollFadeIn>
    )
}

export default Projects;