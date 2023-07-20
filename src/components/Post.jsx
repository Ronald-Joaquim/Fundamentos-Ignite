import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ronald-Joaquim.png"
          />
          <div className={styles.authorInfo}>
            <strong>Ronald Joaquim</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="20 de julho" dateTime="2022-05-11 08:13:30">
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz
          no Ignite. O nome do projeto é Feed devExpress 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>{" "}
          <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
