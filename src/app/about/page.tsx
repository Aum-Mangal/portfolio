"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaAws,
} from "react-icons/fa6";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiCsharp,
  SiPhp,
  SiPrettier,
  SiFirebase,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiSqlite,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbBrandReactNative, TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "aummangal307@gmail.com",
    href: "mailto:aummangal307@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Mobile",
    content: "+91-9253260320",
    href: "tel:+919253260320",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aum-mangal-69853831b/",
    content: "/aummangal",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Aum-Mangal",
    content: "/aummangal",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "C++",
    content: "High-performance systems language",
    icon: <SiCsharp size={"50px"} color="#00599C" />,
    color: "#00599C",
  },
  {
    name: "Python",
    content: "AI and Data Science",
    icon: <SiPython size={"50px"} color="#3776ab" />,
    color: "#3776ab",
  },
  {
    name: "TypeScript",
    content: "Typed JavaScript",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "JavaScript",
    content: "Web's core language",
    icon: <RiJavascriptFill size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "React",
    content: "UI framework",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "FastAPI",
    content: "Python web framework",
    icon: <SiPython size={"50px"} color="#009688" />,
    color: "#009688",
  },
  {
    name: "PostgreSQL",
    content: "Relational database",
    icon: <SiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "Git",
    content: "Version control",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Aum Mangal</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Engineer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-full lg:w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About Me</h1>
            <p className="mb-10 text-roboto">
              Hello! I am Aum Mangal, a B.Tech student in Electronics and Computer Engineering at Vellore Institute of Technology. I specialize in C++, Python, TypeScript, and modern web frameworks like React and FastAPI. My passion lies in building complex systems including compilers, emulators, and full-stack AI applications.
            </p>
            <p className="mb-10">
              I have hands-on experience in Retrieval-Augmented Generation (RAG) using LangChain and FAISS, memory-mapped graphics emulation, and real-time AI response detection. I am also an active competitive programmer with a strong foundation in Data Structures and Algorithms, holding a Pupil rank on Codeforces.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Technologies I Use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Teknoloji İkonları"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 flex justify-center items-center drop-shadow-lg"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
