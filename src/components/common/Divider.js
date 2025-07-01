// Alternative VineDivider.js
"use client";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="w-full  py-8 bg-alabaster"> {/* Reduced from py-10 to py-8 */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <svg 
          width="100%" 
          height="40" 
          viewBox="0 0 800 40" 
          fill="none" 
          className="text-moss_green"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,20 C100,40 200,0 300,20 C400,40 500,0 600,20 C700,40 800,0 800,20" 
            stroke="currentColor" 
            strokeWidth="1.5"
          />
          {/* Vine leaves */}
          <path d="M50,15 Q60,5 70,15 Q80,25 70,30 Q60,35 50,25 Q40,15 50,15" fill="currentColor" opacity="0.7"/>
          <path d="M200,25 Q210,15 220,25 Q230,35 220,40 Q210,45 200,35 Q190,25 200,25" fill="currentColor" opacity="0.7"/>
          <path d="M350,15 Q360,5 370,15 Q380,25 370,30 Q360,35 350,25 Q340,15 350,15" fill="currentColor" opacity="0.7"/>
          <path d="M500,25 Q510,15 520,25 Q530,35 520,40 Q510,45 500,35 Q490,25 500,25" fill="currentColor" opacity="0.7"/>
          <path d="M650,15 Q660,5 670,15 Q680,25 670,30 Q660,35 650,25 Q640,15 650,15" fill="currentColor" opacity="0.7"/>
        </svg>
      </motion.div>
    </div>
  );
}