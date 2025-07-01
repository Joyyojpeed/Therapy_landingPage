"use client";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const faqItems = [
  {
    id: "q1",
    question: "What can I expect from therapy?",
    answer:
      "Each session is tailored to your needs. You will experience a safe, empathetic space for self-exploration, healing, and growth.",
  },
  {
    id: "q2",
    question: "Do you offer virtual sessions?",
    answer:
      "Yes, virtual sessions are conducted via Zoom and offer the same care and confidentiality as in-person visits.",
  },
  {
    id: "q3",
    question: "What's your cancellation policy?",
    answer:
      "I ask for 24-hour notice to cancel or reschedule. Missed appointments without notice will be subject to the full session fee.",
  },
];

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState(null);
  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="faq"
      className="w-full bg-alabaster py-20 px-8"
      initial="hidden"
      animate={controls}
      variants={fadeUp}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-black_olive mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-ash_gray">
            Common questions about therapy with Dr. Blake
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-full flex justify-between items-center p-6 text-left rounded-xl transition-all duration-300 ${
                  activeItem === item.id
                    ? "bg-moss_green/10 border border-moss_green/20"
                    : "bg-white border border-ash_gray/20 hover:bg-moss_green/5"
                }`}
              >
                <h3 className="text-xl font-medium text-black_olive pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{
                    rotate: activeItem === item.id ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`h-6 w-6 transition-colors ${
                      activeItem === item.id
                        ? "text-moss_green"
                        : "text-ash_gray"
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-lg text-ash_gray bg-white rounded-b-xl">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-ash_gray"
        >
          <p>
            Have more questions?{" "}
            <a
              href="#contact"
              className="text-moss_green underline hover:text-black_olive"
            >
              Contact Dr. Blake
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
