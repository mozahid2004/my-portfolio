// projectData.js

export const featuredProjects = [
  {
    id: "vaidyaaz",
    title: "Vaidyaaz Corporation PVT LTD",
    year: "2025",
    description:
      "Corporate website for an industrial manufacturing and coating solutions company. Showcases services, product capabilities, and company profile with a clean business-focused layout.",
    tech: ["React", "CSS", "JavaScript"],
    img:
      "https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.jpg?s=612x612&w=0&k=20&c=k8ckKsgOrPPxohAA_ywg2VXZzdCPptEbOlleRV8Kb7c=",
    link: "https://vaidyaaz.com",
  },
  {
    id: "mtecs",
    title: "MTECS",
    year: "2025",
    description:
      "Official website for an IT company based in Amravati. Includes service pages, portfolio showcase, contact integration, and modern responsive UI.",
    tech: ["React", "CSS", "Express.js", "Node.js"],
    img:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?semt=ais_incoming&w=740&q=80",
    link: "https://mtecs.in",
  },
  {
    id: "gulamsir",
    title: "Gulam Sir Academy",
    year: "2026",
    description:
      "Educational website for a coaching institute to help students connect, access course details, announcements, and admission information.",
    tech: ["React", "CSS"],
    img:
      "https://images.unsplash.com/photo-1642132652860-471b4228023e?fm=jpg&q=60&w=3000",
    link: "https://gulamsiracademy.com",
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    id: "mini-tool-1",
    title: "Daily Notes Tool",
    year: "2023",
    description:
      "Lightweight notes application with tagging system and offline storage support using IndexedDB. Designed for quick task capture and productivity.",
    tech: ["JavaScript", "IndexedDB"],
    img:
      "https://images.unsplash.com/photo-1523475496153-3d6cc0b5d2b8?auto=format&fit=crop&w=1200&q=60",
    link: "#",
  },

  // add more projects
];