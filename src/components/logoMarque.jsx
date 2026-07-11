"use client";

import Image from "next/image";

const companies = [
  { name: "Azure", logo: "/azure.png" },
  { name: "Dell", logo: "/dell.png" },
  { name: "AWS", logo: "/aws.png" },
  { name: "Adobe", logo: "/adobe.png" },
  { name: "Citrix", logo: "/citrix.png" },
  { name: "Hewlett", logo: "/hewlett.png" },
  { name: "Office 365", logo: "/office365.png" },
  { name: "Vaultize", logo: "/vaultize.png" },
  { name: "Veeam", logo: "/veeam.png" },
  { name: "Vmware", logo: "/vmware.png" },
];

export default function LogoMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-blue-100 bg-white py-8">
      <div className="mx-auto mb-8 max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Technologies We Support
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Trusted Enterprise Technologies
        </h2>

        <p className="mt-2 text-slate-500">
          Delivering secure, reliable infrastructure using industry-leading
          platforms and hardware.
        </p>
      </div>

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

      <div className="group overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 group-hover:paused">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex h-14 w-40 items-center justify-center transition-all duration-300  hover:scale-110"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={130}
                height={50}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
