import styles from './Hero.module.css'
import Banner from './Banner'


export default function Hero(){
    return(
        <section className={styles.hero_container}>
            <Banner/>
        </section>
    )
}

