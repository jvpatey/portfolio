"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FloatingTextarea = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 1,
}: {
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText;
    onChange({
      target: { name, value: text },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-2xl">
        {/* Gradient Border Wrapper */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-0"
          initial={false}
          animate={{
            opacity: isFocused ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
            padding: "2px",
          }}
        >
          <div
            className="w-full h-full rounded-2xl"
            style={{ background: "#111111" }}
          />
        </motion.div>

        <div
          ref={divRef}
          contentEditable
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="relative w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm min-h-[100px]"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px) saturate(200%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
          data-placeholder={placeholder}
          suppressContentEditableWarning={true}
        />

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: isFocused ? "100%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)",
          }}
        />
      </div>

      <style jsx>{`
        [contenteditable][data-placeholder]:empty::before {
          content: attr(data-placeholder);
          color: #64748b;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

// Input component with gradient border on focus
const FloatingInput = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  rows = 1,
}: {
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative group">
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Gradient Border Wrapper */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none z-0"
            initial={false}
            animate={{
              opacity: isFocused ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(135deg, #3478F6 0%, #FF2D55 50%, #FF9500 100%)",
              padding: "2px",
            }}
          >
            <div
              className="w-full h-full rounded-2xl"
              style={{ background: "#111111" }}
            />
          </motion.div>

          {type === "textarea" ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required={required}
              rows={rows}
              placeholder={placeholder}
              className="relative w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px) saturate(200%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type={type}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required={required}
              placeholder={placeholder}
              className="relative w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px) saturate(200%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            />
          )}

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ x: "-100%" }}
            animate={{ x: isFocused ? "100%" : "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thanks! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 blur-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(52, 120, 246, 0.1) 0%, rgba(255, 45, 85, 0.1) 50%, rgba(255, 149, 0, 0.1) 100%)",
        }}
      />

      <form onSubmit={handleSubmit} className="relative space-y-6 p-1">
        <div className="space-y-6">
          <FloatingInput
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <FloatingInput
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />

          <FloatingTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          />
        </div>

        {/* Status Message */}
        <AnimatePresence mode="wait">
          {status.type !== "idle" && (
            <motion.div
              key={status.type}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`p-4 rounded-2xl text-sm font-medium backdrop-blur-sm ${
                status.type === "success"
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : status.type === "error"
                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                  : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
              }`}
              style={{
                background:
                  status.type === "success"
                    ? "rgba(34, 197, 94, 0.1)"
                    : status.type === "error"
                    ? "rgba(239, 68, 68, 0.1)"
                    : "rgba(59, 130, 246, 0.1)",
                backdropFilter: "blur(20px) saturate(200%)",
                border:
                  status.type === "success"
                    ? "1px solid rgba(34, 197, 94, 0.2)"
                    : status.type === "error"
                    ? "1px solid rgba(239, 68, 68, 0.2)"
                    : "1px solid rgba(59, 130, 246, 0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                {status.type === "loading" && (
                  <motion.div
                    className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                {status.type === "success" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                )}
                {status.type === "error" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                )}
                <span>{status.message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status.type === "loading"}
          className="relative group w-full px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background:
              "linear-gradient(135deg, rgba(52, 120, 246, 0.25) 0%, rgba(255, 45, 85, 0.25) 50%, rgba(255, 149, 0, 0.25) 100%)",
            color: "white",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(20px) saturate(200%)",
            border: "0.5px solid rgba(255, 255, 255, 0.2)",
          }}
          whileHover={status.type !== "loading" ? { y: -2 } : {}}
          onMouseEnter={(e) => {
            if (status.type !== "loading") {
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
            }
          }}
          onMouseLeave={(e) => {
            if (status.type !== "loading") {
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
            }
          }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: status.type === "loading" ? 1 : 0 }}
            style={{
              background:
                "linear-gradient(135deg, rgba(52, 120, 246, 0.1) 0%, rgba(255, 45, 85, 0.1) 50%, rgba(255, 149, 0, 0.1) 100%)",
            }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            initial={{ x: "-100%" }}
            animate={{ x: status.type === "loading" ? "100%" : "-100%" }}
            transition={{
              duration: 1.5,
              repeat: status.type === "loading" ? Infinity : 0,
              ease: "easeInOut",
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
            }}
          />

          <span className="relative z-10 flex items-center justify-center gap-2">
            {status.type === "loading" && (
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            )}
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </span>
        </motion.button>
      </form>
    </motion.div>
  );
}
