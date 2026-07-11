import {
  Check,
  Cloud,
  Coins,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "Scale on Demand",
    description:
      "Increase or reduce infrastructure resources based on actual business demand.",
    icon: TrendingUp,
  },
  {
    title: "Reduce Hardware Costs",
    description:
      "Avoid purchasing and maintaining unnecessary physical infrastructure.",
    icon: Coins,
  },
  {
    title: "Launch Faster",
    description:
      "Deploy websites, applications, and services without lengthy hardware procurement.",
    icon: Rocket,
  },
  {
    title: "Secure Your Data",
    description:
      "Protect critical workloads with structured backup, access control, and recovery planning.",
    icon: ShieldCheck,
  },
];

const cloudPoints = [
  "Flexible infrastructure capacity",
  "Faster application deployment",
  "Improved business continuity",
  "Secure backup and recovery",
  "Lower infrastructure overhead",
  "Resources aligned with demand",
];

export default function CloudBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 sm:text-sm">
              Cloud Makes Sense
            </p>

            <h2 className="mt-4 max-w-2xl text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
              Flexible cloud infrastructure for changing business demands
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              Business traffic is rarely constant. Retail platforms, financial
              services, media applications, and growing websites often
              experience periods of high and low demand.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Cloud infrastructure helps your business scale when demand rises
              without paying to maintain excessive hardware during quieter
              periods.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-md border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-950">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-blue-950 p-6 text-white shadow-xl sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-blue-200">
              <Cloud size={25} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 text-xl font-bold sm:text-2xl">
              Why businesses choose cloud
            </h3>

            <div className="mt-6 space-y-3">
              {cloudPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <Check size={14} strokeWidth={2.5} />
                  </span>

                  <p className="text-sm leading-6 text-blue-100 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/services/cloud-solutions"
              className="mt-7 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Explore Cloud Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
