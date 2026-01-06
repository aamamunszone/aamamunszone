import { Code, Layout, Sparkles, Rocket, Globe, Database, Shield, Smartphone, Settings, Palette } from 'lucide-react';

export const personalInfo = {
  name: "Abdullah Al Mamun",
  username: "aamamunszone",
  email: "aamamunszone@gmail.com",
  phone: "+880 1973 289703",
  whatsapp: "+880 1973 289703",
  location: "Dhaka, Bangladesh",
  designation: "MERN Stack Developer | Full Stack Engineer | Problem Solver",
  tagline: "Building digital experiences that make a difference",
  about: `My journey in programming began in 2020 when I discovered the power of creating digital solutions. Since then, I've dedicated myself to mastering modern web technologies and building applications that solve real-world problems. I specialize in the MERN stack, focusing on creating efficient, scalable, and user-friendly applications. My approach combines technical expertise with creative problem-solving, always keeping the end-user experience at the forefront. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring fellow developers.`,
  social: {
    github: "https://github.com/aamamunszone",
    linkedin: "https://linkedin.com/in/aamamunszone",
    facebook: "https://facebook.com/aamamunszone",
    twitter: "https://twitter.com/aamamunszone"
  }
};

export const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux", "Context API", "React Router", "Framer Motion", "shadcn/ui"],
  backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "RESTful APIs", "Firebase Admin"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "npm", "yarn", "Figma"],
  deployment: ["Vercel", "Netlify", "Firebase", "GitHub Pages"],
  others: ["Responsive Design", "SEO", "Web Performance", "Problem Solving"]
};

export const services = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "End-to-end MERN stack applications with scalable architecture",
    icon: Code
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Modern, responsive interfaces using React and Next.js",
    icon: Layout
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js and MongoDB",
    icon: Database
  },
  {
    id: 4,
    title: "API Development",
    description: "Secure and efficient RESTful APIs and GraphQL services",
    icon: Globe
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "User-centered design with modern aesthetics",
    icon: Palette
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Enhancing application speed and efficiency",
    icon: Rocket
  },
  {
    id: 7,
    title: "Security Implementation",
    description: "Protecting applications from vulnerabilities",
    icon: Shield
  },
  {
    id: 8,
    title: "Mobile Responsive Design",
    description: "Seamless experience across all devices",
    icon: Smartphone
  },
  {
    id: 9,
    title: "DevOps & Deployment",
    description: "CI/CD pipelines and cloud deployment",
    icon: Settings
  },
  {
    id: 10,
    title: "Technical Consultation",
    description: "Guidance on tech stack and architecture decisions",
    icon: Sparkles
  }
];

export const journey = [
  {
    year: "2020",
    title: "Discovered Programming",
    description: "Started learning HTML, CSS, and JavaScript. Built first static website.",
    icon: Sparkles
  },
  {
    year: "2021",
    title: "First Web Project",
    description: "Created my first dynamic web application using vanilla JavaScript.",
    icon: Code
  },
  {
    year: "2022",
    title: "MERN Stack Mastery",
    description: "Dived deep into the MERN stack and built several full-stack applications.",
    icon: Rocket
  },
  {
    year: "2023",
    title: "Professional Development",
    description: "Started freelancing and contributed to open-source projects.",
    icon: Globe
  },
  {
    year: "2024",
    title: "Advanced Skills",
    description: "Learned Next.js, TypeScript, and advanced UI/UX techniques.",
    icon: Settings
  },
  {
    year: "2025",
    title: "Full Stack Expertise",
    description: "Specialized in creating scalable applications with modern technologies.",
    icon: Database
  }
];

export const projects = [
  {
    id: "garflex",
    name: "Garflex",
    tagline: "Complete Car Rental Management System",
    description: "A comprehensive car rental and garage management platform that connects car owners with renters, featuring real-time availability, booking management, and payment integration.",
    image: "/images/projects/Garflex.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Stripe", "Tailwind CSS"],
    features: ["Advanced car search", "Real-time booking", "Payment integration", "Admin dashboard", "User profiles", "Review system"],
    challenges: "Implementing real-time availability, handling concurrent bookings, and ensuring secure payment processing.",
    solutions: "Used MongoDB transactions, optimistic locking, and integrated Stripe for secure payments.",
    futureImprovements: ["AI recommendations", "Real-time chat", "Mobile app", "Advanced analytics"],
    liveUrl: "https://garflex.web.app",
    githubClient: "https://github.com/aamamunszone/garflex-client",
    githubServer: "https://github.com/aamamunszone/garflex-server",
    category: "Full Stack"
  },
  {
    id: "pawmart",
    name: "PawMart",
    tagline: "Pet Adoption & Marketplace Platform",
    description: "A compassionate platform connecting pet lovers with animals in need of homes, while also providing a marketplace for pet-related products and services.",
    image: "/images/projects/Pawmart.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Cloudinary"],
    features: ["Pet listing", "Adoption workflow", "Donation system", "User profiles", "E-commerce", "Shelter management"],
    challenges: "Managing large images, complex search functionality, and ensuring data security for sensitive adoption information.",
    solutions: "Cloudinary integration for image optimization, MongoDB aggregation for complex searches, and role-based access control.",
    futureImprovements: ["Video profiles", "Matching algorithm", "Mobile app", "Veterinary integration"],
    liveUrl: "https://pawmart-zone.web.app",
    githubClient: "https://github.com/aamamunszone/pawmart-client",
    githubServer: "https://github.com/aamamunszone/pawmart-server",
    category: "Full Stack"
  },
  {
    id: "skill-swap",
    name: "Skill Swap",
    tagline: "Exchange Skills, Grow Together",
    description: "A unique platform where users exchange skills instead of money, fostering a community of learning and growth.",
    image: "/images/projects/Skill-Swap.png",
    tech: ["React", "Firebase", "Firestore", "Tailwind CSS"],
    features: ["Skill listing", "Match-making", "Session scheduling", "Rating system", "Video integration", "Community forum"],
    challenges: "Creating a fair matching algorithm, implementing real-time features, and ensuring quality control.",
    solutions: "Weighted matching algorithm, Firestore listeners for real-time updates, and comprehensive rating system.",
    futureImprovements: ["Video calls", "AI recommendations", "Group sessions", "Certification programs"],
    liveUrl: "https://skill-swap-zone.web.app",
    githubClient: "https://github.com/aamamunszone/skill-swap",
    category: "Web App"
  }
];

export const moreProjects = [
  {
    id: "hero-apps-haven",
    name: "Hero Apps Haven",
    image: "/images/projects/Hero-Apps.png",
    tech: ["React", "Tailwind CSS"],
    liveUrl: "https://hero-apps-haven.netlify.app/",
    github: "https://github.com/aamamunszone/b12a08-hero-apps-haven"
  },
  {
    id: "customer-support-zone",
    name: "Customer Support Zone",
    image: "/images/projects/Customer-Support.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://the-customer-support-zone.vercel.app/",
    github: "https://github.com/aamamunszone/b12a07-customer-support-zone"
  }
];

export const stats = [
  { label: "Years Experience", value: "3+", icon: "Calendar" },
  { label: "Projects Completed", value: "15+", icon: "FolderCheck" },
  { label: "Happy Clients", value: "10+", icon: "Users" },
  { label: "Cups of Coffee", value: "∞", icon: "Coffee" }
];