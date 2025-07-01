"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    img: "/trauma.jpg",
    title: "Trauma Recovery",
    desc: "Gentle, evidence-based support to process and heal at your own pace.",
  },
  {
    img: "/relationship.jpg",
    title: "Relationship Counseling",
    desc: "Improve communication and reconnect in a guided, supportive space.",
  },
  {
    img: "/anxiety.jpg",
    title: "Anxiety & Stress",
    desc: "Tools to manage anxiety and build emotional resilience day by day.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-alabaster py-24 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-serif text-black_olive mb-16 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How I Can Help
        </motion.h2>

        <div className="grid gap-y-24 gap-x-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <ImageCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageCard({ service }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-4"
      variants={imageVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="mb-8 w-80 h-80 bg-moss_green/10 rounded-full border border-moss_green/20 shadow-md overflow-hidden flex items-center justify-center"
      >
        <Image
          src={service.img}
          alt={service.title}
          width={320}
          height={320}
          className="object-cover w-full h-full"
        />
      </motion.div>
      <h3 className="text-2xl font-semibold text-black_olive mb-4 tracking-wide font-sans">
        {service.title}
      </h3>
      <p className="text-ash_gray text-base leading-relaxed max-w-xs tracking-wide">
        {service.desc}
      </p>
    </motion.div>
  );
}
