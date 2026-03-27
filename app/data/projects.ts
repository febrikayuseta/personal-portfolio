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
  {
    id: "2",
    title: "TravelYuk",
    description: "Travel agency platform for booking adventures, exploring beautiful destinations, and finding exclusive deals.",
    longDescription:
      "A comprehensive travel platform developed for booking your next playhouse adventure and world tours. Features include a landing page with popular destinations, curated travel packages, best price guarantees, and secure booking.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    demoUrl: "https://travelingyuk.vercel.app/front-pages/landing-page",
    featured: true,
  },
];
