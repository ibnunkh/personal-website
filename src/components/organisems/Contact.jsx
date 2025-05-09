import React from 'react';
import styles from '../../styles/styles.module.css';
import Heading1 from '../atoms/Heading1';
import ContactForm from '../molecules/ContactForm';
import ScrollFadeIn from '../organisems/ScrollFadeIn';

const Contact = () => {
    return (
        <ScrollFadeIn>
            <section id={styles.contact}>
                <Heading1 className={styles.title} id={styles.contactTitle}>Contact Me</Heading1>
                <div className={styles.contactContainer}>
                <p className={styles.contactSubtitle}>Submit the form below or shoot me an email - <span>ibnunashirk@gmail.com</span> </p>
                <ContactForm />
                </div>
            </section>
        </ScrollFadeIn>
    )
}

export default Contact;