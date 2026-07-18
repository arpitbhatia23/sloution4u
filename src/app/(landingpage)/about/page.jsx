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
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Solution4U",
  description:
    "Learn about Solution4U, a technology consulting company providing cloud solutions, infrastructure, cybersecurity, managed services, backup, networking, ERP applications, and enterprise IT consulting.",
  alternates: {
    canonical: "https://www.solution4u.co.in/about",
  },
};

const values = [
  {
    title: "Always Vigilant",
    description:
      "Continuous infrastructure monitoring helps identify operational risks before they affect your business.",
    icon: Activity,
  },
  {
    title: "Security Focused",
    description:
      "Security, availability, and strict access control guide every solution we design and implement.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Driven",
    description:
      "We continuously optimize infrastructure for speed, stability, scalability, and business continuity.",
    icon: TrendingUp,
  },
  {
    title: "Responsive Support",
    description:
      "Our technical professionals provide practical support when your business needs it most.",
    icon: Headphones,
  },
];

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

    accent: "from-fuchsia-600 to-purple-600",
  },
];

const cloudBenefits = [
  "Scale infrastructure during traffic peaks",
  "Reduce unnecessary hardware expenditure",
  "Launch applications and services faster",
  "Improve availability and business continuity",
  "Protect data with secure backup strategies",
  "Pay for resources based on actual demand",
];

const faqs = [
  {
    question: "What is cloud computing?",
    answer:
      "Cloud computing provides servers, storage, applications, networking, and other computing resources over secure remote infrastructure instead of relying only on physical systems at your office.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Data can be stored in secure cloud data centres, private infrastructure, or hybrid environments depending on your security, compliance, performance, and business requirements.",
  },
  {
    question: "Do I need to upgrade my hardware?",
    answer:
      "Not always. Cloud infrastructure can reduce the need for frequent hardware upgrades by allowing your business to scale computing resources based on demand.",
  },
  {
    question: "Can Solution4U migrate our existing systems?",
    answer:
      "Yes. We can evaluate your current environment, identify dependencies, plan the migration, reduce downtime, and help move applications, data, and workloads securely.",
  },
  {
    question: "How secure are cloud solutions?",
    answer:
      "Cloud security depends on architecture, access control, encryption, monitoring, backup, network protection, and operational practices. Solution4U designs security into every layer of the solution.",
  },
  {
    question: "Do you provide managed technical support?",
    answer:
      "Yes. Our managed services can include infrastructure monitoring, maintenance, performance optimization, incident response, backup oversight, and ongoing technical assistance.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden text-white md:py-32">
        <Image
          src="/services/hero.png"
          alt="LaptopDoc - Best laptop repair shop in Tricity Chandigarh"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <div className="max-w-4xl">
            <p className="text-lg font-semibold uppercase tracking-[0.35em] text-white">
              About Solution4U
            </p>

            <h1 className="mt-6 text-xl font-bold leading-tight tracking-tight md:text-3xl">
              Building secure, scalable and reliable technology solutions
            </h1>

            <p className="mt-7 max-w-3xl text-sm leading-normal text-white md:text-xl">
              Solution4U helps businesses modernize their infrastructure with
              cloud computing, cybersecurity, managed services, networking,
              enterprise applications, and dependable technology consulting.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
              >
                Talk to Our Experts
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-black/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              Technology experts who begin with your business requirements
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Solution4U is a technology consulting firm serving organizations
              across a wide variety of industries. We understand that successful
              technology implementation depends on much more than selecting the
              right combination of hardware and software.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Every successful project starts with a clear understanding of the
              client&apos;s strategy, operational requirements, security risks,
              and long-term goals. We bring together operational insight,
              innovation, technical expertise, and industry best practices to
              deliver dependable business technology.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-md border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div> */}

                <h3 className="mt-5 text-lg font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focused professionals */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Focused Professionals, Like You
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              We work as an extension of your technology team
            </h2>

            <p className="mt-6 text-lg leading-normal text-slate-600">
              Businesses whose digital platforms power their operations know
              that success depends on much more than infrastructure alone.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              They need a team that is always vigilant, always available, and
              prepared to help. That is the role we aim to fulfil—monitoring
              servers, mitigating risk, optimizing performance, and providing
              responsive support when it matters.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Everything we do is focused on becoming the technology partner
              your business can depend on.
            </p>
          </div>

          <div className="rounded-md bg-linear-to-br from-blue-950 via-blue-900 to-blue-700 p-8 text-white shadow-md md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Our Approach
            </p>

            <div className="mt-7 space-y-5">
              {[
                "Understand your strategy and business requirements",
                "Assess risk, performance, security, and availability",
                "Design infrastructure aligned with your operations",
                "Monitor, optimize, maintain, and support continuously",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Check size={16} />
                  </div>

                  <p className="leading-7 text-blue-50">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-3xl font-bold">24×7</p>
                <p className="mt-2 text-sm text-blue-100">
                  Monitoring and support
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-3xl font-bold">360°</p>
                <p className="mt-2 text-sm text-blue-100">
                  Technology consulting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Products & Services
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              Explore our technology solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We design and deliver solutions for organizations of all sizes,
              specializing in performance, security, availability, automation,
              and operational efficiency.
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

      {/* Core technology areas */}
      <section className="py-20 text-black md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Secure. Available. Reliable.
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              Technology designed for mission-critical operations
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Security",
                icon: ShieldCheck,
                text: "Our core values begin and end with security. We protect networks, systems, applications, and business data through controlled and carefully designed infrastructure.",
              },
              {
                title: "Backup & Restore",
                icon: DatabaseBackup,
                text: "We help businesses protect critical information with backup, replication, recovery planning, and resilient storage strategies across suitable locations.",
              },
              {
                title: "Network",
                icon: Network,
                text: "High-bandwidth connectivity, enterprise-grade security, and optimized performance provide a stable foundation for your operations.",
              },
              {
                title: "Dedicated Servers",
                icon: Server,
                text: "Dedicated server environments provide performance, control, connectivity, scalability, and support for demanding business workloads.",
              },
              {
                title: "Cloud Services",
                icon: Cloud,
                text: "High-performance and scalable cloud solutions support growing IT requirements while maintaining security, reliability, and cost control.",
              },
              {
                title: "Availability",
                icon: Activity,
                text: "Our clients depend on us to support the availability and security of mission-critical data, systems, applications, and operations.",
              },
            ].map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-md border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:bg-white/10"
              >
                <Icon className="text-blue-600" size={28} strokeWidth={1.7} />

                <h3 className="mt-5 text-xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-black">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud makes sense */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Cloud Makes Sense
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              Scale resources without maintaining unnecessary hardware
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Cloud computing is compelling for new application launches,
              growing startups, and large enterprises that need greater agility
              without lengthy hardware procurement cycles.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Many businesses experience regular peaks and lows in traffic.
              Retail platforms may peak during holidays, tax services during
              filing seasons, and entertainment or sports platforms during major
              events.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Traditional infrastructure often forces organizations to purchase
              enough hardware for maximum demand, leaving expensive machines
              underutilized during quieter periods. Cloud infrastructure offers
              a more flexible balance between cost, performance, and capacity.
            </p>
          </div>

          <div className="rounded-md border border-blue-100 bg-blue-50 p-7 md:p-9">
            <h3 className="text-2xl font-bold text-slate-950">
              Why businesses move to the cloud
            </h3>

            <div className="mt-7 space-y-4">
              {cloudBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white">
                    <Check size={15} />
                  </div>

                  <p className="leading-7 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "24×7",
              label: "Infrastructure monitoring and support",
            },
            {
              value: "360°",
              label: "Technology consulting approach",
            },
            {
              value: "Secure",
              label: "Infrastructure and data protection",
            },
            {
              value: "Scalable",
              label: "Cloud and enterprise solutions",
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-xl font-bold text-blue-700">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission and vision */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <article className="rounded-md bg-blue-950 p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Our Mission
            </p>

            <h2 className="mt-5 text-xl font-bold">
              Simplify technology for growing businesses
            </h2>

            <p className="mt-5 leading-8 text-blue-100">
              Our mission is to help organizations operate more effectively
              through secure, scalable, reliable, and carefully managed
              technology solutions.
            </p>
          </article>

          <article className="rounded-md bg-linear-to-br from-blue-600 to-purple-600 p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/75">
              Our Vision
            </p>

            <h2 className="mt-5 text-xl font-bold">
              Become a trusted long-term technology partner
            </h2>

            <p className="mt-5 leading-8 text-white/85">
              We aim to deliver innovative cloud, infrastructure, security, and
              business technology solutions that help organizations grow with
              confidence.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              Common questions about cloud and infrastructure
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-md border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-950">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="relative max-w-full overflow-hidden  py-14 text-center text-black md:px-12 md:py-20">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-md bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              The Cloud Is in Our DNA
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Ready to modernize your technology infrastructure?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black">
              Let&apos;s build a secure, scalable, and reliable technology
              environment for your business.
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
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-black/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/15"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
