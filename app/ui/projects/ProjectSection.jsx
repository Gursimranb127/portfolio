import Table from "./projectTable";
import { oswald } from "../font";

export default function ProjectSection(){
    
    return(
        <section className="flex flex-col justify-center items-center h-lvh gap-10" id="projects">
            <div className="flex justify-center items-center gap-4">
                <div className="w-30 md:w-70 h-2 flex-grow border-t-2 border-cyan-400 mb-4"></div>
                <h2 className={`${oswald.className} text-4xl font-bold text-cyan-400 pb-6 `}>PROJECTS</h2>
                <div className="w-30 md:w-70 h-2 flex-grow border-t-2 border-cyan-400 mb-4"></div>
            </div>
            <div >
                <Table/>
            </div>
        </section>
    )
}