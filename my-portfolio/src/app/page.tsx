"use client"

import "./page.css"
import { Nav } from "@/components/Nav/nav";
import { Introduciton } from "@/components/Introduction/Introduction";
import { AboutMe } from "@/components/AboutMe/aboutMe";
import { Skills } from "@/components/Skills/skills";
import { Project } from "@/components/Projects/projects";
import { Contact } from "@/components/Contact/contact";
import RevealSection from "@/components/RevealSection/revealSection";

import "@/components/RevealSection/revealSection.css";

export default function Home() {
  return (
    <div className="">
      <header>
        <Nav />
      </header>

      <main>
        <Introduciton />
        <RevealSection>
          <AboutMe />
        </RevealSection>
        <RevealSection>
          <Skills />
        </RevealSection>
        <RevealSection>
          <Project />
        </RevealSection>
        <RevealSection>
          <Contact />
        </RevealSection>
      </main>
    </div>
  );
}
