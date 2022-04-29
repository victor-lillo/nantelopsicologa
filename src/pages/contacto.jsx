import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout';
import ContactCard from '../components/ContactCard';

import styles from '../styles/Contact.module.css'


export default function Home() {

    return (
        <Layout
            bodyClass={styles.content}
            contentClass={styles.content}
        >
            <Head>
                <title>Natalia Antelo | Contacto</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>

            <div className="page__container">
                <h1 className='page__title'>Contacto</h1>
                <div className="paragraph">Si te interesa lo que has leído y quieres empezar terapia conmigo, tienes cualquier duda o quieres hacerme alguna consulta, escríbeme al correo </div>
            </div>

            <div className="bg__lightblue">
                <div className="page__container">
                    <ContactCard></ContactCard>
                </div>
            </div>

        </Layout>
    );
}