"use client";

import Link from "next/link";
import { oswald } from "../font";
import { useRouter } from "next/navigation";

export default function Icon({ info }) {
  const router = useRouter();

  const handleClick = () => {
    if (info?.liveLink) {
      router.push(info.liveLink);
    }
  };

    return(
        <div className="md:w-100 md:h-100 h-90 w-90  bg-gray-950 border border-blue-500 rounded-xl flex flex-col items-center pt-3 px-4 pb-2 gap-2">
            <div className="bg-black w-full min-h-[50%] rounded-xl "></div>
            <div className="flex flex-col items-center justify-center md:min-h-[36%] min-h-[33%] pb-2 gap-2">
                <h2 className={`${oswald.className} md:text-2xl text-xl tracking-wider text-cyan-400 font-semibold`}>{info.name}</h2>
                <p className="md:text-md text-xs  max-w-80 tracking-tighter">{info.details}</p>
            </div>
            <div className="w-full  flex items-baseline justify-center gap-4">
                <button className=" w-22 h-8 rounded-md border border-cyan-800 shadow-xs hover:border-green-400 hover:text-green-400 text-cyan-600 text-sm p-1 tracking-tighter md:text-md" onClick={handleClick}>Live Demo</button>
                <Link
                    href={`/project/${info.previewId}`}
                    className="w-22 h-8 rounded-md border border-cyan-800 shadow-xs hover:border-green-400 hover:text-green-400 text-cyan-600 text-sm p-1 tracking-tighter md:text-md flex items-center justify-center">
                     Preview
                </Link>
            </div>
        </div>
    )
}