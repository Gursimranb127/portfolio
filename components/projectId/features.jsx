"use client";
import { useState, useEffect } from "react";

export default function FeaturesSection({ project }) {
  if (!project?.features || project.features.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const features = project.features;

  // Auto-loop every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % features.length);
    }, 10000); // 10s
    return () => clearInterval(interval);
  }, [features.length]);

  const nextFeature = () => setCurrentIndex(prev => (prev + 1) % features.length);
  const currentFeature = features[currentIndex];

  return (
    <section className="w-full h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative w-full h-full max-w-7xl rounded-2xl overflow-hidden shadow-lg">
        {/* Image */}
        {currentFeature.image ? (
          <img
            key={currentIndex}
            src={currentFeature.image}
            alt={currentFeature.text}
            className="object-cover w-full h-full transition-transform duration-1000 ease-in-out transform hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {/* Overlay text with blur */}
        <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-white md:w-3/4">
            <h2 className="text-cyan-400 text-2xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-300 text-lg">{currentFeature.text}</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 md:w-1/4 justify-center">
            {/* Dots */}
            <div className="flex gap-2">
              {features.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-cyan-400 animate-pulse" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={nextFeature}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-md transition-colors"
            >
              Next Feature
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
