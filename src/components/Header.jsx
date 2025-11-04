import styles from './Header.module.css'
import logo from '../images/logo_HS.png'

import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'

export default function Header(){
    
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsive_nav}`)
    }

    return(
        <header className={styles.header}>
            <a href="#"><img className={styles.img_logo} src={logo} alt="A honey-colored hexagon with the letters HS centered."/></a>
            <nav ref={navRef} className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="#">Start</a></li>
                    <li className={styles.li}><a href="#projects">Projects</a></li>
                    <li className={styles.li}><a href="#sobre">About me</a></li>
                    <li className={styles.li}>
                        <button onClick={showNavBar} className={styles.nav_close_button}>
                            <FaTimes/>
                        </button>
                    </li>
                </ul>
            </nav>
            <button onClick={showNavBar} className={styles.nav_button}>
                <FaBars/>
            </button>
        </header>
    )
}