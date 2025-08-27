"use client"; 

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {

  const githubUrl = process.env.GITHUB_URL;
  const linkedinUrl = process.env.LINKEDIN_URL;

  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = {
      email: (form.elements.namedItem("email") ).value,
      message: (form.elements.namedItem("message")).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        form.reset();
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      setStatus("Error sending message ❌");
    }
  }

  return (
    <section id="contact" className="h-screen w-full text-gray-400 flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left side - Socials */}
        <div className="flex flex-col items-center md:items-center justify-center gap-8 md:bg-black rounded-2xl">
          <h2 className="text-cyan-400 text-4xl md:text-4xl font-bold">Connect with me</h2>
          <div className="flex gap-8">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={40} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-shadow"
          >
            <h3 className="text-cyan-400 text-xl font-semibold mb-4 text-center">
              Send me an Email
            </h3>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full p-3 rounded-md bg-black/60 border border-gray-700 text-gray-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors mb-4"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              className="w-full p-3 rounded-md bg-black/60 border border-gray-700 text-gray-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors mb-4"
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-md transition-colors"
            >
              Submit
            </button>
            {status && (
              <p className="mt-3 text-center text-sm text-gray-300">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

