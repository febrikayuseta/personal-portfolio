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
    "IT": skills.filter((s) => s.category === "it"),
    "Tools": skills.filter((s) => s.category === "tools"),
    "Design": skills.filter((s) => s.category === "design"),
    "Hard Skills": skills.filter((s) => s.category === "hardSkills"),
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Febrika Yuseta</h1>
          <p className={styles.heroSubtitle}>Creative Web Designer | Photo & Video Editor</p>
          <p className={styles.heroDescription}>
            Bringing ideas to life through creative web design and visual content.
            <br></br>
            Focused on crafting impactful photo and video experiences.
          </p>
          <div className={styles.heroCta}>
            <Button asChild size="lg">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://docs.google.com/document/d/1DhrOQF949TkMtTKHeTfA2N6ujcgMFeq-/edit?pli=1" target="_blank" rel="noopener noreferrer">
                Download CV ATS
              </a>
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
              I’m an adaptable and motivated professional with a background in healthcare, administration, and purchasing, bringing strong organizational skills, attention to detail, and the ability to thrive in fast-paced environments. I have strong communication and coordination abilities, and I approach every task with responsibility, precision, and a proactive mindset.
            </p>
            <p style={{ marginTop: "var(--space-4)" }}>
              Currently, I’m focusing on creative work in web design, photo editing, and video production. I’m passionate about creating visually engaging content and meaningful digital experiences, combining creativity with problem-solving skills to deliver impactful results. I’m committed to continuous learning and continuously exploring new tools and trends to produce modern, high-quality visual content.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <p className={styles.sectionSubtitle}>A versatile skill set across IT, design, and multimedia production</p>
          <div className={styles.skillsGrid}>
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div
                key={category}
                className={`${styles.skillCategory} ${category === "Hard Skills" ? styles.hardSkillsCard : ""}`}
              >
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                <div className={category === "Hard Skills" ? styles.skillsListGrid : styles.skillsList}>
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
