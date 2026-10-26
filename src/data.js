// All the text of the portfolio is kept here, so that the components stay small
// and the content can be changed in one place.

export const profile = {
  name: "Gurasees Singh Bhogal",
  role: "Full Stack Developer",
  headline: "I turn raw data into apps people actually use.",
  intro:
    "Data Analytics AI Intern at Addler in Mumbai, building its sales insights and repairs management apps with Next.js, React and Firebase.",
  email: "bhogalgurasees@gmail.com",
  location: "Mumbai, India",
  github: "https://github.com/gurasees830",
  linkedin: "https://www.linkedin.com/in/guraseessinghbhogal/",
  resume: "/Gurasees_Singh_Bhogal_Resume.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "5", label: "Apps built", note: "2 at Addler, 3 personal" },
  { value: "18K+", label: "Hotel listings", note: "Searchable on a map in Stay Smart" },
  { value: "1st", label: "Place, Aavishkaar 2023", note: "Inter-college, across Mumbai" },
  { value: "3", label: "Certifications", note: "Full stack, MERN, Python" },
];

export const about = {
  paragraphs: [
    "I am a full stack developer and a Data Analytics AI Intern at Addler, a medical-equipment company in Mumbai. I completed my B.Sc. in Computer Science and I am now focused on building complete web applications, from the database to the screen.",
    "My work mixes two things: data and software. I turn years of sales records into dashboards, profit views and forecasts a business can act on, and I build the full stack apps that carry them, with authentication, APIs, databases, charts and map-based views that stay responsive on every screen.",
  ],
  roles: [
    {
      title: "The Analyst",
      text: "Data analytics with an AI lens. Dashboards, profit views and forecasts for real sales data at Addler.",
    },
    {
      title: "The Builder",
      text: "Full stack web apps in Next.js, React and TypeScript, with authentication, APIs, databases and maps.",
    },
    {
      title: "The Teammate",
      text: "1st place at Aavishkaar 2023 for a team-built electric cycle, and coordinator of about 500 people at the TCS Marathon 2026.",
    },
  ],
};

// cover is a file in public/projects. Replace it with a real screenshot of the project.
export const projects = [
  {
    id: "addler-insight",
    category: "Internship",
    title: "Addler Insight",
    tagline: "Years of sales history, turned into answers the business can use.",
    status: "In progress",
    kind: "Sales insights web app",
    description:
      "An internal web app with role-based access: a past sales dashboard, sales insights by category, brand and location, profit views, product performance, a customer map and a seasonal sales forecast.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Firebase", "Recharts", "Google Maps"],
    cover: "/projects/addler-insight.svg",
  },
  {
    id: "addler-repairs",
    category: "Internship",
    title: "Addler Repairs",
    tagline: "Every repair in the organisation, from inventory to shipment.",
    status: "In progress",
    kind: "Repairs management app",
    description:
      "Tracks every piece of equipment that comes in for repair, creates shipments for repaired equipment, and shows dealers, agents and doctors on a world map.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Firestore", "Google Maps"],
    cover: "/projects/addler-repairs.svg",
  },
  {
    id: "stay-smart",
    category: "Personal",
    title: "Stay Smart",
    tagline: "Hotels across India, searchable on one map.",
    status: "Personal project",
    kind: "Hotel booking, full stack",
    description:
      "A hotel booking app with more than 18,000 listings. I built authentication, search and filters, listing management and map navigation.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Mapbox", "MongoDB"],
    cover: "/projects/stay-smart.svg",
  },
  {
    id: "parkify",
    category: "Personal",
    title: "Parkify",
    tagline: "Find an open parking spot, then get directions to it.",
    status: "Personal project",
    kind: "Parking management, location based",
    description:
      "A parking app with Supabase database operations, location search and turn by turn navigation to the chosen spot with Mapbox.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Mapbox"],
    cover: "/projects/parkify.svg",
  },
  {
    id: "ethos",
    category: "Personal",
    title: "Ethos Watches & Co.",
    tagline: "Luxury watches, easy to browse on any screen.",
    status: "Personal project",
    kind: "E-commerce front end",
    description:
      "A responsive e-commerce site with product layouts, navigation, responsive sections and interactive features.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    cover: "/projects/ethos.svg",
  },
  {
    id: "e-cycle",
    category: "Team",
    title: "E-Cycle",
    tagline: "An electric cycle, built as a team, that took first place.",
    status: "1st place, Aavishkaar 2023",
    kind: "Hardware, team build",
    description:
      "An electric cycle built by a team for the Aavishkaar 2023 inter-college degree competition across Mumbai, where it won first place.",
    stack: ["Hardware", "Teamwork", "Inter-college competition"],
    cover: "/projects/e-cycle.svg",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend and data",
    items: ["Python", "Java", "SQL", "REST APIs", "Firebase", "Firestore", "MongoDB", "Supabase"],
  },
  {
    title: "Maps and charts",
    items: ["Google Maps", "Mapbox", "Recharts"],
  },
  {
    title: "Tools",
    items: ["Git and GitHub", "Vitest", "Vite"],
  },
];

export const experience = [
  {
    period: "Now",
    title: "Data Analytics AI Intern",
    place: "Addler, Golden Nimbus International, Marol, Mumbai",
    text: "Building Addler Insight (sales insights) and Addler Repairs (repairs management).",
  },
];

export const education = [
  {
    period: "2023 - 2026",
    title: "B.Sc. Computer Science",
    place: "University of Mumbai (Shree L.R. Tiwari Degree College)",
    text: "CGPA 7.5 / 10",
  },
  {
    period: "2026",
    title: "Full Stack Developer course",
    place: "IT Vedant",
    text: "Certification",
  },
  {
    period: "2020 - 2022",
    title: "Higher Secondary Certificate, Class 12",
    place: "SVPV Vidyalaya, Mira Road",
    text: "",
  },
];

export const certifications = [
  { year: "2026", title: "Full Stack Developer", issuer: "IT Vedant" },
  { year: "2025", title: "Python", issuer: "Udemy" },
  { year: "2024", title: "MERN Stack", issuer: "Tute Dude" },
];
