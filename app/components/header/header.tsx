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
        </nav>
      </div>
    </header>
  );
}
