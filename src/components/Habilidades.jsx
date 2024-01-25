import styles from './Habilidades.module.css'


export default function Habilidades(){
    return (
        <section className={styles.Habilidades_container} id='Habilidades'>
            <h1>Habilidades</h1>
            <div className={styles.skills}>
                <h2>Python</h2>
                <ul>
                    <li>Automações com Selenium, PyAutoGUI e BotCity</li>
                    <li>Sites com Flask</li>
                    <li>Webscrapping com Selenium</li>
                    <li>Integração com planilhas através do Pandas</li>
                    <li>Captura e digitalização de movimento corporal com MediaPipe</li>
                </ul>
            </div>
            <div className={styles.skills}>
                <h2>Engenharia de Software</h2>
                <ul>
                    <li>Lógica de Programação</li>
                    <li>Estruturas de Dados</li>
                    <li>Bancos de dados</li>
                    <li>Programação Orientada a Objetos</li>
                    <li>Diagramas e modelagem de Software</li>
                    <li>Metodologias ágeis</li>
                </ul>
                <p>Estou cursando pela UniCesumar, comecei em 02/2021 e concluirei em 02/2025.</p>
            </div>

        </section>
    )

}