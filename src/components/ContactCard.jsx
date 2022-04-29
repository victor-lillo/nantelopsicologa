
import React from 'react'
import styles from '../styles/components/ContactCard.module.css'

const ContactCard = ({ className }) => {

    return (
        // <div className={`${styles.container}` }>
        <div className={className ? `${styles.container} ${className}` : `${styles.container}`}>

            <div className={styles.item}>
                <div className={styles.logo_container}>
                    <div className={`${styles.logo} ${styles.icon_mail}`}>                </div>
                </div>
                <div className={styles.container_text}>
                    <div className={styles.title}>Email</div>
                    <div className={styles.subtitle}>nantelocarmona@gmail.com</div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.logo_container}>
                    <div className={`${styles.logo} ${styles.icon_location}`}></div>
                </div>
                <div className={styles.container_text}>
                    <div className={styles.title}>Ubicación</div>
                    <div className={styles.subtitle}>Écija, Córdoba y alrededores</div>
                </div>
            </div>


            <a className={styles.item} href="http://instagram.com/nantelopsicologa" target="_blank" rel="noopener noreferrer">
                <div className={styles.logo_container}>
                    <div className={`${styles.logo} ${styles.icon_instagram}`}></div>
                </div>
                <div className={styles.container_text}>
                    <div className={styles.title}>Instagram</div>
                    <div className={styles.subtitle}>@nantelopsicologa</div>
                </div>
            </a>



        </div>
    )
}

export default ContactCard

