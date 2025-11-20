// projectData.js
// Put this next to your components and import from it.
// Edit / add entries freely — this supports unlimited projects.

export const featuredProjects = [
  {
    id: "citynest",
    title: "CityNest Website",
    year: "2024",
    description:
      "A hostel & lodge finder website for students — area-based search, owner contact, booking flow and listing management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    img:
      "https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.jpg?s=612x612&w=0&k=20&c=k8ckKsgOrPPxohAA_ywg2VXZzdCPptEbOlleRV8Kb7c=",
    link: "https://citynest.in",
    review:
      "Clean UI and fast search — helped students find rooms quickly. Great delivery and ongoing support.",
    client: "CityNest Team",
    rating: 5,
  },
  {
    id: "queenstays",
    title: "QueenStays Website",
    year: "2025",
    description:
      "PG, mess & tiffin listing site for girls with area-wise filters and owner verification flow.",
    tech: ["React", "NodeJS", "MongoDB"],
    img:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?semt=ais_incoming&w=740&q=80",
    link: "https://queenstays.in",
    review:
      "Professional work and quick turnaround — the UX increased signup rates immediately.",
    client: "QueenStays Founder",
    rating: 5,
  },
  {
    id: "mindtracker",
    title: "Mind Tracker App",
    year: "2025",
    description:
      "Daily habit, study & expense tracking system with analytics, streaks and progress charts.",
    tech: ["MERN", "Redux"],
    img:
      "https://images.unsplash.com/photo-1642132652860-471b4228023e?fm=jpg&q=60&w=3000",
    link: "https://mindtracker.com",
    review:
      "Very useful app — elegant UI and insightful analytics. Users loved the streak feature.",
    client: "MindTracker User",
    rating: 4,
  },
];

export const allProjects = [
  // include the featured ones (optional) + many more
  ...featuredProjects,
  {
    id: "mini-tool-1",
    title: "Daily Notes Tool",
    year: "2023",
    description: "Simple notes app with tagging and offline support.",
    tech: ["JS", "IndexedDB"],
    img: "https://images.unsplash.com/photo-1523475496153-3d6cc0b5d2b8?auto=format&fit=crop&w=1200&q=60",
    link: "#",
    review: "Tiny but mighty — great for quick capture.",
    client: "Personal",
    rating: 4,
  },
  {
    id: "ecomm-lite",
    title: "Ecom Lite",
    year: "2024",
    description: "Small ecommerce front-end demo with cart and checkout mock.",
    tech: ["React", "Stripe"],
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60",
    link: "#",
    review: "Nice demo for potential clients.",
    client: "Demo",
    rating: 4,
  },
  // add as many projects as you want below
  {
    id: "course-portal",
    title: "Course Portal",
    year: "2022",
    description: "Student portal with course listing, payments and certificates.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60",
    link: "#",
    review: "Good for small institutes.",
    client: "Local Institute",
    rating: 4,
  },
  {
    id: "ui-kit",
    title: "UI Kit (Design System)",
    year: "2022",
    description: "Reusable component library and design tokens for quick builds.",
    tech: ["Figma", "React"],
    img: "https://images.unsplash.com/photo-1525820003055-1c7a5f2a4f6a?auto=format&fit=crop&w=1200&q=60",
    link: "#",
    review: "Saved time on designs.",
    client: "Internal",
    rating: 5,
  },
  // ... add more projects
];
