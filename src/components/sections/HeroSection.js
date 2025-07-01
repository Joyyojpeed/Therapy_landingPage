"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden text-white z-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-[1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover will-change-transform transform-gpu"
        >
          <source src="/Background.mp4" type="video/mp4" />
          <img src="/fallback.jpg" alt="Background" className="w-full h-full object-cover" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[2]" />

      {/* Hero Content */}
      <div className="relative z-[3] flex h-full flex-col items-center justify-center px-6 text-center pt-16 md:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif mb-4"
        >
          Compassionate Therapy for a Calmer You
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl mb-8"
        >
          Helping you navigate anxiety, trauma, and healing with warmth and expertise.
        </motion.h2>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block rounded-full bg-moss_green px-8 py-3 text-lg font-semibold shadow-lg transition-all hover:bg-black_olive"
        >
          Book a Free Consult
        </motion.a>
      </div>
    </section>
  );
}
