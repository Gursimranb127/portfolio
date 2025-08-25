'use client';

import Link from 'next/link';
import { useState,useEffect } from 'react';

export default function TopNav() {

const [onTop, setOnTop]=useState(true)

useEffect(()=>{
  const handleScroll=()=>{
    setOnTop(window.scrollY===0)
  }
  window.addEventListener("scroll", handleScroll)
  return()=>window.removeEventListener("scroll", handleScroll)
},[])

  return (
    <div className={`fixed top-2 left-0 z-50 transition-colors duration-400 w-full h-14 ${onTop? 'bg-null':'border-gray-800 bg-black/20 backdrop-blur-sm border  rounded-4xl py-6 px-10 text-white'}  flex items-center justify-end px-10 shadow-md`}>
      <ul className="flex gap-4 text-neutral-300 text-base">
        <li className="border border-neutral-700 px-3 py-1 rounded-lg hover:text-cyan-400 transition-colors duration-200 shadow">
          <Link href="/#about">About</Link>
        </li>
        <li className="border border-neutral-700 px-3 py-1 rounded-lg hover:text-cyan-400 transition-colors duration-200 shadow">
          <Link href="/#projects">Projects</Link>
        </li>
        <li className="border border-neutral-700 px-3 py-1 rounded-lg hover:text-green-400 transition-colors duration-200 shadow">
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
