export const listSkills = [
  {
    name: "JavaScript", // Diperbaiki: Kapitalisasi
    icon: "/icons/javascript.webp",
    link: "https://www.javascript.com/",
  },
  { 
    name: "React",
    icon: "/icons/reactjs.png",
    link: "https://reactjs.org/"
   },
   {
    name: "Tailwind",
    icon: "/icons/tailwind.png", // Diperbaiki: Menghapus /public
    link: "https://tailwindcss.com/",
   },
   {
    name: "HTML",
    icon: "/icons/html.png", // Diperbaiki: Menghapus /public
    link: "https://html.com/",
   },
   {
    name: "CSS",
    icon: "/icons/css.png", // Diperbaiki: Menghapus /public
    link: "https://css.com/",
   },
];

export const listIndustries = [
  { name: "Facebook", icon: "/icons/facebook.webp" }, // Opsional: Kapitalisasi
  { name: "Google", icon: "/icons/google.png" },      // Opsional: Kapitalisasi
  { name: "Tokopedia", icon: "/icons/tokopedia.png" },// Opsional: Kapitalisasi
  { name: "Amazon", icon: "/icons/amazon.png" },      // Opsional: Kapitalisasi
];

export const listProjects = [
  {
    title: "Darkblade studio web platform development",
    desc: "Developed a fully responsive and scalable web platform for a fantasy game studio. Implemented React.js with Tailwind CSS for rapid UI building, and integrated backend APIs for player stats, login, and live leaderboards. Optimized for performance and accessibility across all devices.", // Diperbaiki: Implemented, backend
    background: "/images/bg-2.jpg",
    list_tech: [
      { name: "JavaScript", icon: "/icons/javascript.webp" }, // Diperbaiki: Kapitalisasi
      { name: "React", icon: "/icons/reactjs.png" },
      { name: "Tailwind", icon: "/icons/tailwind.png" },
    ],
  },
  {
    title: "Personal Developer Portfolio GSAP & 3D UI", // Diperbaiki: Portfolio, &
    desc: "Created an animated portfolio site with GSAP scroll animations and interactive 3D sections using Three.js. Included custom-built CMS for easy content updates. Achieved Lighthouse performance score of 98+. Built with SEO, responsive design, and accessibility in mind.", // Diperbaiki: custom-built
    background: "/images/bg-3.jpg",
    list_tech: [
      { name: "JavaScript", icon: "/icons/javascript.webp" },
      { name: "React", icon: "/icons/reactjs.png" },
      { name: "Tailwind", icon: "/icons/tailwind.png" },
    ]
  }
];