import styles from './Projects.module.css'

import ProjectView from "./ProjectView.jsx"
import Live from "./Live.jsx"

import TodoPhone from '../images/Todo_phone.png'
import TodoTablet from '../images/Todo_tablet.png'

import WorldPhone from '../images/World_phone.png'
import WorldTablet from '../images/World_tablet.png'

import MarketTablet from '../images/Market_tablet.png'
import MarketPhone from '../images/Market_phone.png'

import LocadoraPhone from '../images/locadora_phone.png'
import LocadoraTablet from '../images/locadora_tablet.png'


export default function Projects(){
    return(
        <section className={styles.projects_container} id='projects'>
            <h1 className={styles.projects_title}>Meus Projetos</h1>
            <div className={styles.flex1}>
            <ProjectView nome="Locadora de Veículos"
                urlCell={LocadoraPhone}
                urlTablet={LocadoraTablet}
                urlProject='https://locadora-de-veiculos.onrender.com/'
                stackIcons={[<Live/>, <span>(Obs: demora cerca de 1 minuto para abrir)</span>]}/>

            <ProjectView nome="Flask Market"
                urlCell={MarketPhone}
                urlTablet={MarketTablet}
                urlProject='https://flask-market-s9d9.onrender.com/'
                stackIcons="Flask, HTML, Bootstrap (obs: demora cerca de 1 minuto para abrir)"/>
            </div>
            <div className={styles.flex2}>
            <ProjectView nome="Lista de Tarefas"
                urlCell={TodoPhone}
                urlTablet={TodoTablet}
                urlProject='https://lista-de-tarefas-yi7q.onrender.com/login?next=%2F'
                stackIcons="Flask, HTML, Bootstrap (obs: demora cerca de 1 minuto para abrir)"/>

                <ProjectView nome="World Graphics"
                urlCell={WorldPhone}
                urlTablet={WorldTablet}
                urlProject='https://hernanisamuel.github.io/WorldGraphics/WorldGraphics/index'
                stackIcons="HTML, CSS e JS"/>
            </div>
        </section>
    )
}
