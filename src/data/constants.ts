// Skills and Experience data
export enum SkillNames {
  CPP = "cpp",
  PYTHON = "python",
  TS = "ts",
  JS = "js",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  FASTAPI = "fastapi",
  POSTGRES = "postgres",
  SQLITE = "sqlite",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  LINUX = "linux",
  VSCODE = "vscode",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.CPP]: {
    id: 1,
    name: "cpp",
    label: "C++",
    shortDescription: "Powerful, high-performance systems language 🚀",
    color: "#00599C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 2,
    name: "python",
    label: "Python",
    shortDescription: "The go-to language for AI and data science 🐍🧠",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.TS]: {
    id: 3,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with strong typing capabilities 🔒💪",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.JS]: {
    id: 4,
    name: "js",
    label: "JavaScript",
    shortDescription: "The foundational language of the Web! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 5,
    name: "html",
    label: "HTML",
    shortDescription: "The building block of the Web 🏗️🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 6,
    name: "css",
    label: "CSS",
    shortDescription: "Styling the web with visual perfection 💅✨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 7,
    name: "react",
    label: "React",
    shortDescription: "The star of component-based UI development ⚛️🌟",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 8,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "High-performance Python web framework ⚡",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 9,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Powerful and reliable relational database 🐘💎",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 10,
    name: "sqlite",
    label: "SQLite",
    shortDescription: "Lightweight and embedded relational database 📦💾",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.GIT]: {
    id: 11,
    name: "git",
    label: "Git",
    shortDescription: "Version control for code safety 🔄🛡️",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 12,
    name: "github",
    label: "GitHub",
    shortDescription: "The center of open-source and collaboration 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 13,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization for consistent environments 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 14,
    name: "linux",
    label: "Linux",
    shortDescription: "Open-source operating system for servers 🐧🔓",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 15,
    name: "vscode",
    label: "VS Code",
    shortDescription: "The ultimate code editor 🧑‍💻✨",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2024",
    endDate: "Present",
    title: "B.Tech in Electronics and Computer Engineering",
    company: "Vellore Institute of Technology",
    description: [
      "GPA: 8.04/10",
      "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Theory of Computation, Object-Oriented Programming, Digital Signal Processing.",
    ],
    skills: [
      SkillNames.CPP,
      SkillNames.PYTHON,
      SkillNames.JS,
      SkillNames.TS,
    ],
  },
  {
    id: 2,
    startDate: "Achievement",
    endDate: "",
    title: "Competitive Programming",
    company: "Codeforces, LeetCode, HackerRank",
    description: [
      "Codeforces Pupil with 1200+ rating.",
      "Solved 300+ algorithmic problems across Codeforces, LeetCode, and HackerRank.",
      "Secured 5th place in an inter-college competitive programming competition.",
      "Selected for Round 3 in Flipkart GRID 8.0, a national-level engineering competition.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.JS,
    ],
  }
];

export const themeDisclaimers = {
  light: [
    "Uyarı: Light mode göz kamaştırıcı parlaklıkta!",
    "Dikkat: Light mode aktif! Güneş gözlüğünüzü takın.",
    "Bu kadar parlaklığı sadece profesyoneller kaldırabilir!",
    "Light mode açılıyor... Gözleriniz hazır mı?",
    "Işık moduna geçiliyor — geleceğinizden daha parlak!",
  ],
  dark: [
    "Dark mode aktif! Karanlık tarafın gücü seninle olsun.",
    "Dark mode'a geri hoş geldin. Işık tarafında hayat nasıldı?",
    "Dark mode aktif! Kalbimin derinliklerinden ve gözlerimden teşekkürler.",
    "Gölgelere geri hoş geldin. Dışarıda hayat nasıldı?",
    "Dark mode açık! Sonunda gerçek zarafeti anlayan biri.",
  ],
};
