import styles from './Hero.module.css'
import Banner from './Banner'
import InitResume from './InitResume'


export default function Hero(){
    return(
        <section className={styles.hero_container}>
            <Banner/>
            <InitResume/>

        </section>
    )
}