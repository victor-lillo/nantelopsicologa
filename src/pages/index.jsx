import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout';
import ContactCard from '../components/ContactCard';

import styles from '../styles/Home.module.css'
import psicologa from '../../public/assets/img/psicologa.png'

export default function Home() {

    return (
        <Layout>
            <Head>
                <title>Natalia Antelo | Inicio</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>


            <div className="bg__lightblue">

                <div className="page__container">

                    <div className="page__main__subtitle">Psicóloga en Écija</div>
                    <div className="page__title">Natalia Antelo</div>
                    <div className="paragraph">¡Bienvenid@! Soy Natalia Antelo Carmona, psicóloga y psicoterapeuta profesional.</div>
                    <img className="page__image-float" src={'/assets/img/psicologa.png'} alt="psicologa" />
                    <div className="paragraph">Según la Asociación Americana de Psicología, «los psicólogos ayudan a las personas de todas las edades a vivir una vida más feliz, más saludable y más productiva». En este aspecto, mi labor como psicóloga es proporcionar a mis pacientes las herramientas y estrategias necesarias que les permitan aprender a resolver y afrontar situaciones diarias o eventos complicados.</div>
                    <div className="paragraph">En esta página web encontrarás información sobre mí, cómo trabajo y en qué puedo ayudarte.</div>

                </div>
            </div>

            <div className="page__container">
                <ContactCard></ContactCard>
            </div>

            <div className="bg__lightblue">
                <div className="page__container page__container--image">

                    <img className={styles.terapia_img} src={'/assets/img/terapia_online.png'} alt="terapia online" />

                    <div className="text__wrapper">
                        <div className="page__subtitle">Terapia a distancia</div>
                        <div className="paragraph">Tan eficaz como la terapia presencial, cómoda, rápida y sencilla. No sólo hago terapia presencial, también existe la opción de hacer terapia online. Si vives lejos de Écija y alrededores o no tienes tiempo, es tu opción. Dispongo de los medios para que ayudarte allá donde estés.</div>
                    </div>

                </div>
            </div>



            <div className="page__container">
                <div className="page__subtitle">Terapias y tratamientos</div>
                <ul className={styles.list}>
                    <li className={styles.list_item}>- Duelo</li>
                    <li className={styles.list_item}>- Terapia de pareja</li>
                    <li className={styles.list_item}>- Mediación familiar</li>
                    <li className={styles.list_item}>- Trauma infantil</li>
                    <li className={styles.list_item}>- Trastornos del estado de ánimo en adultos e infanto-juvenil</li>
                    <li className={styles.list_item}>- Trastornos ansiosos en adultos e infanto-juvenil</li>
                    <li className={styles.list_item}>- Neuropsicología</li>
                    <li className={styles.list_item}>- Trastornos del desarrollo</li>
                    <li className={styles.list_item}>- Gestión de emociones</li>
                    <li className={styles.list_item}>- Habilidades sociales</li>
                    <li className={styles.list_item}>- Autoestima</li>
                </ul>
            </div>


        </Layout>
    );
}