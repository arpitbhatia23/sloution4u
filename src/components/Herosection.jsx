import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

const features = [
  "Enterprise cloud solutions",
  "Proactive cyber security",
  "Backup and disaster recovery",
  "Fast technical response",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/25" />{" "}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Zap className="h-4 w-4" />
              Cloud, Security & Managed IT Solutions
            </div>

            <h1 className="mt-6 max-w-3xl text-lg font-bold tracking-tight text-white sm:text-xl lg:text-3xl lg:leading-[1.08]">
              Technology that helps your business
              <span className="block text-white">move forward securely.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white">
              Solution4U delivers enterprise cloud infrastructure, managed cyber
              security, backup and recovery, and modern IT solutions designed to
              reduce complexity, control costs, and support business growth.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get IT Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Explore Our Solutions
              </Link>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm font-medium text-white"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="hidden sm:block">
            <GlobeDemo />
          </div> */}
        </div>
      </div>
    </section>
  );
}
