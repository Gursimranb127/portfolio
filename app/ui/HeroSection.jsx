"use client";

import { Typewriter } from "react-simple-typewriter";
import {  oswald } from "./font";
import {motion}  from "framer-motion"

export default function HeroSection() {
  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 w-full h-screen md:items-center justify-center px-4">
      <div className="flex justify-center md:justify-center w-full">
         <div className="md:min-h-[220px] flex items-center">
                <h1 className={`${oswald.className} text-center	text-cyan-400 md:text-left text-3xl md:text-5xl font-bold sm:pt-30 max-w-xl`}>
                    I am Gursimran Singh,<br /> " I'm {''}
                    <span className="font-semibold">
                        <Typewriter
                            words={[
                                   'a Fullstack Developer',
                                    'Experienced in React & Next.js',
                                    'a Firebase & Backend Specialist',
                                    'a UI/UX Focused Engineer'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={75}
                                deleteSpeed={50}
                               delaySpeed={2000}
                            />
                    </span>"
                </h1>
           </div>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", duration: 2.5, bounce: 0.2 },
            }} className="flex justify-center items-center"
         >
          <img
            src="/your-image.png"
            alt="Image"
            className="w-80 h-80 rounded-[100%] bg-black shadow-lg/50 shadow-indigo-300"
          />
        </motion.div>
    </section>
  );
}
