import styles from './Banner.module.css'

import SocialIcons from './SocialIcons'


export default function Banner(){
    return(
        <div className={styles.banner_container}>
            <h3 className={styles.name}>Hello, my name is Hernani!</h3>
            <h1 className={styles.software}>Software</h1>
            <h1 className={styles.engineer}>Engineer</h1>
            <SocialIcons/>
            <p className={styles.scroll_down}>Scroll down to see my projects!</p>
        </div>
    )
}