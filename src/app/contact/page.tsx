"use client";

import React from "react";
import Link from "next/link";
import { config } from "@/data/config";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiCodeforces, SiLeetcode } from "react-icons/si";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen container mx-auto px-4 md:px-12 lg:px-24 pt-28 pb-20 text-zinc-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Contact Me
          </h1>
          <p className="text-zinc-400 text-lg">
            Have a question, an opportunity, or just want to discuss software engineering? I&apos;d love to hear from you.
          </p>
        </div>

        <Card className="bg-zinc-950/70 border-zinc-800 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl mb-8">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl text-white">Send a Direct Message</CardTitle>
            <CardDescription className="text-zinc-400">
              Click below to send an email directly to my personal inbox.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`mailto:${config.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-md"
            >
              <Mail size={18} />
              <span>Send me an Email</span>
              <ArrowUpRight size={16} />
            </a>
            <span className="text-sm text-zinc-500 font-mono">
              {config.email}
            </span>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="tel:+919253260320"
            className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 transition-colors"
          >
            <div className="p-3 rounded-lg bg-zinc-900 text-white">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Phone / WhatsApp</div>
              <div className="text-xs text-zinc-400 font-mono mt-0.5">+91-9253260320</div>
            </div>
          </a>

          <Link
            href={config.social.linkedin}
            target="_blank"
            className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 transition-colors"
          >
            <div className="p-3 rounded-lg bg-zinc-900 text-[#0077b5]">
              <SiLinkedin size={20} />
            </div>
            <div>
              <div className="text-sm font-medium text-white">LinkedIn</div>
              <div className="text-xs text-zinc-400 mt-0.5">Connect on LinkedIn</div>
            </div>
          </Link>

          <Link
            href={config.social.github}
            target="_blank"
            className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 transition-colors"
          >
            <div className="p-3 rounded-lg bg-zinc-900 text-white">
              <SiGithub size={20} />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GitHub</div>
              <div className="text-xs text-zinc-400 mt-0.5">Explore my code</div>
            </div>
          </Link>

          <Link
            href={config.social.codeforces}
            target="_blank"
            className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 transition-colors"
          >
            <div className="p-3 rounded-lg bg-zinc-900 text-yellow-500">
              <SiCodeforces size={20} />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Codeforces</div>
              <div className="text-xs text-zinc-400 mt-0.5">Aum_Mangal (Pupil)</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
