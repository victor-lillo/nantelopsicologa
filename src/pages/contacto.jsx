import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout';
import ContactCard from '../components/ContactCard';
import Monogram from '../components/Monogram';

import styles from '../styles/Home.module.css'


export default function Home() {

    return (
        <Layout>
            <Head>
                <title>Natalia Antelo | Contacto</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>
            <h1 className='title page__container'>Contacto</h1>

            <div className="paragraph page__container">Si te interesa lo que has leído y quieres empezar terapia conmigo, tienes cualquier duda o quieres hacerme alguna consulta, escríbeme al correo </div>


            <div className="page__container">
                <ContactCard></ContactCard>
            </div>



            {/* <Monogram className={styles.test} /> */}

        </Layout>
    );
}