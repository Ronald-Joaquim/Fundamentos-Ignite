import styles from "./Sidebar.module.css";

import backgroundImagem from "../assets/backgroundImg.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={backgroundImagem} className={styles.cover} />

      <div className={styles.profile}>
        <strong>Ronald Joaquim</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
