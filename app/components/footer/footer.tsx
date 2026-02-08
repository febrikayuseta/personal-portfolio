import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/febrika" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Github className={styles.icon} size={18} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/febrikayuseta"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Linkedin className={styles.icon} size={18} />
            LinkedIn
          </a>
          <a href="mailto:febrika@example.com" className={styles.socialLink}>
            <Mail className={styles.icon} size={18} />
            Email
          </a>
        </div>
        <p className={styles.text}>© {new Date().getFullYear()} Febrika Yuseta. All rights reserved.</p>
      </div>
    </footer>
  );
}
