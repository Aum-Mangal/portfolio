"use client";

import React from "react";
import Link from "next/link";
import projects from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen container mx-auto px-4 md:px-12 lg:px-24 pt-28 pb-20 text-zinc-300">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          All Projects
        </h1>
        <p className="text-zinc-400 text-lg">
          A showcase of systems, compilers, tools, and full-stack applications I&apos;ve engineered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between p-6 rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                      aria-label="View Source on GitHub"
                    >
                      <Github size={18} />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                      aria-label="Visit Live Project"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h2>

              <div className="text-sm text-zinc-400 mb-6 space-y-2">
                {project.id === "codetime" && (
                  <p>
                    A custom programming language and browser IDE in TypeScript with a lexer, Pratt parser, bytecode compiler, and stack-based VM with time-travel debugging.
                  </p>
                )}
                {project.id === "documind" && (
                  <p>
                    RAG-based multi-user document Q&A platform built with FastAPI, PostgreSQL, LangChain, FAISS, and Groq LLaMA 3.
                  </p>
                )}
                {project.id === "chip8" && (
                  <p>
                    Cycle-accurate CHIP-8 virtual machine in C++ with memory-mapped graphics, SDL2 rendering, 60Hz timer, and opcode dispatch.
                  </p>
                )}
                {project.id === "ecoprompt" && (
                  <p>
                    Browser extension for real-time AI response detection across ChatGPT, Claude, and Gemini with environmental carbon impact analytics.
                  </p>
                )}
                {project.id === "sorting-visualizer" && (
                  <p>
                    Interactive web application to visualize the execution of sorting algorithms with speed controls and dynamic array generations.
                  </p>
                )}
                {project.id === "network-diagnostic-toolkit" && (
                  <p>
                    A comprehensive Python suite for network diagnostics, packet inspection, latency monitoring, and health testing.
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 px-3 py-1.5 rounded-md border border-zinc-700/60 transition-colors"
                >
                  Live Demo <ArrowUpRight size={14} />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white px-2 py-1.5 transition-colors"
                >
                  Source Code <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
