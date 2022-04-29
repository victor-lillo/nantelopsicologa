import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout';
import Monogram from '../components/Monogram';

import styles from '../styles/About.module.css'

export default function About() {

    return (
        <Layout
            bodyClass={styles.content}
            contentClass={styles.content}
        >
            <Head>
                <title>Natalia Antelo | Sobre mí</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>

            <div className="page__container">
                <h1 className='page__title'>Sobre mí</h1>

                <div className="paragraph">Mi nombre es Natalia Antelo, soy Psicóloga General Sanitaria, colegiada AN 11090.</div>
                <Monogram
                    className={styles.logo}
                />
            </div>

            <div className="bg__lightblue">
                <div className="page__container">
                    <div className="paragraph">Mi labor se ha desarrollado principalmente en el ámbito de la psicología clínica, centrándome en el área infanto-juvenil y adultos. En consulta me encuentro a diario con personas que se sienten sobrepasadas por alguna situación, mi función es acompañar y ayudar a gestionar de manera eficaz sus emociones, proporcionando estrategias que les ayuden a afrontar tales adversidades.</div>

                    <div className="paragraph">Me he formado, y sigo formándome, en diferentes técnicas que me ayudan a conocerte mejor y poder ayudarte más eficazmente.</div>
                </div>
            </div>




        </Layout>
    );
}