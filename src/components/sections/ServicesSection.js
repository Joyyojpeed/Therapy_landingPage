"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    img: "/trauma.jpg",
    title: "Trauma Recovery",
    desc: "Healing from trauma requires patience and safety. Together, we'll create a space where you can process painful experiences at your own pace, using evidence-based techniques that honor your resilience and capacity for growth.",
  },
  {
    img: "/relationship.jpg",
    title: "Relationship Counseling",
    desc: "Healthy relationships begin with understanding. In our sessions, we'll uncover patterns that keep you stuck and develop new ways of connecting that bring fulfillment and mutual respect to your important relationships.",
  },
  {
    img: "/anxiety.jpg",
    title: "Anxiety & Stress",
    desc: "Anxiety doesn't have to control your life. We'll work together to understand your triggers, develop practical coping tools, and cultivate inner calm that lasts beyond our sessions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-alabaster py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-black_olive mb-12 md:mb-16 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How I Can Help
        </motion.h2>

        <div className="grid gap-y-16 md:gap-y-24 gap-x-8 md:gap-x-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
      className="flex flex-col items-center text-center px-2 md:px-4"
      variants={imageVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="mb-6 md:mb-8 w-64 h-64 md:w-80 md:h-80 bg-moss_green/10 rounded-full border border-moss_green/20 shadow-md overflow-hidden flex items-center justify-center relative"
      >
        <Image
          src={service.img}
          alt={service.title}
          width={320}
          height={320}
          className="object-cover w-[100%] h-[100%]"
          style={{ objectPosition: 'center' }}
        />
      </motion.div>
      <h3 className="text-xl md:text-2xl font-semibold text-black_olive mb-3 md:mb-4 tracking-wide font-sans">
        {service.title}
      </h3>
      <p className="text-ash_gray text-sm md:text-base leading-relaxed max-w-xs tracking-wide">
        {service.desc}
      </p>
    </motion.div>
  );
}