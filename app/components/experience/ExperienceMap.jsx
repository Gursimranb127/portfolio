import ExperienceItem from "./tableIcon";
import { experience } from "../experience";
import { oswald } from "../font";

export default function Timeline() {
  return (
    <section className="py-10 px-4 md:px-12 w-full flex flex-col items-center justify-center">
      <h2 className={`${oswald.className} text-4xl font-bold text-cyan-400 pb-6 `}>Experience</h2>
      <div className="space-y-10 w-full max-w-2xl mx-auto">
        {experience.map((job, index) => (
          <ExperienceItem key={index} job={job} />
        ))}
      </div>
    </section>
  );
}  