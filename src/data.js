export const profile = {
  name: "Laveendra Kumar Yarramsetty",
  short: "Laveendra K.",
  role: "Full stack developer",
  tagline: "ReactJS · Node.js · MERN · AI-enabled web apps",
  email: "laveenaee@gmail.com",
  phone: "+91 99124 93116",
  github: "https://github.com/laveendrakumar/",
  linkedin: "https://www.linkedin.com/in/laveendra-kumar-yarramsetty-24111331b",
  photo: "./profile.jpg",
  resume: "./Laveendra_Kumar_Resume.pdf",
  about:
    "Full stack developer building enterprise-grade web applications with ReactJS on the front end and Node.js/Express services behind them. I design and consume REST APIs, handle auth and secure data flows, manage state with Redux Toolkit, and ship tested, accessible interfaces translated straight from Figma."
};

export const stats = [
  { value: "4+", label: "years experience" },
  { value: "99.9%", label: "uptime delivered" },
  { value: "30%", label: "fewer UI defects" },
  { value: "25%", label: "faster sprints" }
];

export const skills = [
  {
    icon: "ti-layout",
    title: "Frontend",
    items: "React (Hooks, Context API, Suspense), TypeScript, JavaScript ES6+, Next.js, Redux Toolkit, Tailwind, MUI, SCSS"
  },
  {
    icon: "ti-server",
    title: "Backend",
    items: "Node.js, Express.js, REST API design, authentication and authorization, MySQL, PostgreSQL, MongoDB"
  },
  {
    icon: "ti-test-pipe",
    title: "Testing and build",
    items: "Jest, unit and integration testing, Webpack, Postman, Thunder Client, performance profiling"
  },
  {
    icon: "ti-cloud",
    title: "DevOps and tools",
    items: "Git, GitHub, GitLab CI/CD, AWS deployments, Linux, MobaXterm, JIRA, Agile and Scrum"
  }
];

export const experience = [
  {
    title: "System engineer, full stack",
    company: "Tata Consultancy Services, India",
    period: "Sep 2022 – present",
    points: [
      "Built React and Node.js features for enterprise telecom and B2B platforms, holding 99.9% uptime for international clients and cutting initial load times by 20%.",
      "Shipped a reusable component library on Atomic Design principles, lifting development efficiency by 30% across product lines.",
      "Developed REST APIs with input validation and structured error handling, plus auth flows and secure data handling across the stack.",
      "Contributed to GitLab CI/CD pipelines feeding AWS deployments, reducing sprint delivery timelines by 25%."
    ]
  }
];

export const projects = [
  {
    icon: "ti-antenna-bars-5",
    title: "Telecom B2B customer portal",
    location: "Malaysia, onsite client engagement",
    blurb:
      "High-traffic multiplatform portal for international roaming services. Order creation, tracking and role-based access screens cut manual customer support dependency by 25%.",
    tags: ["React", "TypeScript", "Node.js", "Redux", "AWS"]
  },
  {
    icon: "ti-refresh",
    title: "CFL React migration",
    location: "London client",
    blurb:
      "Led the front end onto a modern React architecture, reducing UI production defects by 30% through modular component design and Figma-to-code fidelity.",
    tags: ["React", "TypeScript", "Next.js", "Figma", "Jest"]
  }
];

export const certifications = [
  { name: "GitHub Foundations", issuer: "Microsoft / GitHub", year: "2026" },
  { name: "Namaste React", issuer: "NamasteDev.com", year: "2025" },
  { name: "Namaste JavaScript", issuer: "NamasteDev.com", year: "2024" }
];

export const education = [
  {
    degree: "B.Tech, electrical and electronics engineering",
    school: "Aditya Engineering College, Surampalem",
    period: "2016 – 2019"
  },
  {
    degree: "Diploma, electrical and electronics engineering",
    school: "Prasiddha College of Engineering and Technology",
    period: "2013 – 2016"
  }
];

export const nav = [
  { id: "home", icon: "ti-home", label: "Home" },
  { id: "about", icon: "ti-user", label: "About" },
  { id: "skills", icon: "ti-code", label: "Skills" },
  { id: "experience", icon: "ti-briefcase", label: "Experience" },
  { id: "projects", icon: "ti-layout-grid", label: "Projects" },
  { id: "credentials", icon: "ti-certificate", label: "Credentials" },
  { id: "contact", icon: "ti-mail", label: "Contact" }
];
