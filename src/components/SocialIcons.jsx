import styles from './SocialIcons.module.css'
import curriculo from '/src/Curriculo_HernaniSamuel.pdf'

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
            alert('Error copying email, please report to hernanisamuel0@gmail.com')
        }
    }

    return(
        <div className={styles.social_container}>
            <a href="https://www.linkedin.com/in/hernanisamueldiniz/" target='_blank'><abbr title="Open LinkedIn in another tab."><AiOutlineLinkedin/></abbr></a>
            <a href="https://github.com/HernaniSamuel" target='_blank'><abbr title="Open GitHub in another tab."><AiOutlineGithub/></abbr></a>
            <button
             onClick={copyToClipboard}
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}
             ><abbr title="Copy email">{icon}</abbr></button>
            <a href={curriculo} target='_self' download="Curriculo_HernaniSamuel.pdf" type='application/pdf'><abbr title="Download resume"><AiOutlineFile/></abbr></a>
        </div>
    )
}
