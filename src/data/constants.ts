// Skills and Experience data
export enum SkillNames {
  PYTHON = "python",
  CPP = "cpp",
  DSA = "dsa",
  TS = "ts",
  JS = "js",
  FASTAPI = "fastapi",
  REACT = "react",
  SQL = "sql",
  POSTGRES = "postgres",
  REST_API = "rest_api",
  AI = "ai",
  RAG = "rag",
  LANGCHAIN = "langchain",
  FAISS = "faiss",
  NLP = "nlp",
  SPACY = "spacy",
  HUGGINGFACE = "huggingface",
  COMPILER_DESIGN = "compiler_design",
  VIRTUAL_MACHINES = "virtual_machines",
  COMPUTER_ARCHITECTURE = "computer_architecture",
  OOP = "oop",
  OPERATING_SYSTEMS = "operating_systems",
  DOCKER = "docker",
  GIT = "git",
  // Backward compatibility keys
  HTML = "html",
  CSS = "css",
  SQLITE = "sqlite",
  GITHUB = "github",
  LINUX = "linux",
  VSCODE = "vscode",
}

export type SkillCategory =
  | "All"
  | "Languages"
  | "AI & Machine Learning"
  | "Web & Backend"
  | "Systems & Core CS"
  | "DevOps & Tools";

export type Skill = {
  id: number;
  name: string;
  label: string;
  category: SkillCategory;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  "All",
  "Languages",
  "AI & Machine Learning",
  "Web & Backend",
  "Systems & Core CS",
  "DevOps & Tools",
];

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    category: "Languages",
    shortDescription: "High-level language for AI, machine learning, data science, and backend engineering.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    category: "Languages",
    shortDescription: "High-performance systems programming, low-level memory control, and competitive problem solving.",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.DSA]: {
    id: 3,
    name: "dsa",
    label: "Data Structures & Algorithms",
    category: "Systems & Core CS",
    shortDescription: "Algorithmic problem solving, asymptotic complexity, dynamic programming, and data structures.",
    color: "#f43f5e",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f43f5e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='5' r='3'/><circle cx='5' cy='19' r='3'/><circle cx='19' cy='19' r='3'/><line x1='12' y1='8' x2='5' y2='16'/><line x1='12' y1='8' x2='19' y2='16'/></svg>",
  },
  [SkillNames.TS]: {
    id: 4,
    name: "ts",
    label: "TypeScript",
    category: "Languages",
    shortDescription: "Typed superset of JavaScript providing static type verification, refactoring, and scalable architecture.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.JS]: {
    id: 5,
    name: "js",
    label: "JavaScript",
    category: "Languages",
    shortDescription: "Dynamic, versatile language powering modern web frontends, full-stack runtimes, and APIs.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 6,
    name: "fastapi",
    label: "FastAPI",
    category: "Web & Backend",
    shortDescription: "Modern, high-performance asynchronous Python web framework for building production REST APIs.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.REACT]: {
    id: 7,
    name: "react",
    label: "React.js",
    category: "Web & Backend",
    shortDescription: "Component-driven declarative frontend UI library with custom hooks and reactive state.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.SQL]: {
    id: 8,
    name: "sql",
    label: "SQL",
    category: "Web & Backend",
    shortDescription: "Declarative querying, database normalization, relational schema design, indexing, and joins.",
    color: "#e48e00",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e48e00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><ellipse cx='12' cy='5' rx='9' ry='3'/><path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'/><path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'/></svg>",
  },
  [SkillNames.POSTGRES]: {
    id: 9,
    name: "postgres",
    label: "PostgreSQL",
    category: "Web & Backend",
    shortDescription: "Reliable, open-source object-relational database with ACID transactions, JSONB, and indexing.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.REST_API]: {
    id: 10,
    name: "rest_api",
    label: "REST APIs",
    category: "Web & Backend",
    shortDescription: "Architectural style for scalable web services, HTTP methods, status codes, and OpenAPI standards.",
    color: "#2563eb",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='2' width='20' height='8' rx='2' ry='2'/><rect x='2' y='14' width='20' height='8' rx='2' ry='2'/><line x1='6' y1='6' x2='6.01' y2='6'/><line x1='6' y1='18' x2='6.01' y2='18'/></svg>",
  },
  [SkillNames.AI]: {
    id: 11,
    name: "ai",
    label: "Artificial Intelligence (AI)",
    category: "AI & Machine Learning",
    shortDescription: "Intelligent systems, heuristic search algorithms, decision theory, and probabilistic reasoning.",
    color: "#8b5cf6",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b5cf6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4h1v1a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-1h1a4 4 0 0 0 4-4V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z'/><circle cx='9' cy='10' r='1'/><circle cx='15' cy='10' r='1'/></svg>",
  },
  [SkillNames.RAG]: {
    id: 12,
    name: "rag",
    label: "Retrieval-Augmented Generation (RAG)",
    category: "AI & Machine Learning",
    shortDescription: "Context injection pipelines combining dense vector retrieval with LLMs to eliminate hallucinations.",
    color: "#ec4899",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ec4899' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='8'/><line x1='21' y1='21' x2='16.65' y2='16.65'/><path d='M11 8v6'/><path d='M8 11h6'/></svg>",
  },
  [SkillNames.LANGCHAIN]: {
    id: 13,
    name: "langchain",
    label: "LangChain",
    category: "AI & Machine Learning",
    shortDescription: "Composable orchestration framework for building agentic workflows, memory, and LLM chains.",
    color: "#10b981",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2310b981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/></svg>",
  },
  [SkillNames.FAISS]: {
    id: 14,
    name: "faiss",
    label: "FAISS",
    category: "AI & Machine Learning",
    shortDescription: "Facebook AI Similarity Search for billion-scale high-dimensional vector search and indexing.",
    color: "#0ea5e9",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230ea5e9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>",
  },
  [SkillNames.NLP]: {
    id: 15,
    name: "nlp",
    label: "Natural Language Processing (NLP)",
    category: "AI & Machine Learning",
    shortDescription: "Tokenization, syntactic parsing, semantic embeddings, NER, and transformer-based understanding.",
    color: "#6366f1",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/><line x1='8' y1='9' x2='16' y2='9'/><line x1='8' y1='13' x2='13' y2='13'/></svg>",
  },
  [SkillNames.SPACY]: {
    id: 16,
    name: "spacy",
    label: "spaCy",
    category: "AI & Machine Learning",
    shortDescription: "Fast, production-ready Python NLP library for tokenization, POS tagging, and entity recognition.",
    color: "#09a3d5",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 17,
    name: "huggingface",
    label: "Hugging Face Transformers",
    category: "AI & Machine Learning",
    shortDescription: "Pretrained transformer architectures for NLP, multimodal tasks, fine-tuning, and inference.",
    color: "#ffcc4d",
    icon: "https://huggingface.co/front/assets/huggingface_logo.svg",
  },
  [SkillNames.COMPILER_DESIGN]: {
    id: 18,
    name: "compiler_design",
    label: "Compiler Design",
    category: "Systems & Core CS",
    shortDescription: "Lexical analysis, AST generation, semantic typing, intermediate representations, and optimization.",
    color: "#f97316",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f97316' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='16 18 22 12 16 6'/><polyline points='8 6 2 12 8 18'/></svg>",
  },
  [SkillNames.VIRTUAL_MACHINES]: {
    id: 19,
    name: "virtual_machines",
    label: "Virtual Machines",
    category: "Systems & Core CS",
    shortDescription: "Bytecode instruction dispatch, stack-based runtime engines, heap memory, and garbage collection.",
    color: "#06b6d4",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306b6d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='4' y='4' width='16' height='16' rx='2' ry='2'/><rect x='9' y='9' width='6' height='6'/><line x1='9' y1='1' x2='9' y2='4'/><line x1='15' y1='1' x2='15' y2='4'/><line x1='9' y1='20' x2='9' y2='23'/><line x1='15' y1='20' x2='15' y2='23'/><line x1='20' y1='9' x2='23' y2='9'/><line x1='20' y1='14' x2='23' y2='14'/><line x1='1' y1='9' x2='4' y2='9'/><line x1='1' y1='14' x2='4' y2='14'/></svg>",
  },
  [SkillNames.COMPUTER_ARCHITECTURE]: {
    id: 20,
    name: "computer_architecture",
    label: "Computer Architecture",
    category: "Systems & Core CS",
    shortDescription: "Instruction set architectures (RISC/CISC), pipeline stages, branch prediction, and cache memory.",
    color: "#a855f7",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a855f7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z'/><path d='M9 9h6v6H9z'/></svg>",
  },
  [SkillNames.OOP]: {
    id: 21,
    name: "oop",
    label: "Object-Oriented Programming (OOP)",
    category: "Systems & Core CS",
    shortDescription: "Design patterns, encapsulation, polymorphism, inheritance, and clean SOLID architectural principles.",
    color: "#3b82f6",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='12 2 2 7 12 12 22 7 12 2'/><polyline points='2 17 12 22 22 17'/><polyline points='2 12 12 17 22 12'/></svg>",
  },
  [SkillNames.OPERATING_SYSTEMS]: {
    id: 22,
    name: "operating_systems",
    label: "Operating Systems",
    category: "Systems & Core CS",
    shortDescription: "Process synchronization, multithreading, paging, virtual memory, file systems, and system calls.",
    color: "#64748b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 23,
    name: "docker",
    label: "Docker",
    category: "DevOps & Tools",
    shortDescription: "Containerization, multi-stage Dockerfiles, image optimization, and reproducible deployments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.GIT]: {
    id: 24,
    name: "git",
    label: "Git",
    category: "DevOps & Tools",
    shortDescription: "Distributed version control, atomic commits, branching workflows, rebasing, and merge resolution.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  // Backward compatibility entries
  [SkillNames.HTML]: {
    id: 25,
    name: "html",
    label: "HTML",
    category: "Web & Backend",
    shortDescription: "The foundational markup language of the Web 🏗️🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 26,
    name: "css",
    label: "CSS",
    category: "Web & Backend",
    shortDescription: "Styling the web with visual perfection 💅✨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 27,
    name: "sqlite",
    label: "SQLite",
    category: "Web & Backend",
    shortDescription: "Lightweight and embedded relational database 📦💾",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 28,
    name: "github",
    label: "GitHub",
    category: "DevOps & Tools",
    shortDescription: "The center of open-source and collaboration 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 29,
    name: "linux",
    label: "Linux",
    category: "Systems & Core CS",
    shortDescription: "Open-source operating system for servers 🐧🔓",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 30,
    name: "vscode",
    label: "VS Code",
    category: "DevOps & Tools",
    shortDescription: "The ultimate code editor 🧑‍💻✨",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
};

// Array of the primary 24 tech stack skills in clean display order
export const TECH_STACK_SKILLS: Skill[] = [
  SKILLS[SkillNames.PYTHON],
  SKILLS[SkillNames.CPP],
  SKILLS[SkillNames.DSA],
  SKILLS[SkillNames.TS],
  SKILLS[SkillNames.JS],
  SKILLS[SkillNames.FASTAPI],
  SKILLS[SkillNames.REACT],
  SKILLS[SkillNames.SQL],
  SKILLS[SkillNames.POSTGRES],
  SKILLS[SkillNames.REST_API],
  SKILLS[SkillNames.AI],
  SKILLS[SkillNames.RAG],
  SKILLS[SkillNames.LANGCHAIN],
  SKILLS[SkillNames.FAISS],
  SKILLS[SkillNames.NLP],
  SKILLS[SkillNames.SPACY],
  SKILLS[SkillNames.HUGGINGFACE],
  SKILLS[SkillNames.COMPILER_DESIGN],
  SKILLS[SkillNames.VIRTUAL_MACHINES],
  SKILLS[SkillNames.COMPUTER_ARCHITECTURE],
  SKILLS[SkillNames.OOP],
  SKILLS[SkillNames.OPERATING_SYSTEMS],
  SKILLS[SkillNames.DOCKER],
  SKILLS[SkillNames.GIT],
];

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
      SkillNames.DSA,
      SkillNames.OOP,
      SkillNames.OPERATING_SYSTEMS,
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
      SkillNames.CPP,
      SkillNames.PYTHON,
      SkillNames.DSA,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode ahead, sunglasses recommended! ☀️😎",
    "Switching to light mode — brighter than the future!",
    "Only true daredevils can handle this much radiance! ⚡",
    "Brace yourself... Photon overload incoming! 💡",
    "Light mode activated! Let there be light.",
  ],
  dark: [
    "Dark mode activated! May the dark side be with you. 🌌",
    "Welcome back to the shadows. Your eyes thank you! 🕶️",
    "Dark mode on. Finally, someone with true taste. 🖤",
    "Ah, darkness my old friend. Hello again. 🌑",
    "Stealth mode engaged. Code in comfort. 💻✨",
  ],
};
