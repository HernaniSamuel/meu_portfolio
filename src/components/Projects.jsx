import styles from './projects.module.css'
import ProjectView from './projectView'

import celular from '../images/NoteCell.jpg'
import tablet from '../images/NoteTablet.jpg'

import taroCell from '../images/taro_cell.jpg'
import taroTablet from '../images/taro_tablet.jpg'

import worldCell from '../images/world_cell.jpg'
import WorldTablet from '../images/world_tablet.jpg'


export default function Projects(){
    return(
        <section className={styles.projects_container} id='projects'>
            <h1 className={styles.projects_title}>Top 3 projetos</h1>
            <div className={styles.flex1}>
                <ProjectView nome="Lista de Tarefas"
                urlCell={celular}
                urlTablet={tablet}
                urlProject='https://lista-de-tarefas-yi7q.onrender.com/login?next=%2F'
                stackIcons="Flask, HTML, Bootstrap (obs: demora cerca de 1 minuto para abrir)"/>

                <ProjectView nome="Tarô Oficial"
                urlCell={taroCell}
                urlTablet={taroTablet}
                urlProject='https://hernanisamuel.github.io/Taro-Oficial/TarotWebsite/index'
                stackIcons="HTML e CSS"/>
                
            </div>
            <div className={styles.flex2}>
                <ProjectView nome="World Graphics"
                urlCell={worldCell}
                urlTablet={WorldTablet}
                urlProject='https://hernanisamuel.github.io/WorldGraphics/WorldGraphics/index'
                stackIcons="HTML, CSS e JS"/>
            </div>
        </section>
    )
}
