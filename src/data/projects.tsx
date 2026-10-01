import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiFastapi,
  SiCplusplus,
  SiJavascript
} from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "codetime",
    category: "Compiler Design",
    title: "CodeTime",
    src: "", // No screenshots available for now
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [],
    },
    github: "https://github.com/aummangal/codetime",
    live: "https://aummangal.github.io/codetime",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Browser IDE & Virtual Machine
          </TypographyP>
          <TypographyP className="font-mono">
            A custom programming language and browser IDE in TypeScript with a lexer, Pratt parser, semantic analyzer, bytecode compiler, and stack-based virtual machine supporting closures and call frames.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Time-Travel Debugging
          </TypographyH3>
          <p className="font-mono mb-2">
            Engineered indexed time-travel debugging with bidirectional execution, historical variable inspection, breakpoint navigation, and call-stack visualization.
          </p>
        </div>
      );
    },
  },
  {
    id: "documind",
    category: "AI & Full Stack",
    title: "DocuMind",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi, PROJECT_SKILLS.postgres],
    },
    github: "https://github.com/aummangal/documind",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            RAG Document Q&A Platform
          </TypographyP>
          <TypographyP className="font-mono">
            Multi-user full-stack application using FastAPI and PostgreSQL, implementing JWT authentication, REST APIs, and document processing.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Retrieval-Augmented Generation
          </TypographyH3>
          <p className="font-mono mb-2">
            Implemented a RAG pipeline using sentence-transformers for semantic embeddings and FAISS for sub-linear vector similarity search, enabling natural language Q&A over large documents via Groq LLaMA 3.
          </p>
        </div>
      );
    },
  },
  {
    id: "chip8",
    category: "Emulation",
    title: "CHIP-8 Emulator",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.cpp],
      backend: [],
    },
    github: "https://github.com/aummangal/chip8",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Cycle-accurate Virtual Machine
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered a cycle-accurate CHIP-8 virtual machine applying computer architecture principles through a fetch–decode–execute pipeline, opcode dispatch, and hardware-accurate 60Hz timer subsystem.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Memory-mapped Graphics
          </TypographyH3>
          <p className="font-mono mb-2">
            Implemented memory-mapped graphics using SDL2 with XOR sprite collision detection, 4KB memory, 16 registers, stack-based subroutines, and program-counter management.
          </p>
        </div>
      );
    },
  },
  {
    id: "ecoprompt",
    category: "Browser Extension",
    title: "EcoPrompt",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [],
    },
    github: "https://github.com/aummangal/ecoprompt",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI Environmental Impact Tracker
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered real-time AI response detection using MutationObserver across ChatGPT, Claude, and Gemini, enabling continuous environmental impact tracking without modifying page behavior.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Usage Analytics
          </TypographyH3>
          <p className="font-mono mb-2">
            Implemented token-based environmental impact estimation and built a React/Chart.js dashboard with usage analytics and persistent session history using Chrome Storage API.
          </p>
        </div>
      );
    },
  },
  {
    id: "sorting-visualizer",
    category: "Algorithm Visualization",
    title: "Sorting Visualizer",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [],
    },
    github: "https://github.com/Aum-Mangal/sorting-visualizer",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Algorithm Visualization Tool
          </TypographyP>
          <TypographyP className="font-mono">
            Interactive web application to visualize the execution of various sorting algorithms in real-time.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Features
          </TypographyH3>
          <p className="font-mono mb-2">
            Includes adjustable speeds, dynamic array size generation, and a clean, responsive UI to help understand how fundamental sorting algorithms work under the hood.
          </p>
        </div>
      );
    },
  },
  {
    id: "network-diagnostic-toolkit",
    category: "Networking",
    title: "Network Diagnostic Toolkit",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [],
    },
    github: "https://github.com/Aum-Mangal/network-diagnostic-toolkit",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Network Analysis Utility
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive suite of tools built for network diagnostics, packet analysis, and performance testing.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Functionality
          </TypographyH3>
          <p className="font-mono mb-2">
            Designed to help monitor network health, inspect latency issues, and perform essential diagnostic operations effectively.
          </p>
        </div>
      );
    },
  },
];
export default projects;
