"use client";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AvailabilitySection() {
  const acceptingClients = true;

  return (
    <section className="w-full bg-alabaster py-12 px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {acceptingClients ? (
          <div className="inline-flex items-center gap-2 text-moss_green font-semibold">
            <CheckCircle className="w-6 h-6" />
            Currently accepting new clients
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 text-red-500 font-semibold">
            <XCircle className="w-6 h-6" />
            Not accepting new clients at the moment
          </div>
        )}
      </motion.div>
    </section>
  );
}
