import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <h1>Hernani Samuel Diniz</h1>
            <ul>
                <li>hernanisamuel0@gmail.com</li>
                <li><a href="https://www.linkedin.com/in/hernanisamueldiniz/">https://www.linkedin.com/in/hernanisamueldiniz/</a></li>
                <li><a href="https://github.com/HernaniSamuel">https://github.com/HernaniSamuel</a></li>
            </ul>
            <a href="#">Voltar ao início</a>
        </footer>
    )
}
