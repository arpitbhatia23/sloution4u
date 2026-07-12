"use client";

import {
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function ContactForm({ serviceOptions }) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    try {
      setStatus("loading");
      setErrorMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to send your enquiry. Please try again.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );

      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-155 flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 p-8 text-center shadow-xl shadow-black/5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h2 className="mt-7 text-2xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
          Enquiry Sent Successfully
        </h2>

        <p className="mt-4 max-w-md text-sm font-medium leading-7 text-slate-600 md:text-base">
          Thank you for contacting Solution4U. We have received your project
          requirements and contact details.
        </p>

        <p className="mt-2 max-w-md text-sm font-medium leading-7 text-slate-500">
          Our team will review your enquiry and contact you shortly.
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
          <a
            href="https://wa.me/919888885456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <MessageCircle className="h-4 w-4" />
            Contact on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setErrorMessage("");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-900 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            Send Another Enquiry
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      {status === "error" && errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

          <div>
            <p className="text-sm font-bold">Your enquiry could not be sent</p>

            <p className="mt-1 text-sm leading-6 text-red-700">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-800">
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your name"
            disabled={status === "loading"}
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="text-sm font-medium text-slate-800"
          >
            Company Name
          </label>

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Enter company name"
            disabled={status === "loading"}
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-800">
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@company.com"
            disabled={status === "loading"}
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-800">
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            disabled={status === "loading"}
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-slate-800">
          Service Required
        </label>

        <select
          id="service"
          name="service"
          defaultValue=""
          required
          disabled={status === "loading"}
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70"
        >
          <option value="" disabled>
            Select a service
          </option>

          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-800">
          Project Details
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your current setup, challenges, and requirements."
          disabled={status === "loading"}
          className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-slate-500">
          By submitting this form, you agree that Solution4U may contact you
          regarding your enquiry.
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-w-40 items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Enquiry
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
