"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message ||
      !formData.time ||
      !formData.consent
    ) {
      setError("Please fill out all fields and agree to be contacted.");
      return;
    }
    setSubmitted(true);
    setError("");
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
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
    <section ref={ref} id="contact" className="w-full bg-isabelline py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE — Form */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="text-4xl md:text-5xl font-serif text-black_olive mb-10 tracking-wide"
          >
            Get In Touch
          </motion.h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-moss_green text-xl font-medium"
            >
              Thank you! Your message has been sent.
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 bg-white p-8 rounded-xl shadow-md text-lg tracking-wide"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.2 }}
            >
              <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-4 rounded-md" required />
              <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-4 rounded-md" required />
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-4 rounded-md" required />
              <textarea name="message" placeholder="What brings you here?" value={formData.message} onChange={handleChange} className="border p-4 rounded-md" rows={4} required />
              <input name="time" type="text" placeholder="Preferred time to reach you" value={formData.time} onChange={handleChange} className="border p-4 rounded-md" required />
              <label className="flex items-center gap-2">
                <input name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="h-4 w-4" />
                <span>I agree to be contacted</span>
              </label>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="bg-moss_green hover:bg-black_olive text-white py-4 rounded-md font-semibold text-lg">
                Submit
              </button>
            </motion.form>
          )}
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
          className="flex flex-col justify-center self-center h-full text-moss_green text-lg tracking-wide leading-relaxed"
        >
          <div className="space-y-12 py-10">
            <p className="text-2xl font-serif text-black_olive">
              You are not alone. Let’s take the first step together.
            </p>
            <div className="space-y-8 pl-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-moss_green/10 text-moss_green flex items-center justify-center rounded-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-ash_gray">Phone</span>
                  <span className="text-xl font-medium text-black_olive">(323) 555-0192</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-moss_green/10 text-moss_green flex items-center justify-center rounded-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-ash_gray">Email</span>
                  <span className="text-xl font-medium text-black_olive">serena@blakepsychology.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
