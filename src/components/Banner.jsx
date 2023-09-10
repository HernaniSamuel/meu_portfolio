import styles from './Banner.module.css'

export default function Banner(){
    return(
        <div className={styles.banner_container}>
            <h1 className={styles.software}>Software</h1>
            <p>Continua em 13/09/2023</p>
        </div>
    )
}