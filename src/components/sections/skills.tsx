"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import {
  TECH_STACK_SKILLS,
  SKILLS,
  SkillNames,
  Skill,
} from "@/data/constants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(SKILLS[SkillNames.PYTHON]);

  useEffect(() => {
    const handleSkillActive = (e: any) => {
      if (e.detail) {
        setActiveSkill(e.detail as Skill);
      }
    };
    window.addEventListener("portfolio-skill-active", handleSkillActive);
    return () => {
      window.removeEventListener("portfolio-skill-active", handleSkillActive);
    };
  }, []);

  const handleSelectSkill = (skill: Skill) => {
    setActiveSkill(skill);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("portfolio-skill-select", { detail: skill })
      );
    }
  };

  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen md:min-h-[140dvh] flex flex-col justify-between items-center relative pointer-events-none pb-8 pt-16"
    >
      {/* Section Header at Top */}
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto text-center pointer-events-auto">
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="(hint: hover over 3D keyboard keys or press keys on your keyboard)"
          className="mb-2 mt-0"
        />
      </div>

      {/* Center is left completely open for the 3D Spline keyboard */}
      <div className="w-full flex-1 flex items-center justify-center pointer-events-none" />

      {/* Bottom Floating Skill Display & Keycap Ribbon */}
      <div className="w-full max-w-4xl px-4 mx-auto flex flex-col items-center gap-3 pointer-events-auto z-20">
        
        {/* Dynamic Live HUD Card */}
        <AnimatePresence mode="wait">
          {activeSkill && (
            <motion.div
              key={activeSkill.name}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "w-full max-w-2xl p-4 md:p-5 rounded-2xl",
                "bg-card/85 dark:bg-card/75 backdrop-blur-xl",
                "border border-border/80 shadow-2xl",
                "relative overflow-hidden"
              )}
            >
              {/* Brand Color Top Accent Glow */}
              <div
                className="absolute top-0 inset-x-0 h-1 transition-colors duration-300"
                style={{ backgroundColor: activeSkill.color }}
              />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-border/60 shadow-sm"
                  style={{ backgroundColor: `${activeSkill.color}15` }}
                >
                  <img
                    src={activeSkill.icon}
                    alt={activeSkill.label}
                    className="w-8 h-8 object-contain drop-shadow"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-bold text-base md:text-lg text-foreground tracking-tight">
                      {activeSkill.label}
                    </h3>
                    <Badge variant="outline" className="text-xs font-normal border-primary/30">
                      {activeSkill.category}
                    </Badge>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {activeSkill.shortDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Keycap Ribbon / Skills Selector */}
        <div className="w-full max-w-4xl flex items-center justify-center gap-1.5 md:gap-2 flex-wrap pt-2">
          {TECH_STACK_SKILLS.map((skill) => {
            const isSelected = activeSkill?.name === skill.name;
            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => handleSelectSkill(skill)}
                onMouseEnter={() => handleSelectSkill(skill)}
                title={skill.label}
                className={cn(
                  "px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5",
                  "border bg-card/70 backdrop-blur-md shadow-sm",
                  "hover:-translate-y-0.5 active:translate-y-0.5",
                  isSelected
                    ? "border-primary bg-primary/15 text-foreground shadow-md ring-1 ring-primary/40"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                <img
                  src={skill.icon}
                  alt=""
                  className="w-3.5 h-3.5 object-contain"
                />
                <span className="hidden sm:inline text-xs">{skill.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
