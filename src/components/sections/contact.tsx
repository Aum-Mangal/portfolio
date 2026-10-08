"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-dvh max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contact</CardTitle>
            <CardDescription>
              Feel free to reach out via email!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <a
              target="_blank"
              href={`mailto:${config.email}`}
              className="px-6 py-3 bg-zinc-800 text-white dark:bg-white dark:text-black font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              send me mssg
            </a>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
