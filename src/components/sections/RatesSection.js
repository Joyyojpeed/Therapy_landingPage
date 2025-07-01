"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { DollarSign, FileText, HeartPulse } from "lucide-react";

export default function RatesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="bg-alabaster py-0 px-3" id="rates">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={controls}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-black_olive/90 rounded-full mb-6"
          >
            <DollarSign className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-4xl font-serif text-black_olive mb-4">
            Session Fees & Insurance
          </h2>
          <p className="text-xl text-ash_gray max-w-2xl mx-auto">
            Transparent pricing and flexible payment options for your care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rates Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl p-8 shadow-lg border border-ash_gray/20 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-moss_green/10 rounded-lg flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-moss_green" />
              </div>
              <h3 className="text-2xl font-serif text-black_olive">Session Rates</h3>
            </div>
            <ul className="space-y-4 text-lg text-moss_green">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-moss_green flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Individual Therapy:</span> $200/session
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-moss_green flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Couples Therapy:</span> $240/session
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-moss_green flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Initial Consultation:</span> Free 15-min call
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Insurance Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-ash_gray/20 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-moss_green/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-moss_green" />
              </div>
              <h3 className="text-2xl font-serif text-black_olive">Insurance & Payment</h3>
            </div>
            <ul className="space-y-4 text-lg text-moss_green">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-moss_green flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Out-of-Network:</span> Superbills provided for insurance reimbursement
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-moss_green flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Payment Methods:</span> Credit cards, HSA/FSA accepted
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-moss_green flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Sliding Scale:</span> Limited spots available based on need
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-ash_gray max-w-3xl mx-auto"
        >
          <p className="text-lg">
            Sessions typically last 50 minutes. Longer sessions available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
