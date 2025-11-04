import styles from './SobreMim.module.css'

export default function SobreMim(){
    return(
        <section className={styles.mim_container} id='about'>
          <h1 className={styles.title}>About Me</h1>
          <p className="about-text">
            <span className={styles.highlight}>
              I'm a software engineer passionate about building solutions that solve real problems.
            </span><br/>
            {' '}Since 2020, I've been developing applications using Python, React, and modern web technologies —
            turning ideas into functional systems.
            <br /><br />
            My journey started with Python tutorials on YouTube, where I discovered the power of
            creating my own logic and bringing it to life through code. That curiosity evolved into
            technical expertise through my Software Engineering degree and hands-on projects.
            <br /><br />
            I approach programming challenges with genuine enthusiasm — whether debugging complex issues
            or architecting new features. My main project, MineInvest, showcases this: a full-stack
            investment simulator that lets users test trading strategies with real historical market data.
            <br /><br />
            I'm eager to bring this same energy and problem-solving mindset into professional environments,
            building impactful software while continuously learning and growing.
            <br /><br />
            <strong>Tech Stack:</strong> Python • JavaScript • React • FastAPI • Bootstrap • Git<br />
            <strong>Currently Learning:</strong> Rust for high-performance systems
            <br /><br />
            If you're looking for a developer who writes clean code and tackles challenges head-on, let's connect.
          </p>
        </section>
    )
}