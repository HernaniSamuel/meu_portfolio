import styles from '/home/hernani/PycharmProjects/meu_portfolio/src/components/Projects.module.css'

import ProjectView from "./ProjectView.jsx"


import TodoPhone from '../images/Todo_phone.png'
import TodoTablet from '../images/Todo_tablet.png'

import TaroPhone from '../images/Taro_phone.png'
import TaroTablet from '../images/Taro_tablet.png'

import WorldPhone from '../images/World_phone.png'
import WorldTablet from '../images/World_tablet.png'

import MarketTablet from '../images/Market_tablet.png'
import MarketPhone from '../images/Market_phone.png'


export default function Projects(){
    return(
        <section className={styles.projects_container} id='projects'>
            <h1 className={styles.projects_title}>Meus Projetos</h1>
            <div className={styles.flex1}>
            <ProjectView nome="Flask Market"
                urlCell={MarketPhone}
                urlTablet={MarketTablet}
                urlProject='https://flask-market-s9d9.onrender.com/'
                stackIcons="Flask, HTML, Bootstrap (obs: demora cerca de 1 minuto para abrir)"/>

                <ProjectView nome="Lista de Tarefas"
                urlCell={TodoPhone}
                urlTablet={TodoTablet}
                urlProject='https://lista-de-tarefas-yi7q.onrender.com/login?next=%2F'
                stackIcons="Flask, HTML, Bootstrap (obs: demora cerca de 1 minuto para abrir)"/>

            </div>
            <div className={styles.flex2}>
            <ProjectView nome="Tarô Oficial"
                urlCell={TaroPhone}
                urlTablet={TaroTablet}
                urlProject='https://hernanisamuel.github.io/Taro-Oficial/TarotWebsite/index'
                stackIcons="HTML e CSS"/>

                <ProjectView nome="World Graphics"
                urlCell={WorldPhone}
                urlTablet={WorldTablet}
                urlProject='https://hernanisamuel.github.io/WorldGraphics/WorldGraphics/index'
                stackIcons="HTML, CSS e JS"/>
            </div>
        </section>
    )
}
