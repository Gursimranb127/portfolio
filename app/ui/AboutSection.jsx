import { oswald } from "./font";
import TableOfIcons from "./techStack/IconMap";
import Timeline from "./experience/ExperienceMap";
import {motion} from "framer-motion";

export default function AboutSection() {
    return (
      <section id="about" className="grid grid-col items-center justify-center px-4 mt-16 gap-12 pt-15">
        <div id="details" className="bg-gray-950 py-6 px-16 md:px-70 flex flex-col justify-center items-center rounded-xl md:max-w-350 max-w-150">
          <h2 className={`${oswald.className} text-4xl font-bold text-cyan-400 pb-6 `}>
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            I'm a seasoned full-stack developer with a strong foundation in modern web technologies, including React.js, Next.js, and Firebase.
            With a focus on clean architecture and responsive design, I build robust, scalable, and user-friendly web applications.
            My experience spans from crafting intuitive frontends to developing efficient backend solutions, helping businesses bring their ideas to life through elegant digital experiences.
          </p>
        </div>
        <motion.div
         initial={{opacity:0, y:50}}
         whileInView={{opacity:1,y:1}}
         viewport={{once:false, amount:0.15}}
         transition={{duration:0.4}}
         id="icons"> <TableOfIcons/></motion.div>
        <div id="experience"><Timeline/></div>
      </section>
    );
  }