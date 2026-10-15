"use client";

import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto py-16 px-4 md:px-8">
      <SectionHeader id="projects" title="Projects" desc="Featured systems, AI pipelines, and engineering tools." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex items-center justify-center w-full"
    >
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full p-0">
          <div
            className={cn(
              "relative w-full rounded-2xl overflow-hidden mx-auto",
              "border border-border/80 bg-card/60 backdrop-blur-md shadow-lg",
              "hover:border-primary/50 hover:shadow-2xl transition-all duration-300",
              "group cursor-pointer aspect-[16/10]"
            )}
          >
            {/* Project Custom Visual Hero / Mockup */}
            <div className="absolute inset-0 w-full h-full overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-out">
              {project.src ? (
                <Image
                  className="w-full h-full object-cover"
                  src={project.src}
                  alt={project.title}
                  width={500}
                  height={320}
                />
              ) : (
                <ProjectVisual projectId={project.id} />
              )}
            </div>

            {/* Bottom Gradient Scrim & Info Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none flex flex-col justify-end p-5">
              <div className="space-y-1 text-left">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-base md:text-lg font-bold text-white tracking-tight drop-shadow-sm">
                    {project.title}
                  </div>
                  <span className="text-[11px] font-medium bg-white/15 backdrop-blur-md text-white border border-white/20 rounded-full px-2.5 py-0.5">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/70 pt-0.5">
                  <span className="text-zinc-400 text-[11px]">Click to view details</span>
                  <span className="text-primary-foreground group-hover:translate-x-1 transition-transform font-mono text-[11px]">
                    Explore &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>

        <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-3">
            <button className="px-4 py-1.5 bg-secondary text-secondary-foreground border border-border rounded-lg text-xs font-medium hover:bg-secondary/80 transition-colors">
              Close
            </button>
            {project.live && (
              <Link href={project.live} target="_blank">
                <button className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-lg border border-primary hover:opacity-90 transition-opacity">
                  Live Preview
                </button>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank">
                <button className="bg-card text-card-foreground text-xs font-medium px-4 py-1.5 rounded-lg border border-border hover:bg-secondary transition-colors">
                  Source Code
                </button>
              </Link>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </motion.div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="space-y-6 pt-2">
      {/* Modal Visual Header */}
      <div className="w-full rounded-2xl overflow-hidden border border-border/70 shadow-lg aspect-[16/8] relative">
        <ProjectVisual projectId={project.id} isModal={true} />
      </div>

      <div className="text-center space-y-1">
        <h4 className="text-xl md:text-3xl text-foreground font-bold tracking-tight">
          {project.title}
        </h4>
        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
          {project.category}
        </span>
      </div>

      {/* Tech Stack Docks */}
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6 max-w-screen overflow-hidden md:overflow-visible py-2">
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Frontend / Client
            </p>
            <FloatingDock items={project.skills.frontend} />
          </div>
        )}
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Backend / Core Engine
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>

      <div className="prose dark:prose-invert max-w-none pt-4 border-t border-border">
        {project.content}
      </div>
    </div>
  );
};

/**
 * Domain-specific high-tech visual mockups replacing raw text placeholders
 */
const ProjectVisual = ({ projectId, isModal = false }: { projectId: string; isModal?: boolean }) => {
  switch (projectId) {
    case "codetime":
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-zinc-950 p-4 flex flex-col justify-between font-mono text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-indigo-900/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-indigo-300/80 ml-2">codetime-vm.ts</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-sans border border-indigo-500/30">
              Pratt Parser • VM
            </span>
          </div>

          <div className="text-[11px] space-y-1.5 text-indigo-200/90 leading-relaxed my-auto">
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-cyan-300">vm</span> ={" "}
              <span className="text-amber-300">new</span>{" "}
              <span className="text-emerald-400">VirtualMachine</span>();
            </div>
            <div>
              <span className="text-cyan-300">vm</span>.
              <span className="text-blue-400">compile</span>(source).
              <span className="text-blue-400">execute</span>();
            </div>
            <div className="text-zinc-500 text-[10px] pt-1">
              // Bidirectional time-travel execution:
            </div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1.5 bg-indigo-950/40 p-1.5 rounded border border-indigo-900/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold">[OP_CALL]</span>{" "}
              <span className="text-zinc-400">frame: 3 | ip: 0x04F | stack: ok</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-indigo-400/70 font-sans pt-1 border-t border-indigo-950/80">
            <span>Lexer • AST • Closures</span>
            <span className="text-cyan-400">Time-Travel Debugger</span>
          </div>
        </div>
      );

    case "documind":
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-teal-950 to-slate-950 p-4 flex flex-col justify-between font-mono text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-teal-900/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-teal-300/80 ml-2">documind-rag.py</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-sans border border-teal-500/30">
              FAISS Index
            </span>
          </div>

          <div className="my-auto space-y-2">
            <div className="p-2.5 rounded-lg bg-teal-950/50 border border-teal-800/40 text-[11px]">
              <div className="text-zinc-400 text-[10px]">Dense Vector Similarity (1536-dim)</div>
              <div className="text-teal-200 truncate mt-0.5">
                Q: &ldquo;Semantic vector lookup across documents...&rdquo;
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] px-1">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                3 Chunks Injected
              </span>
              <span className="text-teal-400 font-bold bg-teal-950 px-2 py-0.5 rounded border border-teal-800/40">
                Score: 0.942
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-teal-400/70 font-sans pt-1 border-t border-teal-950/80">
            <span>FastAPI • PostgreSQL</span>
            <span className="text-emerald-400">Groq LLaMA 3</span>
          </div>
        </div>
      );

    case "chip8":
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-purple-950 to-black p-4 flex flex-col justify-between font-mono select-none">
          <div className="flex items-center justify-between pb-2 border-b border-purple-900/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-purple-300/80 ml-2">chip8_core.cpp</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-sans border border-purple-500/30">
              60Hz Hardware Timer
            </span>
          </div>

          <div className="my-auto flex items-center justify-around gap-2">
            <div className="w-28 h-16 rounded-lg bg-black border border-purple-800/60 flex items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1.5px,transparent_1.5px)] [background-size:6px_6px] opacity-40" />
              <div className="text-purple-300 text-xs font-bold tracking-widest drop-shadow animate-pulse">
                0x0200
              </div>
            </div>
            <div className="text-[10px] space-y-1 text-purple-300/90 text-left">
              <div>PC: <span className="text-amber-400">0x0200</span></div>
              <div>OPCODE: <span className="text-cyan-400">0x1200 (JUMP)</span></div>
              <div>REGS: <span className="text-emerald-400">V0..VF [OK]</span></div>
              <div>GRAPHICS: <span className="text-purple-400">SDL2 64x32</span></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-purple-400/70 font-sans pt-1 border-t border-purple-950/80">
            <span>Cycle-Accurate VM</span>
            <span className="text-purple-300">XOR Collision</span>
          </div>
        </div>
      );

    case "ecoprompt":
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-emerald-950 to-slate-950 p-4 flex flex-col justify-between font-mono text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-900/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-emerald-300/80 ml-2">tracker.js</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-sans border border-emerald-500/30">
              MutationObserver
            </span>
          </div>

          <div className="my-auto space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zinc-400">Real-time Stream Detection</span>
              <span className="text-emerald-400 font-semibold">ChatGPT • Claude</span>
            </div>
            {/* Telemetry Histogram */}
            <div className="h-12 w-full flex items-end gap-1.5 pt-1">
              <div className="h-[35%] flex-1 rounded-t bg-emerald-600/40" />
              <div className="h-[60%] flex-1 rounded-t bg-emerald-500/60" />
              <div className="h-[85%] flex-1 rounded-t bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <div className="h-[45%] flex-1 rounded-t bg-emerald-500/50" />
              <div className="h-[75%] flex-1 rounded-t bg-emerald-500/70" />
              <div className="h-[95%] flex-1 rounded-t bg-emerald-300 shadow-[0_0_8px_#6ee7b7]" />
              <div className="h-[65%] flex-1 rounded-t bg-emerald-400/80" />
            </div>
            <div className="text-[10px] text-emerald-300">
              Carbon Saved: <span className="font-bold text-white">0.048g CO₂ eq / prompt</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-emerald-400/70 font-sans pt-1 border-t border-emerald-950/80">
            <span>Chart.js • Chrome API</span>
            <span className="text-emerald-400">Zero Invasiveness</span>
          </div>
        </div>
      );

    case "sorting-visualizer":
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-violet-950 to-black p-4 flex flex-col justify-between font-mono text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-violet-900/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-violet-300/80 ml-2">quicksort.ts</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-sans border border-violet-500/30">
              O(N log N)
            </span>
          </div>

          {/* Dynamic Sorting Visualizer Bars */}
          <div className="my-auto h-16 w-full flex items-end justify-between gap-1 px-1">
            <div className="w-full h-[25%] rounded-t bg-violet-600" />
            <div className="w-full h-[60%] rounded-t bg-indigo-500" />
            <div className="w-full h-[40%] rounded-t bg-cyan-400" />
            <div className="w-full h-[95%] rounded-t bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
            <div className="w-full h-[80%] rounded-t bg-rose-400 shadow-[0_0_10px_#f43f5e]" />
            <div className="w-full h-[55%] rounded-t bg-purple-500" />
            <div className="w-full h-[70%] rounded-t bg-violet-400" />
            <div className="w-full h-[30%] rounded-t bg-indigo-400" />
            <div className="w-full h-[88%] rounded-t bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
            <div className="w-full h-[15%] rounded-t bg-violet-700" />
          </div>

          <div className="flex items-center justify-between text-[10px] text-violet-400/70 font-sans pt-1 border-t border-violet-950/80">
            <span>Dynamic Array Generation</span>
            <span className="text-cyan-400">Real-time Animation</span>
          </div>
        </div>
      );

    case "network-diagnostic-toolkit":
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-sky-950 to-black p-4 flex flex-col justify-between font-mono text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-sky-900/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-sky-300/80 ml-2">netdiag.py</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-sans border border-sky-500/30">
              Packet Engine
            </span>
          </div>

          <div className="my-auto space-y-1 text-[10px] text-sky-200/90 leading-relaxed">
            <div className="text-zinc-400">$ netdiag --trace 8.8.8.8 --count 4</div>
            <div className="flex items-center justify-between">
              <span>Hop 1: 192.168.1.1 (Gateway)</span>
              <span className="text-emerald-400">1.2ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Hop 2: 10.0.4.254 (Backbone)</span>
              <span className="text-emerald-400">4.8ms</span>
            </div>
            <div className="flex items-center justify-between text-cyan-300 font-bold bg-sky-950/60 p-1 rounded border border-sky-900/40">
              <span>RTT: 12.4ms | Loss: 0.0%</span>
              <span className="text-emerald-400">HEALTHY</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-sky-400/70 font-sans pt-1 border-t border-sky-950/80">
            <span>Latency & DNS Diagnostics</span>
            <span className="text-sky-300">Packet Analysis</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4 flex items-center justify-center">
          <div className="text-xl font-bold text-zinc-500/50 uppercase tracking-widest">
            {projectId}
          </div>
        </div>
      );
  }
};
