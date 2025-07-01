"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    meridiem: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isMeridiemOpen, setIsMeridiemOpen] = useState(false);
  const meridiemRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^[\d\s()+-]+$/.test(formData.phone)) {
      errors.phone = "Phone number must not contain letters.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) errors.message = "Please enter a message.";
    if (!formData.time.trim()) errors.time = "Please enter a time.";
    if (!formData.meridiem.trim()) errors.meridiem = "Select AM or PM.";
    if (!formData.consent) errors.consent = "You must agree to be contacted.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setError("Please correct the highlighted fields.");
      return;
    }
    setSubmitted(true);
    setError("");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (meridiemRef.current && !meridiemRef.current.contains(event.target)) {
        setIsMeridiemOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        {/* Form Section */}
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
              className="text-moss_green text-xl font-medium bg-white border border-moss_green/20 p-6 rounded-xl shadow"
            >
              ✅ Thank you! Your message has been sent.
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 bg-white p-8 rounded-xl shadow-md text-lg tracking-wide"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.2 }}
              noValidate
            >
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`border p-4 rounded-md w-full ${
                    formErrors.name ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`border p-4 rounded-md w-full ${
                    formErrors.phone ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border p-4 rounded-md w-full ${
                    formErrors.email ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="What brings you here?"
                  value={formData.message}
                  onChange={handleChange}
                  className={`border p-4 rounded-md w-full resize-none ${
                    formErrors.message ? "border-red-400" : "border-gray-300"
                  }`}
                  rows={4}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    name="time"
                    type="text"
                    placeholder="Time (e.g., 10:30)"
                    value={formData.time}
                    onChange={handleChange}
                    className={`border p-4 rounded-md w-full ${
                      formErrors.time ? "border-red-400" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-moss_green focus:border-moss_green transition-all duration-300`}
                  />
                  {formErrors.time && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.time}</p>
                  )}
                </div>
                <div className="relative" ref={meridiemRef}>
                  <button
  type="button"
  onClick={() => setIsMeridiemOpen(!isMeridiemOpen)}
  className={`w-full flex items-center justify-between border ${
    formErrors.meridiem ? "border-red-400" : "border-gray-300"
  } p-4 rounded-md ${
    formData.meridiem ? "text-black_olive" : "text-gray-400"
  } focus:outline-none focus:ring-2 focus:ring-moss_green focus:border-moss_green transition-all duration-300 shadow-sm`}
>
  <span>{formData.meridiem || "Select AM/PM"}</span>
  <motion.div
    animate={{ rotate: isMeridiemOpen ? 180 : 0 }}
    transition={{ duration: 0.2 }}
  >
    <ChevronDown className="h-5 w-5" />
  </motion.div>
</button>
                  <AnimatePresence>
                    {isMeridiemOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg"
                      >
                        <div className="py-1">
                          <button
                            type="button"
                            onClick={() => {
                              handleChange({
                                target: { name: "meridiem", value: "AM" },
                              });
                              setIsMeridiemOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 hover:bg-moss_green/10"
                          >
                            AM
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              handleChange({
                                target: { name: "meridiem", value: "PM" },
                              });
                              setIsMeridiemOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 hover:bg-moss_green/10"
                          >
                            PM
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {formErrors.meridiem && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.meridiem}
                    </p>
                  )}
                </div>
              </div>

              <label className="flex items-start gap-3 text-base">
                <input
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 mt-1"
                />
                <span className={`${formErrors.consent ? "text-red-500" : ""}`}>
                  I agree to be contacted
                </span>
              </label>

              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

              <button
                type="submit"
                className="bg-moss_green hover:bg-black_olive text-white py-4 rounded-md font-semibold text-lg transition"
              >
                Submit
              </button>
            </motion.form>
          )}
        </div>

        {/* Contact Info Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
          className="flex flex-col justify-center self-center h-full text-moss_green text-lg tracking-wide leading-relaxed"
        >
          <div className="space-y-12 py-10">
            <p className="text-2xl font-serif text-black_olive">
              You are not alone. Lets take the first step together.
            </p>
            <div className="space-y-8 pl-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-moss_green/10 text-moss_green flex items-center justify-center rounded-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-ash_gray">Phone</span>
                  <span className="text-xl font-medium text-black_olive">
                    (323) 555-0192
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-moss_green/10 text-moss_green flex items-center justify-center rounded-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-ash_gray">Email</span>
                  <span className="text-xl font-medium text-black_olive">
                    serena@blakepsychology.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}