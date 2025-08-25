'use client';

import { useState } from "react";
import Icon from "./projectIcon"
import {projects} from "../experience"
import { motion, AnimatePresence, wrap } from "framer-motion";

export default function Table(){

    const [currentView, setCurrentView]= useState(0)
    const total= projects.length;
    const [direction, setDirection]=useState(0)
    const [selectedItem, setSelectedItem] = useState(projects[0])
    function setSlide(newDirection) {
        const nextItem = wrap(0, total, selectedItem + newDirection)
        setSelectedItem(nextItem)
        setDirection(newDirection)
    }

    const prev=()=>{
        setSlide(-1)
        setCurrentView((i)=>(i===0 ? total-1 : i-1));
    }

    const next=()=>{
        setSlide(1)
        setCurrentView((i)=>(i===total-1 ? 0: i+1));
    }

    const getProject=(index)=>projects[(index+total)%total];
    
    return(
            <div className="relative max-w-[100vw] md:max-w-7xl  w-full mx-auto md:overflow-visible overflow-hidden">
                <button
                    onClick={prev}
                    className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 md:p-4 md:rounded-[50%] rounded-3xl hover:scale-110 shadow hover:shadow-cyan-400 tansition-all duration-200 z-20"
                    aria-label="Previous"
                >
                    &#8592;
                </button>

                <button
                    onClick={next}
                    className="absolute right-8 md:right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 md:p-4 hover:scale-110 md:rounded-[50%] shadow hover:shadow-cyan-400 tansition-all duration-200 rounded-3xl z-20"
                    aria-label="Next"
                >
                    &#8594;
                </button>
                <div className="flex justify-center items-center gap-4 select-none">
                    <AnimatePresence custom={direction} initial={false} mode='popLayout' >
                        {[currentView-1, currentView, currentView+1].map((index, pos)=>{
                            const project=getProject(index);
                            const isCenter=pos===1
                            
                            return(
                                <motion.div
                                    key={index}
                                    initial={{x:direction*50, scale:0.8,opacity:0.5, filter:"blur(4px)"}}
                                    animate={{
                                        scale: isCenter ? 1 : 0.8,
                                        filter: isCenter ? "blur(0px)" : "blur(4px)",
                                        opacity:1,
                                        x:0,
                                        transition:{
                                            delay:0.2,    
                                            visualDuration:0.3       
                                        }}}
                                       exit={{x:direction*(-50), scale:0.8,opacity:0.8, filter:"blur(4px)"}}
                                        className={`${
                                            isCenter ? "z-10" : "z-0"
                                            } transition-all`}
                                            style={{ width: isCenter ? 320 : 250 }}
                                >
                                    <Icon  info={project}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>
    )
} 