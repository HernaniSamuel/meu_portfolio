import styles from './Banner.module.css'

import SocialIcons from './SocialIcons'


export default function Banner(){
    return(
        <div className={styles.banner_container}>
            <h3 className={styles.name}>Olá, me chamo Hernani!</h3>
            <h1 className={styles.software}>Software</h1>
            <h1 className={styles.engineer}>Engineer</h1>
            <SocialIcons/>
            <p className={styles.scroll_down}>Role para baixo para ver meus projetos!</p>
        </div>
    )
}