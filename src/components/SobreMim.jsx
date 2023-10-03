import styles from './SobreMim.module.css'

export default function SobreMim(){
    return(
        <section className={styles.mim_container} id='sobre'>
            <h1 className={styles.title}>Sobre mim</h1>

            <div className={styles.video_container}>
                <div className={styles.video}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uZjToChMpGs?si=ErZrskGjoL26-IQx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}