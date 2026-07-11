import {
  Activity,
  ArrowRight,
  Headphones,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Always Vigilant",
    description:
      "Continuous monitoring helps detect risks before they affect your operations.",
    icon: Activity,
  },
  {
    title: "Security Focused",
    description:
      "Security, stability, and availability are built into every solution.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Driven",
    description:
      "We optimize infrastructure for better reliability, speed, and growth.",
    icon: TrendingUp,
  },
  {
    title: "Responsive Support",
    description:
      "Our technical team provides practical and dependable assistance.",
    icon: Headphones,
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="p-7 sm:p-10 lg:p-14">
          {/* Heading */}
          <div className="mx-auto max-w-8xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Technology professionals focused on your business success
            </h2>

            <p className="mx-auto mt-6 max-w-7xl text-lg leading-8 text-slate-600">
              Solution4U is a technology consulting firm helping businesses
              design, secure, manage, and improve their technology
              infrastructure.
            </p>
          </div>

          {/* Main description */}
          <div className="mx-auto mt-10 max-w-7xl text-center">
            <p className="leading-8 text-slate-600">
              Successful technology implementation depends on more than
              selecting hardware and software. It begins with understanding your
              strategy, operational requirements, security risks, and long-term
              goals.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From server monitoring and risk mitigation to infrastructure
              optimization and technical support, we work as an extension of
              your team and provide technology solutions you can trust.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-md border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>

          {/* Stats and approach */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-md bg-blue-950 p-6 text-white">
              <p className="text-3xl font-bold">24×7</p>
              <p className="mt-2 text-sm text-blue-100">
                Infrastructure monitoring and technical support
              </p>
            </div>

            <div className="rounded-md bg-blue-700 p-6 text-white">
              <p className="text-3xl font-bold">360°</p>
              <p className="mt-2 text-sm text-blue-100">
                Technology consulting and infrastructure guidance
              </p>
            </div>

            <div className="rounded-md bg-linear-to-r from-purple-600 to-pink-500 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Our Approach
              </p>

              <p className="mt-2 text-lg font-semibold">
                Strategy → Security → Performance → Support
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Learn About Solution4U
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-700"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
