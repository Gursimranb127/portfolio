"use client";

import {robotoMono} from "../components/font"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/projects/ProjectSection"
import ContactSection from "../components/contact/contactSection"

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
