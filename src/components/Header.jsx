import styles from './Header.module.css'
import logo from '../images/logo_HS.png'

import { FaBars, FaShoePrints, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'

export default function Header(){
    
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsive_nav}`)
    }

    return(
        <header className={styles.header}>
            <img className={styles.img_logo} src={logo} alt="Um hexágono cor de mel com as letras HS centralizadas"/>
            <nav ref={navRef} className={styles.nav}>
                <a href="#">Início</a>
                <a href="#">Projetos</a>
                <a href="#">Sobre mim</a>
                <button onClick={showNavBar} className={styles.nav_close_button}>
                    <FaTimes/>
                </button>
            </nav>
            <button onClick={showNavBar} className={styles.nav_button}>
                <FaBars/>
            </button>
        </header>
    )
}