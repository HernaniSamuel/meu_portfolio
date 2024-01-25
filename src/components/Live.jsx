import styles from './Live.module.css'
import { BsRecordFill } from 'react-icons/bs'

export default function Live(){
    return <p className={styles.p}><BsRecordFill className={styles.icon}/> Em andamento!</p>
}