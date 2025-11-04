import styles from './ProjectView.module.css'

export default function ProjectView({nome, urlCell, urlTablet, stackIcons, urlProject}){
    return(
        <div className={styles.project_view_container}>
            <div className={styles.text}>
                <h2 className={styles.name}>{nome}</h2>
                <p className={styles.stacks}>{stackIcons}</p>
            </div>
            <abbr title="Open project in another tab"><a href={urlProject} target="_blank"><img src={urlCell} alt="celular" className={styles.celular}/></a></abbr>
            <abbr title="Open project in another tab"><a href={urlProject} target="_blank"><img src={urlTablet} alt="tablet" className={styles.tablet}/></a></abbr>
        </div>
    )
}