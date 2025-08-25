import { oswald } from "../font";

export default function Icon({ name, icon }) {
  return (
    <div className="w-28 h-28 bg-gray-900 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-2 shadow-md transition-all hover:shadow-cyan-400/50 hover:scale-105 duration-200">
      <div className="text-5xl text-cyan-400">
        {icon}
      </div>
      <h3 className={`${oswald.className} md:text-md text-sm text-gray-100 tracking-wide`}>
        {name}
      </h3>
    </div>
  );
}

