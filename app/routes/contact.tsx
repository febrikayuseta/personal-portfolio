import { useState } from "react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { Button } from "~/components/ui/button/button";
import { Input } from "~/components/ui/input/input";
import { Textarea } from "~/components/ui/textarea/textarea";
import { Label } from "~/components/ui/label/label";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "~/hooks/use-toast";
import styles from "./contact.module.css";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.description}>
            Have a project in mind or just want to chat? I'd love to hear from you. Send me a message or connect through
            social media.
          </p>
        </header>
        <div className={styles.content}>
          <section className={styles.formSection}>
            <h2 className={styles.formTitle}>Send a Message</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <Label htmlFor="name" className={styles.label}>
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <Label htmlFor="email" className={styles.label}>
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <Label htmlFor="subject" className={styles.label}>
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <Label htmlFor="message" className={styles.label}>
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me more about your project or inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </section>

          <section className={styles.socialSection}>
            <h2 className={styles.socialTitle}>Connect With Me</h2>
            <p className={styles.socialDescription}>
              Prefer to connect directly? Find me on these platforms or send an email.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/febrika"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Github size={24} className={styles.socialIcon} />
                <div className={styles.socialLinkContent}>
                  <span className={styles.socialLinkTitle}>GitHub</span>
                  <span className={styles.socialLinkText}>@febrika</span>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/febrikayuseta"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Linkedin size={24} className={styles.socialIcon} />
                <div className={styles.socialLinkContent}>
                  <span className={styles.socialLinkTitle}>LinkedIn</span>
                  <span className={styles.socialLinkText}>Febrika Yuseta</span>
                </div>
              </a>
              <a href="mailto:febrika@example.com" className={styles.socialLink}>
                <Mail size={24} className={styles.socialIcon} />
                <div className={styles.socialLinkContent}>
                  <span className={styles.socialLinkTitle}>Email</span>
                  <span className={styles.socialLinkText}>febrika@example.com</span>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
