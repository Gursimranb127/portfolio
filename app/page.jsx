"use client";

import {robotoMono} from "./ui/font"
import HeroSection from "./ui/HeroSection"
import AboutSection from "./ui/AboutSection"
import ProjectSection from "./ui/projects/ProjectSection"
import ContactSection from "./ui/contact/contactSection"

export default function home(){
  return(
    <>
    <main className={`${robotoMono.className} 	text-neutral-200`}>
      <HeroSection />
      <AboutSection />
      <ProjectSection/>
      <ContactSection/>
    </main>
    </>
  )
}