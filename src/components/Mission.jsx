import { ArrowRight, Eye, Target } from "lucide-react";
import Link from "next/link";

export default function MissionVisionSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 sm:text-sm">
            Our Purpose
          </p>

          <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Technology built around trust, reliability, and business growth
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Our purpose guides how we design technology solutions, support
            clients, and build long-term partnerships.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-md bg-blue-950 p-7 text-white shadow-lg sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-md bg-blue-400/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-blue-200">
                <Target size={24} strokeWidth={1.8} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300 sm:text-sm">
                Our Mission
              </p>

              <h3 className="mt-3 text-xl font-bold leading-tight sm:text-2xl">
                Simplify technology for modern businesses
              </h3>

              <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
                We help organizations operate more effectively through secure,
                scalable, reliable, and carefully managed technology solutions.
              </p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-md bg-linear-to-br from-blue-600 to-purple-600 p-7 text-white shadow-lg sm:p-9">
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-pink-400/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/15">
                <Eye size={24} strokeWidth={1.8} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/75 sm:text-sm">
                Our Vision
              </p>

              <h3 className="mt-3 text-xl font-bold leading-tight sm:text-2xl">
                Become a trusted long-term technology partner
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                We aim to deliver innovative cloud, infrastructure, security,
                analytics, and business application solutions that help
                organizations grow confidently.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 hover:text-blue-800"
          >
            Learn more about Solution4U
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
