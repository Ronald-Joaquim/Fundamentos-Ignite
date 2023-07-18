import styles from "./Header.module.css";

import DevLogo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={`${styles.header}`}>
      <img src={DevLogo} alt="logo devExpress"/>
      <strong>Feed devExpress</strong>
    </header>
  );
}
