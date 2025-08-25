import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { SiJquery } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { LiaNode } from "react-icons/lia";
import Icon from "./icon"

var logos=[
    {name:"Html", icon:<FaHtml5 className="text-orange-600"/>},
    {name:"Css", icon:<FaCss3Alt/>},
    {name:"Javascript", icon:<IoLogoJavascript className="text-amber-300"/>},
    {name:"React", icon:<FaReact/>},
    {name:"Git", icon:<FaGitAlt className="text-orange-600"/>},
    {name:"Next", icon:<RiNextjsFill className="text-gray-300"/>},
    {name:"Jquery", icon:<SiJquery className="text-blue-700"/>},
    {name:"Github", icon:<FaGithub className="text-gray-300"/>},
    {name:"Node", icon:<LiaNode className="text-green-600"/>},
    {name:"Responsive", icon:<DiResponsive className="text-gray-200"/>},
    {name:"Tailwind", icon:<RiTailwindCssFill />}
]

function Exp({data}){
    
    return(
        <div className="grid md:grid-cols-5 grid-cols-3 md:gap-10 gap-6">
            {data.map((info, index)=>{
                return <Icon key={index} name={info.name} icon={info.icon}/>
            })}
        </div>
    )
} 

export default function TableOfIcons(){

    return(
        <div className="relative flex justify-center items-center pt-10 p-4 mt-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-cyan-500 md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-1/2">
             <div className="absolute -top-4 bg-cyan-600 text-white md:text-lg text-sm px-6 py-2 rounded-md shadow-md">
                    Tech Stack & Skills
             </div>
             <div className="mt-6">
                <Exp data={logos} />
                </div>
        </div>
       
    )
}