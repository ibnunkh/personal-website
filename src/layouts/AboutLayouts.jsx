import Navbar from "../components/organisems/Navbar";
import Footer from "../components/organisems/Footer";
import styles from "../styles/styles.module.css";
const AboutLayouts = (props) => {
    const { children } = props;
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>
    )
}

export default AboutLayouts;