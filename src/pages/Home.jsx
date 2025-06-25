import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 text-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div
        className="bg-white/70 backdrop-blur-lg px-8 py-10 rounded-xl shadow-2xl space-y-6 flex flex-col items-center"
        data-aos="zoom-in"
      >
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md"
          data-aos="fade-down"
        >
          Kanishk Singh Chauhan
        </h1>

        <p
          className="text-lg md:text-xl text-gray-800 drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Information Technology Student | Aspiring Data Analyst
        </p>

        <img
          src="/kani.jpg"
          alt="Hero"
          className="w-64 md:w-80 rounded-xl shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="400"
        />

        <a href="/resume.pdf" target="_blank" data-aos="fade-up" data-aos-delay="600">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
            View My Resume
          </button>
        </a>
      </div>
    </main>
  );
}
