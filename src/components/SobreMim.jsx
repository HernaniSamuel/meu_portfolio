import styles from './SobreMim.module.css'

export default function SobreMim(){
    return(
        <section className={styles.mim_container} id='sobre'>
            <h1 className={styles.title}>Sobre mim</h1>
           <p className="about-text">
            "O computador é uma extensão da minha mente." <br/>Foi com essa ideia que comecei a programar. Assistindo tutoriais de Python no YouTube, descobri algo mágico: poder construir minha própria lógica e vê-la funcionar fora da minha cabeça.
            <br /><br />
            Para mim, programar não é trabalho - é diversão. É como jogar um jogo onde eu mesmo crio as regras, enfrento os desafios (bugs!) e celebro cada vitória (código funcionando).
            <br /><br />
            Essa paixão me levou à Engenharia de Software, onde transformei curiosidade em conhecimento técnico. Hoje, com diploma em mãos e projetos como o MineInvest no portfólio, busco levar essa mesma energia para ambientes profissionais.
            <br /><br />
            Quero construir coisas que importam. Resolver problemas reais. E continuar aprendendo todos os dias.
            <br /><br />
            Se você busca alguém que trata código como arte e debugging como desafio, vamos conversar.
            </p>
</section>
    )
}