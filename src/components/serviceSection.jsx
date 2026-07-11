import {
  Server,
  Cloud,
  Settings,
  Users,
  Wrench,
  BarChart3,
  ShieldCheck,
  Building2,
} from "lucide-react";

export const services = [
  {
    title: "Infrastructure Solutions",
    description:
      "Build reliable IT infrastructure with enterprise-grade servers, networking, storage, virtualization, and scalable deployment solutions.",
    icon: Server,
    href: "/services/infrastructure-solutions",
  },
  {
    title: "Cloud Solutions",
    description:
      "Accelerate your digital transformation with secure, scalable cloud infrastructure, migration, backup, and managed cloud services.",
    icon: Cloud,
    href: "/services/cloud-solutions",
  },
  {
    title: "Managed Services",
    description:
      "24×7 infrastructure monitoring, proactive maintenance, technical support, performance optimization, and managed IT operations.",
    icon: Settings,
    href: "/services/managed-services",
  },
  {
    title: "Staffing Solutions",
    description:
      "Connect your business with experienced IT professionals for contract staffing, project-based hiring, and long-term workforce solutions.",
    icon: Users,
    href: "/services/staffing-solutions",
  },
  {
    title: "Annual Maintenance Contract",
    description:
      "Comprehensive AMC services covering preventive maintenance, system health checks, hardware support, and priority technical assistance.",
    icon: Wrench,
    href: "/services/annual-maintenance-contract",
  },
  {
    title: "Business Analytics",
    description:
      "Transform business data into actionable insights through dashboards, reporting, analytics, and intelligent decision-making tools.",
    icon: BarChart3,
    href: "/services/business-analytics",
  },
  {
    title: "Security Solutions",
    description:
      "Protect your business with enterprise cybersecurity, network security, endpoint protection, backup strategies, and threat management.",
    icon: ShieldCheck,
    href: "/services/security-solutions",
  },
  {
    title: "ERP & Business Applications",
    description:
      "Streamline operations with customized ERP solutions and business applications that improve automation, collaboration, and efficiency.",
    icon: Building2,
    href: "/services/erp-business-applications",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Products & Services
          </p>

          <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-950 md:text-3xl">
            Infrastructure built for security, performance, and availability
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            We provide cloud, server, network, backup, and security solutions
            for businesses that need dependable technology infrastructure.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-md border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={26} strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{description}</p>

              <button className="mt-6 text-sm font-semibold text-blue-600 transition hover:text-blue-800">
                Learn more →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
