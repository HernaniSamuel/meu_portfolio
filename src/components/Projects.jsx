import styles from './Projects.module.css'

import ProjectView from "./ProjectView.jsx"

import MineinvestChartPhone from '../images/mineinvest_chart_phone.png'
import MineinvestChartTablet from '../images/mineinvest_chart_tablet.png'

import MineinvestPhone from '../images/mineinvest_phone.png'
import MineinvestTablet from '../images/mineinvest_tablet.png'


export default function Projects(){
    return(
        <section className={styles.projects_container} id='projects'>
            <h1 className={styles.projects_title}>Meus Projetos</h1>
            <div className={styles.flex1}>
            <ProjectView nome="MineInvest"
                urlCell={MineinvestPhone}
                urlTablet={MineinvestTablet}
                urlProject='https://github.com/HernaniSamuel/MineInvest'
                stackIcons="FastAPI, React e Bootstrap"/>

            <ProjectView nome="MineInvest (tela de gráficos)"
                urlCell={MineinvestChartPhone}
                urlTablet={MineinvestChartTablet}
                urlProject='https://github.com/HernaniSamuel/MineInvest'
                stackIcons="React, lightweight charts e bootstrap para os gráficos"/>
            </div>
            <div className={styles.flex2}>
                <h2 className={styles.title}>Vídeo demonstrativo do MineInvest</h2>
            <div className={styles.video_container}>
                            <div className={styles.video}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZDhVMzFO3_A?si=Rcm9Uss4IlfDQ4UM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
            </div>
        </section>
    )
}
