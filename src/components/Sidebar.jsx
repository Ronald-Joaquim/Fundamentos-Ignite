import styles from "./Sidebar.module.css";

import { PencilLine } from "phosphor-react";

import backgroundImagem from "../assets/backgroundImg.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={backgroundImagem} className={styles.cover} />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/ronald-Joaquim.png"
        />
        <strong>Ronald Joaquim</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
