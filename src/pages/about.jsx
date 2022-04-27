import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout';

import styles from '../styles/Contact.module.css'

export default function About() {

    return (
        <Layout>
            <Head>
                <title>Natalia Antelo | Sobre mí</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>


            <h1 className='title page__container'>Sobre mí</h1>

            <div className="paragraph page__container">Mi nombre es Natalia Antelo, soy Psicóloga General Sanitaria, colegiada AN 11090.</div>
            <div className="paragraph page__container">Mi labor se ha desarrollado principalmente en el ámbito de la psicología clínica, centrándome en el área infanto-juvenil y adultos. En consulta me encuentro a diario con personas que se sienten sobrepasadas por alguna situación, mi función es acompañar y ayudar a gestionar de manera eficaz sus emociones, proporcionando estrategias que les ayuden a afrontar tales adversidades.</div>
            <div className="paragraph page__container">Me he formado, y sigo formándome, en diferentes técnicas que me ayudan a conocerte mejor y poder ayudarte más eficazmente. </div>


        </Layout>
    );
}