import styles from './SobreMim.module.css'

export default function SobreMim(){
    return(
        <section className={styles.mim_container} id='sobre'>
            <h1 className={styles.title}>Sobre mim</h1>
            <p>Me chamo Hernani Samuel Diniz, nasci em 09/02/2002. Estou no transtorno do espectro autista, CID F84.5</p>
            <p>Em Agosto de 2020, comecei a aprender python pelo youtube e adorei a ideia de poder construir qualquer coisa com base na lógica. De 2020 a 2022 fiz diversos códigos em python para atender a demandas minhas relacionadas a jogos, investimentos e desafios que eu mesmo me fazia. Os códigos iam desde integrar python com planilhas excel até automatizar um joguinho online para ganhar moedas mesmo estando longe do computador e fazer webscrapping e automação de investimentos com selenium. Neste período eu ainda não me preocupava em guardar os códigos, então apenas apagava eles ao ver que não os usava mais.</p>
            <p>Em dezembro de 2022, comecei a estudar mais sobre desenvolvimento front-end afim de poder dar uma aparência melhor para meus códigos, fiz um curso de HTML e CSS do curso em vídeo no youtube e demorei por volta de seis meses para aprender os fundamentos de forma sólida. Atualmente estou estudando desenvolvimento em React e JavaScript.</p>
            <p>No tocante às minhas habilidades de comunicação e trabalho em equipe, costumo ser mais ouvinte e empático e necessito de ser incluido e convidado a dar meu ponto de vista. Ao me ser passada uma tarefa, eu perguntarei sobre até ter entendido cada detalhe do que deve ser feito, as vezes eu costumo me confundir com coisas simples.</p>
        </section>
    )
}