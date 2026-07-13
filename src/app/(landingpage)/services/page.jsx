import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  Cloud,
  DatabaseBackup,
  Headphones,
  Network,
  Server,
  ShieldCheck,
  Users,
  Wrench,
  Workflow,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Services| Solution4U",
  description:
    "Explore Solution4U services including IT infrastructure, cloud solutions, managed services, cybersecurity, staffing, AMC, business analytics, ERP and enterprise applications.",
  alternates: {
    canonical: "https://www.sloution4u.co.in/services",
  },
  openGraph: {
    title: "Enterprise IT Services & Cloud Solutions | Solution4U",
    description:
      "Secure, scalable and reliable infrastructure, cloud, cybersecurity, managed IT, analytics and ERP solutions for modern businesses.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    title: "Infrastructure Solutions",
    shortTitle: "Infrastructure",
    description:
      "Build a reliable technology foundation with enterprise servers, storage, networking, virtualization and scalable infrastructure.",
    image: "/services/infra.png",
    href: "/services/infrastructure-solutions",
    features: [
      "Enterprise servers and storage",
      "Network infrastructure",
      "Virtualization solutions",
      "Data centre architecture",
    ],
    accent: "from-blue-600 to-cyan-500",
  },
  {
    title: "Cloud Solutions",
    shortTitle: "Cloud",
    description:
      "Modernize your IT environment with scalable cloud infrastructure, migration, backup and hybrid cloud solutions.",
    image: "/services/cloud.png",
    href: "/services/cloud-solutions",
    features: [
      "Public and private cloud",
      "Cloud migration",
      "Hybrid cloud architecture",
      "Cloud backup and recovery",
    ],
    accent: "from-indigo-600 to-blue-500",
  },
  {
    title: "Managed Services",
    shortTitle: "Managed Services",
    description:
      "Keep your systems secure, available and optimized through proactive monitoring, maintenance and technical support.",
    image: "/services/managed.png",
    href: "/services/managed-services",
    features: [
      "24×7 infrastructure monitoring",
      "Performance optimization",
      "Patch and system maintenance",
      "Incident support",
    ],
    accent: "from-violet-600 to-indigo-500",
  },
  {
    title: "Staffing Solutions",
    shortTitle: "Staffing",
    description:
      "Strengthen your technology team with skilled IT professionals for permanent, contract and project-based requirements.",
    image: "/services/staffing.png",
    href: "/services/staffing-solutions",
    features: [
      "Contract staffing",
      "Permanent recruitment",
      "Project-based resources",
      "Technical talent sourcing",
    ],
    accent: "from-purple-600 to-pink-500",
  },
  {
    title: "Annual Maintenance Contract",
    shortTitle: "AMC",
    description:
      "Protect your technology investment with preventive maintenance, priority support and ongoing system health checks.",
    image: "/services/anual.png",
    href: "/services/annual-maintenance-contract",
    features: [
      "Preventive maintenance",
      "Hardware and software support",
      "Priority issue resolution",
      "Scheduled system health checks",
    ],
    accent: "from-sky-600 to-blue-500",
  },
  {
    title: "Business Analytics",
    shortTitle: "Business Analytics",
    description:
      "Convert business data into useful insights with dashboards, reporting, forecasting and analytics solutions.",
    image: "/services/business.png",
    href: "/services/business-analytics",
    features: [
      "Interactive dashboards",
      "Business intelligence",
      "Reporting automation",
      "Data-driven insights",
    ],
    accent: "from-cyan-600 to-teal-500",
  },
  {
    title: "Security Solutions",
    shortTitle: "Security",
    description:
      "Protect your infrastructure, endpoints, applications and data through enterprise-grade cybersecurity solutions.",
    image: "/services/security.png",
    href: "/services/security-solutions",
    features: [
      "Network security",
      "Endpoint protection",
      "Access control",
      "Threat monitoring",
    ],
    accent: "from-blue-700 to-violet-600",
  },
  {
    title: "ERP & Business Applications",
    shortTitle: "ERP Applications",
    description:
      "Streamline operations with customized ERP and business applications that improve automation, efficiency and control.",
    image: "/services/erp.png",
    href: "/services/erp-business-applications",
    features: [
      "Custom ERP solutions",
      "Workflow automation",
      "Business application development",
      "System integration",
    ],
    accent: "from-fuchsia-600 to-purple-600",
  },
];

const capabilities = [
  {
    title: "Security by Design",
    description:
      "Security, access control and data protection are considered at every stage of solution planning.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Support",
    description:
      "Our specialists help manage incidents, reduce downtime and support your ongoing technology operations.",
    icon: Headphones,
  },
  {
    title: "Scalable Architecture",
    description:
      "Infrastructure and applications are designed to adapt as your users, workloads and business requirements grow.",
    icon: Network,
  },
  {
    title: "Business Continuity",
    description:
      "Backup, monitoring and recovery planning help protect mission-critical systems and data.",
    icon: DatabaseBackup,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We study your business objectives, current systems, challenges, risks and operational requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team creates a secure and scalable solution architecture aligned with your goals.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "We deploy, integrate, migrate and configure the solution with minimal operational disruption.",
  },
  {
    number: "04",
    title: "Manage",
    description:
      "We monitor performance, maintain systems, manage risks and provide ongoing technical support.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* Hero */}

      <section className="relative overflow-hidden  text-white md:py-32">
        <Image
          src="/services/hero.png"
          alt="LaptopDoc - Best laptop repair shop in Tricity Chandigarh"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
              Products & Services
            </p>

            <h1 className="mt-6 text-xl font-bold leading-tight tracking-tight md:text-3xl">
              Technology solutions built for performance, security and growth
            </h1>

            <p className="mt-7 max-w-3xl text-sm leading-normal text-white md:text-xl">
              From enterprise infrastructure and cloud computing to
              cybersecurity, managed services, analytics and ERP applications,
              Solution4U helps businesses modernize technology with confidence.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
              >
                Talk to Our Experts
                <ArrowRight size={17} />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-black/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-purple-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Explore Our Tech Solutions
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              Complete technology services for modern businesses
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We design and deliver dependable solutions for organizations of
              all sizes, with a strong focus on performance, security,
              availability and operational efficiency.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {services.map(
              (
                { title, description, image, href, features, accent },
                index,
              ) => (
                <article
                  key={title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  {/* Top accent */}
                  <div
                    className={`absolute inset-x-0 top-0 z-20 h-1 bg-linear-to-r ${accent}`}
                  />

                  {/* Service image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    {image ? (
                      <Image
                        src={image}
                        alt={`${title} service`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
                        Image unavailable
                      </div>
                    )}

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />

                    {/* Service number */}
                    <span className="absolute right-5 top-5 rounded-md bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-950 shadow-sm backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="text-2xl font-bold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {description}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-700"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                            <Check size={12} strokeWidth={2.5} />
                          </span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={href}
                      aria-label={`Learn more about ${title}`}
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-blue-600 transition-all group-hover:gap-3 group-hover:text-blue-800"
                    >
                      Learn more about {title}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Why Solution4U */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Why Solution4U
              </p>

              <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
                More than technology implementation
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We combine technical expertise, operational insight and industry
              best practices to deliver solutions aligned with your strategy,
              requirements and long-term business growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className=" py-20 text-black md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              How We Work
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              A practical approach from strategy to support
            </h2>

            <p className="mt-6 text-lg leading-8 text-black">
              Every engagement begins with understanding your business before
              selecting or implementing technology.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-md border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-black">
                  {step.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-4 leading-7 text-black">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Built Around Your Business
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              Flexible solutions for different industries and workloads
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Technology requirements vary across organizations. We help design
              the right mix of infrastructure, cloud, security, applications and
              support based on your operational environment.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Discuss Your Requirements
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Cloud & Data",
                description:
                  "Cloud infrastructure, data backup, disaster recovery and scalable application environments.",
                icon: Cloud,
              },
              {
                title: "Servers & Networks",
                description:
                  "Enterprise servers, secure connectivity, network design and infrastructure optimization.",
                icon: Server,
              },
              {
                title: "Security & Availability",
                description:
                  "Security controls, system monitoring, business continuity and risk reduction.",
                icon: ShieldCheck,
              },
              {
                title: "Applications & Analytics",
                description:
                  "ERP, workflow automation, dashboards, business intelligence and custom applications.",
                icon: BarChart3,
              },
            ].map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-md border border-slate-200 bg-slate-50 p-6"
              >
                <Icon className="text-blue-700" size={28} strokeWidth={1.8} />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-full overflow-hidden  py-14 text-center text-black md:px-12 md:py-20">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Let&apos;s Build Together
            </p>

            <h2 className="mt-5 text-xl font-bold tracking-tight md:text-3xl">
              Need a customized technology solution?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black">
              Tell us about your infrastructure, cloud, security, staffing or
              application requirements and our team will help you plan the next
              step.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-black/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/15"
              >
                About Solution4U
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
