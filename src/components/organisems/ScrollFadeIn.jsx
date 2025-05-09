import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const ScrollFadeIn = ({ children, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 300, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollFadeIn;