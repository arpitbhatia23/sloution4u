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

export const metadata = {
  title: "About Us | Solution4U",
  description:
    "Learn about Solution4U, a technology consulting company providing cloud solutions, infrastructure, cybersecurity, managed services, backup, networking, ERP applications, and enterprise IT consulting.",
  alternates: {
    canonical: "/about",
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
    description:
      "Enterprise servers, storage, virtualization, and infrastructure designed for reliability and growth.",
    icon: Server,
    href: "/services/infrastructure-solutions",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud environments for modern workloads, applications, backup, and business operations.",
    icon: Cloud,
    href: "/services/cloud-solutions",
  },
  {
    title: "Managed Services",
    description:
      "Proactive monitoring, maintenance, optimization, and ongoing technical support for your IT environment.",
    icon: Activity,
    href: "/services/managed-services",
  },
  {
    title: "Staffing Solutions",
    description:
      "Flexible technology staffing and experienced IT professionals for short-term and long-term business needs.",
    icon: Users,
    href: "/services/staffing-solutions",
  },
  {
    title: "Annual Maintenance Contract",
    description:
      "Preventive maintenance, system health checks, hardware support, and priority technical assistance.",
    icon: Wrench,
    href: "/services/annual-maintenance-contract",
  },
  {
    title: "Business Analytics",
    description:
      "Actionable insights, reporting, dashboards, and analytics tools for better business decision-making.",
    icon: BarChart3,
    href: "/services/business-analytics",
  },
  {
    title: "Security Solutions",
    description:
      "Network security, endpoint protection, threat management, data protection, and secure infrastructure.",
    icon: ShieldCheck,
    href: "/services/security-solutions",
  },
  {
    title: "ERP & Business Applications",
    description:
      "Customized ERP and business applications that improve automation, efficiency, and operational control.",
    icon: Network,
    href: "/services/erp-business-applications",
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
      <section className="relative overflow-hidden text-black md:py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="text-lg font-semibold uppercase tracking-[0.35em] text-blue-600">
              About Solution4U
            </p>

            <h1 className="mt-6 text-xl font-bold leading-tight tracking-tight md:text-3xl">
              Building secure, scalable and reliable technology solutions
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black md:text-xl">
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
                className="inline-flex items-center justify-center rounded-md border border-black/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-blue-600 backdrop-blur-sm transition hover:bg-white/15"
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
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon, href }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{title}</h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {description}
                </p>

                <Link
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core technology areas */}
      <section className="bg-blue-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
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
                <Icon className="text-blue-300" size={28} strokeWidth={1.7} />

                <h3 className="mt-5 text-xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-blue-100">{text}</p>
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-md bg-blue-950 px-7 py-14 text-center text-white md:px-12 md:py-20">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-md bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              The Cloud Is in Our DNA
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Ready to modernize your technology infrastructure?
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100">
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
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
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
