import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout';

import styles from '../styles/Terapia.module.css'

export default function Terapia() {

    return (
        <Layout>
            <Head>
                <title>Natalia Antelo | Terapia</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>

            <div className="bg__lightblue">

                <div className="page__container">
                    <h1 className='page__title'>Terapia</h1>

                    <div className="paragraph">En mi terapia te ayudaré a obtener las herramientas para que puedas gestionar tus propias emociones, conocerte a ti mismo y crecer como persona. </div>
                    <div className="paragraph">La forma en la que afrontamos y vivimos nuestras circunstancias en nuestro día a día determina nuestro bienestar. Por ello, es importante contar con las herramientas y recursos necesarios para hacer frente a las dificultades con los que nos encontramos en nuestra vida, para así poder resolverlos adecuadamente.
                    </div>
                </div>
            </div>

            <div className="page__container">

                <div className="paragraph">Mi objetivo es proporcionarte y ayudarte a desarrollar esas herramientas de forma que te conozcas, aumentes tu seguridad y autoestima, afrontes tus miedos y preocupaciones y mejores tu manera de relacionarte con los demás y con el medio en el que te encuentras.</div>
                <div className="paragraph">Considero que la terapia psicológica es un proceso activo; tanto tú como yo debemos comprometernos a trabajar de forma conjunta. Sin embargo, que tomes una actitud activa es primordial para alcanzar tus objetivos terapéuticos.</div>
            </div>

            <div className="bg__lightblue">
                <div className="page__container">
                    <div className="paragraph">En consulta podrás ser más consciente de cómo tus pensamientos y actitudes influyen en tu salud emocional, lo que te permitirá desarrollar nuevas habilidades para afrontar situaciones complicadas.</div>
                </div>
            </div>

            <div className="page__container">
                <div className="page__subtitle">Terapia Online</div>
                <div className="paragraph">Cuando el tiempo o la distancia pueden convertirse en un problema, la terapia online puede ser la solución</div>
                <img className={styles.terapia_img} src={'/assets/img/terapia_online.png'} alt="terapia online" />
                <div className="paragraph">Según la Asociación Norteamericana de Psiquiatría (APA), la terapia online puede llegar a producir resultados equivalentes a los conseguidos en la terapia presencial.</div>
                <div className={`page__subtitle ${styles.pt}`}>¿Cómo funciona la terapia online?</div>
                <div className="paragraph">La duración de las sesiones es de una hora y se realiza a través de Skype o programas similares.
                </div>
            </div>





        </Layout>
    );
}