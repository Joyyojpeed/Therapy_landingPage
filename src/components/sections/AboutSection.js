"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 md:py-24 px-6 md:px-8 rounded-3xl shadow-lg border-t border-b border-ash_gray/30 relative z-10"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left side - Text content */}
          <div className="relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              className="mb-6 md:mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-black_olive tracking-wide leading-tight">
                Meet Dr. Serena Blake
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.15 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="text-base md:text-xl text-moss_green leading-relaxed tracking-wide">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
                with eight years of experience and over 500 client sessions. She blends
                evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with
                compassionate, personalized care to help you overcome anxiety, strengthen
                relationships, and heal from trauma.
              </p>
              <p className="text-base md:text-xl text-moss_green leading-relaxed tracking-wide">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake
                is committed to creating a safe, supportive space for you to thrive.
              </p>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.1 },
              },
            }}
            initial="hidden"
            animate={controls}
            className="md:absolute md:right-0 md:top-0 md:h-full md:w-[45%] order-first md:order-last relative z-10"
          >
            <Image
              src="/Serena.jpg"
              alt="Dr. Serena Blake"
              width={600}
              height={800}
              className="rounded-3xl object-cover h-full w-full shadow-xl border-2 border-ash_gray/20"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}