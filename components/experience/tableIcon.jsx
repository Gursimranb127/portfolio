import {motion, useInView} from "framer-motion";
import { useRef } from "react";
import { FaRegCalendarAlt, FaCalendarCheck } from "react-icons/fa";
import { oswald } from "../font";

export default function ExperienceItem({job}){

    const ref=useRef(null);
    const isInView=useInView(ref,{amount:0.75, once:false})

    return (
        <motion.div
            ref={ref}
            initial={{opacity:0, y:50}}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{duration:0.4}}
            className="relative bg-gray-950 py-6 px-16 flex flex-col justify-center items-center rounded-xl"
        >
            <div className="absolute top-4 left-6 md:left-8 w-4 h-[80%] gap-2 flex flex-col justify-center items-center rounded-xl">
                <div className="text-3xl md:text-4xl text-cyan-500">{job.completed === false ? <FaRegCalendarAlt /> : <FaCalendarCheck />}</div>
                <div className="bg-cyan-600 w-0.5 flex-1 rounded-xl md:w-0.3"></div>
            </div>
            <p className="text-xs md:text-sm text-green-400 font-medium pb-2">{job.date}</p>
            <h2 className={`${oswald.className} font-semibold pb-2 text-cyan-400 text-xl md:text-2xl`}>{job.position}</h2>
            <h3>{job.company}</h3>
            <ul className="list-disc ml-4 text-sm text-gray-400 mt-2 space-y-1 pb-2">
                {job.details.map((t,i)=><li key={i}>{t}</li>)}
            </ul>
        </motion.div>
    )
}