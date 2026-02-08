export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Bebyelle Coffee Shop",
    description: "Modern coffee shop web application with product catalog and ordering features.",
    longDescription:
      "Developed a sleek coffee shop application featuring a product catalog, menu browsing, and ordering interface. Currently showcasing the frontend implementation with dummy data, demonstrating modern UI/UX design patterns for e-commerce applications.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    demoUrl: "https://bebyelle.vercel.app/",
    featured: true,
  },
];
