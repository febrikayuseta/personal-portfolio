import { ExternalLink, Github } from "lucide-react";
import type { Project } from "~/data/projects";
import styles from "./project-card.module.css";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${className || ""}`}>
      <div className={styles.imageContainer}>
        <img src={project.imageUrl} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {(project.demoUrl || project.githubUrl) && (
        <div className={styles.footer}>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <ExternalLink size={16} className={styles.linkIcon} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Github size={16} className={styles.linkIcon} />
              Code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
