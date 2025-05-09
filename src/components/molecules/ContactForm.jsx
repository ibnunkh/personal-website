import styles from '../../styles/styles.module.css';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import React from 'react';
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        const mailtoLink = `mailto:ibnunashirk@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

        window.location.href = mailtoLink;
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange} 
                required
            />
            <Input 
                type="email" 
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange} 
                required
            />
            <textarea 
                placeholder="Your Message" 
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange} 
                required
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default ContactForm;