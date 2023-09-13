import styles from './SocialIcons.module.css'
import curriculo from '../../public/Curriculo_HernaniSamuel.pdf'

import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineFile, AiOutlineCopy } from 'react-icons/ai'
import { VscVerified } from 'react-icons/vsc'
import { useState } from 'react'

export default function SocialIcons(){
    const [icon, setIcon] = useState(<AiOutlineMail/>)
    const [clicked, setClicked] = useState(false)

    const handleMouseOver = () => {
        if (!clicked) {
            setIcon(<AiOutlineCopy/>)
        }
    }

    const handleMouseOut = () => {
        if (!clicked) {
            setIcon(<AiOutlineMail/>)
        }
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('hernanisamuel0@gmail.com')
            setClicked(true)
            setIcon(<VscVerified color='green'/>)
            setTimeout(() => {
                setIcon(<AiOutlineMail/>)
                setClicked(false)
            }, 3000)
        } catch (err) {
            alert('erro ao copiar email, favor informar em hernanisamuel0@gmail.com')
        }
    }

    return(
        <div className={styles.social_container}>
            <a href="https://www.linkedin.com/in/hernanisamueldiniz/" target='_blank'><abbr title="Abrir LinkedIn em outra aba"><AiOutlineLinkedin/></abbr></a>
            <a href="https://github.com/HernaniSamuel" target='_blank'><abbr title="Abrir GitHub em outra aba"><AiOutlineGithub/></abbr></a>
            <button
             onClick={copyToClipboard}
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}
             ><abbr title="Copiar email">{icon}</abbr></button>
            <a href={curriculo} target='_self' download="Curriculo_HernaniSamuel.pdf" type='application/pdf'><abbr title="baixar currículo"><AiOutlineFile/></abbr></a>
        </div>
    )
}
