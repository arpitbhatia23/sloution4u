"use client";

import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactForm({ serviceOptions }) {
  const [status, setStatus] = useState("");
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your enquiry.");
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
      <div className="flex min-h-155 flex-col items-center justify-center rounded-md border border-green-200 bg-green-50 p-8 text-center shadow-xl shadow-black/5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h2 className="mt-7 text-2xl font-extrabold tracking-tight text-black md:text-4xl">
          Enquiry Sent Successfully
        </h2>

        <p className="mt-4 max-w-md text-sm font-medium leading-7 text-gray-600 md:text-base">
          Thank you for contacting LaptopDoc. Your device and repair details
          have been received.
        </p>

        <p className="mt-2 max-w-md text-sm font-medium leading-7 text-gray-500">
          You can also contact LaptopDoc directly on WhatsApp for a faster
          response.
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
          <a
            href="https://wa.me/919888885456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-7 py-4 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            Contact on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-7 py-4 text-sm font-extrabold text-black transition-all hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
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
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
            placeholder="+91"
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
          className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-slate-500">
          By submitting this form, you agree that Solution4U may contact you
          regarding your enquiry.
        </p>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600  p-4 py-3 text-sm font-normal text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Send Enquiry
          <Send size={16} />
        </button>
      </div>
    </form>
  );
}
