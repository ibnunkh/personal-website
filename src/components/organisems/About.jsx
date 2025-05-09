import React from 'react';
import styles from '../../styles/styles.module.css';
import Heading1 from '../atoms/Heading1';
import Profile2 from '../../assets/images/profile2.jpg';
import AboutInfo from '../molecules/AboutInfo';
import SkillsCard from '../organisems/SkillsCard';
import EducationItem from '../organisems/EducationItem';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useRef } from 'react';
import ScrollFadeIn from '../organisems/ScrollFadeIn';

const About = () => {
    const ref = useRef(null);

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ y: 300, opacity: 0 }}
                animate={{  y: 0, opacity: 1 }}
                exit={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.0 }}
            >
                <section id={styles.about}>
                    <Heading1 className={styles.title} id={styles.aboutTitle}>About Me</Heading1>
                    <div className={styles.aboutContainer}>
                        <img src={Profile2} alt="fotoprofile" className={styles.imageAbout} />
                        <AboutInfo />
                    </div>
                </section>
            </motion.div>

            <ScrollFadeIn delay={0.2}>
                <section id={styles.skills}>
                    <Heading1 className={styles.title} id={styles.skillsTitle}>My Skills</Heading1>
                    <div className={styles.skillsContainer}>
                        <SkillsCard />
                    </div>
                </section>    
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.4}>
                <section id={styles.education}>
                    <Heading1 className={styles.title} id={styles.educationTitle}>Education</Heading1>
                    <div className={styles.educationTimeline}>
                        <EducationItem />
                    </div>
                </section>
            </ScrollFadeIn>
        </>
    )
}

export default About;