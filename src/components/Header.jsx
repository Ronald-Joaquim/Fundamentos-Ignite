import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={`${styles.header}`}>
      <strong>Feed devExpress</strong>
    </header>
  );
}