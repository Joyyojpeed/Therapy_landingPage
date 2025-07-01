"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function QuoteSection({ quote, description }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="text-center py-20 px-6 bg-black_olive text-black_olive">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={fadeIn}
      >
        <blockquote className="text-3xl md:text-4xl font-serif text-white mb-6">
          “{quote}”
        </blockquote>
        <p className="text-lg text-ash_gray">{description}</p>
      </motion.div>
    </section>
  );
}
