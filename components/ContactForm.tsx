"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryCtaClass } from "@/lib/surfaceStyles";

interface FormData {
  name: string;
  email: string;
  message: string;
}

/** Calm, high-contrast fields: visible labels, native controls, ring-only focus (no stacked glass). */
const inputClass =
  "block w-full rounded-xl border border-white/[0.12] bg-[var(--surface-1)] px-3.5 py-3 text-[15px] leading-snug text-white shadow-none placeholder:text-slate-500 transition-[border-color,box-shadow] duration-200 focus:border-cyan-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-1)]";

const labelClass =
  "block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500";

function FieldGroup({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  const statusClass =
    status.type === "success"
      ? "border border-green-500/25 bg-green-500/10 text-green-400"
      : status.type === "error"
        ? "border border-red-500/25 bg-red-500/10 text-red-400"
        : "border border-cyan-500/30 bg-cyan-500/10 text-cyan-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FieldGroup id="contact-name" label="Name">
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          required
          className={inputClass}
        />
      </FieldGroup>

      <FieldGroup id="contact-email" label="Email">
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className={inputClass}
        />
      </FieldGroup>

      <FieldGroup id="contact-message" label="Message">
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="What would you like to discuss?"
          required
          className={`${inputClass} min-h-[108px] resize-y`}
        />
      </FieldGroup>

      <AnimatePresence mode="wait">
        {status.type !== "idle" && (
          <motion.div
            key={status.type}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`rounded-xl px-3.5 py-3 text-sm font-medium ${statusClass}`}
            role="status"
          >
            <div className="flex items-center gap-3">
              {status.type === "loading" && (
                <motion.span
                  className="inline-block h-4 w-4 rounded-full border-2 border-cyan-300/80 border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
              {status.type === "success" && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-400">
                  <svg
                    className="h-2.5 w-2.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
              {status.type === "error" && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-400">
                  <svg
                    className="h-2.5 w-2.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
              <span>{status.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className={`${primaryCtaClass} mt-1 min-h-12 w-full text-[15px] disabled:cursor-not-allowed disabled:opacity-50`}
        style={{ backgroundColor: "var(--cta-solid)" }}
      >
        <span className="flex items-center justify-center gap-2">
          {status.type === "loading" && (
            <motion.span
              className="inline-block h-4 w-4 rounded-full border-2 border-white/90 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            />
          )}
          {status.type === "loading" ? "Sending…" : "Send message"}
        </span>
      </button>
    </form>
  );
}
