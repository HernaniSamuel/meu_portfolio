import styles from './Banner.module.css'

import SocialIcons from './SocialIcons'

export default function Banner(){
    return(
        <div className={styles.banner_container}>
            <h1 className={styles.software}>Software</h1>
            <h1 className={styles.engineer}>Engineer</h1>
            <SocialIcons/>
        </div>
    )
}