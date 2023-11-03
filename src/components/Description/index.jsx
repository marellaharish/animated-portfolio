import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Index() {

    const phrase = "Empowering brands to shine in the digital age. We're here to redefine the rules and keep you at the forefront. No frills, always leading the way.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>&quot; My unwavering dedication to design, coding, and interaction places me in a distinctive realm within the web design universe. This fusion of passions sets me apart in the digital world.&quot;</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
