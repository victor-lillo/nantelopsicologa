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
                <title>Natalia Antelo | Inicio</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>


            <div className={styles.image_background}>

                <div className="page__container">
                    <div className="page__subtitle">Psicóloga en Écija</div>
                    <div className="page__title">Natalia Antelo</div>
                    <div className="paragraph">¡Bienvenid@! Soy Natalia Antelo Carmona, psicóloga y psicoterapeuta profesional.</div>
                    <div className="paragraph">Según la Asociación Americana de Psicología, «los psicólogos ayudan a las personas de todas las edades a vivir una vida más feliz, más saludable y más productiva». En este aspecto, mi labor como psicóloga es proporcionar a mis pacientes las herramientas y estrategias necesarias que les permitan aprender a resolver y afrontar situaciones diarias o eventos complicados.</div>
                    <div className="paragraph">En esta página web encontrarás información sobre mí, cómo trabajo y en qué puedo ayudarte.</div>
                </div>
            </div>

            <div className="page__container">
                <ContactCard></ContactCard>
            </div>

            <div className="bg__lightblue">
                <div className="paragraph page__container">Terapia a distancia: Tan eficaz como la terapia presencial, cómoda, rápida y sencilla. No sólo hago terapia presencial, también existe la opción de hacer terapia online. Si vives lejos de Écija y alrededores o no tienes tiempo, es tu opción. Dispongo de los medios para que ayudarte allá donde estés.
                </div>
            </div>



            <div className="paragraph page__container">Terapias y tratamientos:
                <ul>
                    <li>- Duelo.</li>
                    <li>- Terapia de pareja.</li>
                    <li>- Mediación familiar.</li>
                    <li>- Trauma infantil.</li>
                    <li>- Trastornos del estado de ánimo en adultos e infanto-juvenil.</li>
                    <li>- Trastornos ansiosos en adultos e infanto-juvenil.</li>
                    <li>- Neuropsicología.</li>
                    <li>- Trastornos del desarrollo.</li>
                    <li>- Gestión de emociones.</li>
                    <li>- Habilidades sociales.</li>
                    <li>- Autoestima.</li>
                </ul>

            </div>



            {/* <Monogram className={styles.test} /> */}

        </Layout>
    );
}