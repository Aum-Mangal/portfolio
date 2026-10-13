"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import {
  TECH_STACK_SKILLS,
  SKILL_CATEGORIES,
  Skill,
  SkillCategory,
} from "@/data/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("All");
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const filteredSkills =
    selectedCategory === "All"
      ? TECH_STACK_SKILLS
      : TECH_STACK_SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen py-24 md:py-32 flex flex-col items-center justify-center relative z-20 pointer-events-auto"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto flex flex-col items-center">
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="Explore my core technologies, frameworks, and engineering competencies."
          className="mb-8 md:mb-12 mt-0 text-center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl">
          {SKILL_CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? TECH_STACK_SKILLS.length
                : TECH_STACK_SKILLS.filter((s) => s.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 border",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-secondary/40 text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded-full",
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Keyboard-Key Buttons Grid */}
        <TooltipProvider delayDuration={120}>
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 w-full"
          >
            <AnimatePresence>
              {filteredSkills.map((skill, index) => (
                <SkillKeyButton
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isActive={activeSkill?.name === skill.name}
                  onSelect={() => setActiveSkill(skill)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </TooltipProvider>

        {/* Active Focus Card for Mobile / Touch Accessibility */}
        <div className="mt-8 w-full max-w-xl md:hidden">
          {activeSkill ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl border border-border bg-card/90 backdrop-blur-md shadow-md text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <img
                  src={skillIcon(activeSkill)}
                  alt={activeSkill.label}
                  className="w-5 h-5 object-contain"
                />
                <h4 className="font-semibold text-sm">{activeSkill.label}</h4>
                <Badge variant="secondary" className="text-[10px] py-0 px-2">
                  {activeSkill.category}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {activeSkill.shortDescription}
              </p>
            </motion.div>
          ) : (
            <p className="text-center text-xs text-muted-foreground/70">
              Tap any skill button to view description
            </p>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

interface SkillKeyButtonProps {
  skill: Skill;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}

const SkillKeyButton: React.FC<SkillKeyButtonProps> = ({
  skill,
  index,
  isActive,
  onSelect,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
      className="w-full"
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={onSelect}
            className={cn(
              "group relative w-full h-20 md:h-22 rounded-xl p-3 flex flex-col items-center justify-between",
              "border border-border/80 bg-card/60 backdrop-blur-md",
              "transition-all duration-300 ease-out",
              "hover:border-primary/50 hover:bg-card/95 hover:shadow-lg hover:-translate-y-1",
              "active:translate-y-0.5 active:shadow-sm",
              // Keyboard Key aesthetic
              "shadow-[0_4px_0_0_rgba(0,0,0,0.06)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.05)]",
              isActive && "border-primary bg-primary/10 shadow-md ring-1 ring-primary/40"
            )}
            style={{
              // Subtle hover glow effect on top border
              borderColor: undefined,
            }}
          >
            {/* Top Keycap Highlight Bar */}
            <div
              className="absolute top-0 inset-x-3 h-[2px] rounded-full opacity-30 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: skill.color }}
            />

            {/* Icon */}
            <div className="w-8 h-8 flex items-center justify-center mt-1">
              <img
                src={skillIcon(skill)}
                alt={skill.label}
                className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Title / Label */}
            <span className="text-[11px] md:text-xs font-medium text-foreground/90 group-hover:text-foreground text-center truncate max-w-full px-1">
              {skill.label}
            </span>
          </button>
        </TooltipTrigger>

        {/* Hover Description Tooltip */}
        <TooltipContent
          side="top"
          align="center"
          sideOffset={8}
          className="max-w-xs p-3.5 bg-popover/95 backdrop-blur-xl border border-border shadow-xl rounded-xl z-50 text-left"
        >
          <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-border/60">
            <img
              src={skillIcon(skill)}
              alt=""
              className="w-4 h-4 object-contain"
            />
            <span className="font-semibold text-xs text-foreground">
              {skill.label}
            </span>
            <Badge
              variant="outline"
              className="ml-auto text-[10px] font-normal py-0 px-1.5 border-muted-foreground/30 text-muted-foreground"
            >
              {skill.category}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {skill.shortDescription}
          </p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};

function skillIcon(skill: Skill): string {
  return skill.icon;
}

export default SkillsSection;
