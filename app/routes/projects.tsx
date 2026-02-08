import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { ProjectCard } from "~/components/project-card/project-card";
import { projects } from "~/data/projects";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>All Projects</h1>
          <p className={styles.description}>
            A comprehensive collection of my work, showcasing various technologies, design approaches, and
            problem-solving methodologies across different domains.
          </p>
        </header>
        <div className={styles.content}>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
