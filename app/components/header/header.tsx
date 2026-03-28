import { NavLink } from "react-router";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          Febrika Yuseta
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
            Contact
          </NavLink>
          :    add           <a href="https://docs.google.com/document/d/1DhrOQF949TkMtTKHeTfA2N6ujcgMFeq-/edit?pli=1" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
            :    add             CV ATS
          </a>
        </nav>
      </div>
    </header>
  );
}
