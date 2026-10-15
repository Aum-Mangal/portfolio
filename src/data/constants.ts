// Skills and Experience data
export enum SkillNames {
  PYTHON = "python",
  CPP = "cpp",
  TS = "ts",
  JS = "js",
  REACT = "react",
  NODEJS = "nodejs",
  FASTAPI = "fastapi",
  POSTGRES = "postgres",
  SQLITE = "sqlite",
  REST_API = "rest_api",
  LANGCHAIN = "langchain",
  FAISS = "faiss",
  SPACY = "spacy",
  HUGGINGFACE = "huggingface",
  SDL2 = "sdl2",
  CHARTJS = "chartjs",
  HTML = "html",
  CSS = "css",
  DOCKER = "docker",
  GIT = "git",
  GITHUB = "github",
  LINUX = "linux",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  keyShortcut: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    keyShortcut: "P",
    shortDescription: "High-level language for AI, data science, automation, and backend engineering.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    keyShortcut: "C",
    shortDescription: "High-performance compiled language for systems programming, games, and low-latency engines.",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.TS]: {
    id: 3,
    name: "ts",
    label: "TypeScript",
    keyShortcut: "T",
    shortDescription: "Statically typed JavaScript superset delivering compile-time type safety and scalability.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.JS]: {
    id: 4,
    name: "js",
    label: "JavaScript",
    keyShortcut: "J",
    shortDescription: "Dynamic language powering modern web applications, interactive frontends, and full-stack runtimes.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React.js",
    keyShortcut: "R",
    shortDescription: "Component-based UI library with declarative JSX rendering, state hooks, and virtual DOM.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 6,
    name: "nodejs",
    label: "Node.js",
    keyShortcut: "N",
    shortDescription: "Asynchronous event-driven JavaScript runtime for scalable network applications and backend servers.",
    color: "#339933",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 7,
    name: "fastapi",
    label: "FastAPI",
    keyShortcut: "F",
    shortDescription: "Modern, high-performance asynchronous Python web framework for building production APIs.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 8,
    name: "postgres",
    label: "PostgreSQL",
    keyShortcut: "Q",
    shortDescription: "Enterprise-grade open-source relational database with robust ACID transactions and JSONB indexing.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 9,
    name: "sqlite",
    label: "SQLite",
    keyShortcut: "S",
    shortDescription: "Self-contained, serverless zero-configuration transactional SQL database engine.",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.REST_API]: {
    id: 10,
    name: "rest_api",
    label: "REST APIs",
    keyShortcut: "A",
    shortDescription: "Scalable architectural style for distributed hypermedia systems, HTTP methods, and OpenAPI standards.",
    color: "#2563eb",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='2' width='20' height='8' rx='2'/><rect x='2' y='14' width='20' height='8' rx='2'/><line x1='6' y1='6' x2='6.01' y2='6'/><line x1='6' y1='18' x2='6.01' y2='18'/></svg>",
  },
  [SkillNames.LANGCHAIN]: {
    id: 11,
    name: "langchain",
    label: "LangChain",
    keyShortcut: "L",
    shortDescription: "Composable framework for building complex LLM workflows, memory chains, and autonomous agents.",
    color: "#10b981",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2310b981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/></svg>",
  },
  [SkillNames.FAISS]: {
    id: 12,
    name: "faiss",
    label: "FAISS",
    keyShortcut: "I",
    shortDescription: "Facebook AI Similarity Search for billion-scale high-dimensional vector search and dense indexing.",
    color: "#0ea5e9",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230ea5e9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>",
  },
  [SkillNames.SPACY]: {
    id: 13,
    name: "spacy",
    label: "spaCy",
    keyShortcut: "Y",
    shortDescription: "Production-grade Python NLP library for tokenization, POS tagging, NER, and linguistic pipelines.",
    color: "#09a3d5",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 14,
    name: "huggingface",
    label: "Hugging Face Transformers",
    keyShortcut: "H",
    shortDescription: "State-of-the-art pretrained transformer architectures (BERT, GPT, RoBERTa) for NLP and multimodal AI.",
    color: "#ffcc4d",
    icon: "https://huggingface.co/front/assets/huggingface_logo.svg",
  },
  [SkillNames.SDL2]: {
    id: 15,
    name: "sdl2",
    label: "SDL2",
    keyShortcut: "Z",
    shortDescription: "Simple DirectMedia Layer 2 for cross-platform low-level audio, keyboard, mouse, and hardware graphics.",
    color: "#3b82f6",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='6' width='20' height='12' rx='2'/><path d='M6 12h4m-2-2v4'/><circle cx='17' cy='10' r='1' fill='%233b82f6'/><circle cx='15' cy='13' r='1' fill='%233b82f6'/></svg>",
  },
  [SkillNames.CHARTJS]: {
    id: 16,
    name: "chartjs",
    label: "Chart.js",
    keyShortcut: "X",
    shortDescription: "Flexible HTML5 Canvas charting library for responsive, animated data visualisations and analytics.",
    color: "#ff6384",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff6384' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>",
  },
  [SkillNames.HTML]: {
    id: 17,
    name: "html",
    label: "HTML5",
    keyShortcut: "M",
    shortDescription: "Standard markup language for structuring web pages and modern web applications.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 18,
    name: "css",
    label: "CSS3",
    keyShortcut: "E",
    shortDescription: "Style sheet language powering responsive modern layouts, Flexbox, Grid, and visual styling.",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 19,
    name: "docker",
    label: "Docker",
    keyShortcut: "D",
    shortDescription: "Containerization platform for bundling microservices, runtime isolation, and consistent deployments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.GIT]: {
    id: 20,
    name: "git",
    label: "Git",
    keyShortcut: "G",
    shortDescription: "Distributed version control system for tracking source code changes, branching, and collaboration.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 21,
    name: "github",
    label: "GitHub",
    keyShortcut: "U",
    shortDescription: "Cloud platform for code hosting, version control, CI/CD pipelines, and open-source collaboration.",
    color: "#24292e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 22,
    name: "linux",
    label: "Linux",
    keyShortcut: "K",
    shortDescription: "Open-source Unix-like operating system kernel powering cloud servers, containers, and development.",
    color: "#fcc624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 23,
    name: "vercel",
    label: "Vercel",
    keyShortcut: "V",
    shortDescription: "Frontend cloud platform optimizing developer experience, Next.js deployments, and serverless edge functions.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export const TECH_STACK_SKILLS: Skill[] = Object.values(SKILLS);

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
      SkillNames.NODEJS,
      SkillNames.REACT,
      SkillNames.SQLITE,
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
      SkillNames.JS,
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
