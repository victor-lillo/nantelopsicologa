import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout';

import styles from '../styles/Contact.module.css'

export default function Terapia() {

    return (
        <Layout>
            <Head>
                <title>Natalia Antelo | Terapia</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>


            <h1 className='title page__container'>Terapia</h1>

            <div className="paragraph page__container">En mi terapia te ayudaré a obtener las herramientas para que puedas gestionar tus propias emociones, conocerte a ti mismo y crecer como persona. </div>
            <div className="paragraph page__container">La forma en la que afrontamos y vivimos nuestras circunstancias en nuestro día a día determina nuestro bienestar. Por ello, es importante contar con las herramientas y recursos necesarios para hacer frente a las dificultades con los que nos encontramos en nuestra vida, para así poder resolverlos adecuadamente. </div>
            <div className="paragraph page__container">Mi objetivo es proporcionarte y ayudarte a desarrollar esas herramientas de forma que te conozcas, aumentes tu seguridad y autoestima, afrontes tus miedos y preocupaciones y mejores tu manera de relacionarte con los demás y con el medio en el que te encuentras.</div>
            <div className="paragraph page__container">Considero que la terapia psicológica es un proceso activo; tanto tú como yo debemos comprometernos a trabajar de forma conjunta. Sin embargo, que tomes una actitud activa es primordial para alcanzar tus objetivos terapéuticos.</div>
            <div className="paragraph page__container">En consulta podrás ser más consciente de cómo tus pensamientos y actitudes influyen en tu salud emocional, lo que te permitirá desarrollar nuevas habilidades para afrontar situaciones complicadas.</div>
            <div className="paragraph page__container">Terapia Online</div>
            <div className="paragraph page__container">Cuando el tiempo o la distancia pueden convertirse en un problema, la terapia online puede ser la solución</div>
            <div className="paragraph page__container">Según la Asociación Norteamericana de Psiquiatría (APA), la terapia online puede llegar a producir resultados equivalentes a los conseguidos en la terapia presencial.</div>
            <div className="paragraph page__container">¿Cómo funciona la terapia online?</div>
            <div className="paragraph page__container">La duración de las sesiones es de una hora y se realiza a través de Skype o programas similares.</div>





        </Layout>
    );
}