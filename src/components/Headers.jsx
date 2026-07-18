"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "infrastructure solutions",
    href: "/services/infrastructure-solutions",
    description: "Scalable cloud servers, migration, and infrastructure.",
  },
  {
    title: "cloud solutions",
    href: "/services/cloud-solutions",
    description: "Managed security and proactive threat protection.",
  },
  {
    title: "security solutions",
    href: "/services/security-solutions",
    description: "Reliable backup, disaster recovery, and continuity.",
  },
  {
    title: "Managed IT Services",
    href: "/services/managed-services",
    description: "Complete infrastructure monitoring and IT support.",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Solution4U"
            width={260}
            height={70}
            priority
            className="w-35 md:w-35 lg:w-45 h-14 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-700"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-700"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-blue-700"
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-140 -translate-x-1/2 pt-5">
                <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="rounded-xl p-4 transition hover:bg-blue-50"
                    >
                      <p className="font-bold text-slate-900">
                        {service.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {service.description}
                      </p>
                    </Link>
                  ))}

                  <Link
                    href="/services"
                    className="col-span-2 mt-1 rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    View All Solutions
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/blogs"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-700"
          >
            blogs
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-700"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/919888885456?text=Hi%20Solution4U,%20I'm%20interested%20in%20your%20IT%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#20BA5A]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-slate-800 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            <MobileLink href="/" label="Home" />
            <MobileLink href="/about" label="About Us" />

            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="ml-3 border-l border-blue-200 pl-3">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="col-span-2 mt-1 rounded-sm bg-slate-950 px-4 py-2 text-center text-sm  text-white transition hover:bg-blue-700"
                >
                  View All Solutions
                </Link>
              </div>
            )}

            <MobileLink href="/blogs" label="blogs" />
            <MobileLink href="/contact" label="Contact" />

            <Link
              href="/contact"
              className="mt-3 rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-bold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get IT Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLink({ href, label }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-3 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-700"
    >
      {label}
    </Link>
  );
}
