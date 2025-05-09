import React from 'react';
import styles from '../../styles/styles.module.css';
import fotoProfile from '../../assets/images/fotoProfile.jpg';
import SectionText from '../molecules/SectionText';
import BtnHomePage from '../molecules/btnHomePage';
import SocialHomePage from '../molecules/SocialHomePage';
import ScrollFadeIn from '../organisems/ScrollFadeIn';

const Profile = () => {
    return (
        <>
            <ScrollFadeIn>
                <section id={styles.profile}>
                    <div className={styles.sectionPicContainer}>
                        <img src={fotoProfile} alt="Foto Profile Ibnu Nashir Khuluq" />
                    </div>
                    <div className={styles.sectionTextAndButton}>
                        <SectionText />
                        <BtnHomePage />
                        <SocialHomePage />
                    </div>
                </section>
            </ScrollFadeIn>
        </>
    )
}

export default Profile;