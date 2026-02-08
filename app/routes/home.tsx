import { Link } from "react-router";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { ProjectCard } from "~/components/project-card/project-card";
import { Button } from "~/components/ui/button/button";
import { projects } from "~/data/projects";
import { skills } from "~/data/skills";
import styles from "./home.module.css";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
    design: skills.filter((s) => s.category === "design"),
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Febrika Yuseta</h1>
          <p className={styles.heroSubtitle}>Full-Stack Developer & UI/UX Enthusiast</p>
          <p className={styles.heroDescription}>
            Crafting elegant digital experiences through clean code and thoughtful design. Passionate about building
            scalable web applications that solve real-world problems.
          </p>
          <div className={styles.heroCta}>
            <Button asChild size="lg">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <p>
              I'm a passionate full-stack developer with a keen eye for design and a commitment to creating exceptional
              user experiences. With expertise spanning modern frontend frameworks to robust backend systems, I bring
              ideas to life through clean, maintainable code.
            </p>
            <p style={{ marginTop: "var(--space-4)" }}>
              My approach combines technical excellence with creative problem-solving, ensuring every project not only
              meets requirements but exceeds expectations. I believe in continuous learning and staying current with
              emerging technologies to deliver cutting-edge solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <p className={styles.sectionSubtitle}>A comprehensive toolkit for building modern web applications</p>
          <div className={styles.skillsGrid}>
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                <div className={styles.skillsList}>
                  {categorySkills.map((skill) => (
                    <span key={skill.name} className={styles.skillBadge}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            A selection of my recent work showcasing diverse technical capabilities
          </p>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className={styles.viewAllLink}>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.section}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Let's Work Together</h2>
            <p className={styles.ctaDescription}>
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
