'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function ProjectClientView({ project }) {
  const router = useRouter();

  const handleClick = (type) => {
    if (type === 'project' && project?.projectLink) {
      router.push(project.projectLink);
    } else if (type === 'source' && project?.sourceLink) {
      router.push(project.sourceLink);
    }
  };

  return (
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/your-background.jpg')" }}
      >
        <div className="relative z-10 max-w-4xl px-6 mx-6 md:mx-12 py-24 text-white">
          <Link href="/#projects" className="inline-flex items-center text-sm md:text-lg mb-80 hover:underline">
            ← Back to projects
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.name}</h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-4">{project.details}</p>
          <p className="text-sm text-gray-300 mb-6">{project.type}</p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => handleClick('project')}
              className="relative inline-block px-5 py-2 border border-white text-white font-medium rounded overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                View Project
              </span>
              <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </button>

            <button
              onClick={() => handleClick('source')}
              className="relative inline-block px-5 py-2 border border-white text-white font-medium rounded overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                View Source Code
              </span>
              <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>
      </div>
  );
}
