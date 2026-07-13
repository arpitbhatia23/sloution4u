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
import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    title: "Infrastructure Solutions",
    description:
      "Build reliable IT infrastructure with enterprise-grade servers, networking, storage, virtualization, and scalable deployment solutions.",
    image: "/services/infra.png",
    href: "/services/infrastructure-solutions",
  },
  {
    title: "Cloud Solutions",
    description:
      "Accelerate your digital transformation with secure, scalable cloud infrastructure, migration, backup, and managed cloud services.",
    image: "/services/cloud.png",
    href: "/services/cloud-solutions",
  },
  {
    title: "Managed Services",
    description:
      "24×7 infrastructure monitoring, proactive maintenance, technical support, performance optimization, and managed IT operations.",
    image: "/services/managed.png",
    href: "/services/managed-services",
  },
  {
    title: "Staffing Solutions",
    description:
      "Connect your business with experienced IT professionals for contract staffing, project-based hiring, and long-term workforce solutions.",
    image: "/services/staffing.png",
    href: "/services/staffing-solutions",
  },
  {
    title: "Annual Maintenance Contract",
    description:
      "Comprehensive AMC services covering preventive maintenance, system health checks, hardware support, and priority technical assistance.",
    image: "/services/anual.png",
    href: "/services/annual-maintenance-contract",
  },
  {
    title: "Business Analytics",
    description:
      "Transform business data into actionable insights through dashboards, reporting, analytics, and intelligent decision-making tools.",
    image: "/services/business.png",
    href: "/services/business-analytics",
  },
  {
    title: "Security Solutions",
    description:
      "Protect your business with enterprise cybersecurity, network security, endpoint protection, backup strategies, and threat management.",
    image: "/services/security.png",
    href: "/services/security-solutions",
  },
  {
    title: "ERP & Business Applications",
    description:
      "Streamline operations with customized ERP solutions and business applications that improve automation, collaboration, and efficiency.",
    image: "/services/erp.png",
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

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {services.map(({ title, description, image, href }) => (
            <article
              key={title}
              className="group rounded-md border border-slate-200 bg-white  shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex  items-center justify-center ">
                <Image
                  src={image}
                  height={800}
                  width={800}
                  alt={`${title} image`}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-950 px-4">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600 px-4">
                {description}
              </p>

              <Link href={href} aria-label={`${title} link`}>
                <button className="mt-6 text-sm font-semibold text-blue-600 transition hover:text-blue-800 px-4 py-4">
                  Learn more →
                </button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
