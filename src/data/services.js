import {
  Activity,
  BarChart3,
  Cloud,
  Server,
  ShieldCheck,
  Users,
  Wrench,
  Workflow,
} from "lucide-react";

export const services = [
  {
    slug: "infrastructure-solutions",
    title: "Infrastructure Solutions",
    shortTitle: "Infrastructure",
    tagline: "Build a reliable foundation for your business technology.",
    description:
      "Solution4U delivers enterprise infrastructure solutions designed for performance, reliability, scalability, and long-term business growth.",
    overview:
      "Modern businesses depend on secure and reliable technology infrastructure. We help organizations design, implement, and manage servers, storage, networking, virtualization, and data-centre environments aligned with their operational requirements.",
    icon: Server,
    features: [
      "Enterprise servers and storage",
      "Network infrastructure design",
      "Virtualization solutions",
      "Data-centre architecture",
      "Infrastructure modernization",
      "Performance optimization",
    ],
    benefits: [
      "Improved system reliability",
      "Reduced infrastructure downtime",
      "Scalable architecture",
      "Better operational performance",
      "Centralized technology management",
      "Enhanced business continuity",
    ],
    process: [
      {
        title: "Infrastructure Assessment",
        description:
          "We evaluate your existing servers, storage, network, applications, and operational requirements.",
      },
      {
        title: "Solution Architecture",
        description:
          "Our team designs a secure and scalable infrastructure architecture aligned with your business.",
      },
      {
        title: "Implementation",
        description:
          "We deploy and configure the required infrastructure with minimal operational disruption.",
      },
      {
        title: "Monitoring & Support",
        description:
          "We monitor performance, maintain systems, and provide ongoing technical support.",
      },
    ],
    accent: "from-blue-600 to-cyan-500",
    metaTitle: "Infrastructure Solutions & Enterprise IT Services | Solution4U",
    metaDescription:
      "Build secure and scalable enterprise infrastructure with servers, storage, networking, virtualization, and managed IT solutions from Solution4U.",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortTitle: "Cloud",
    tagline: "Secure, scalable cloud infrastructure for modern workloads.",
    description:
      "Accelerate digital transformation with cloud infrastructure, migration, backup, disaster recovery, and hybrid cloud solutions.",
    overview:
      "Cloud computing helps businesses scale resources, reduce hardware costs, improve availability, and launch applications faster. Solution4U helps organizations plan, migrate, secure, and manage cloud environments based on their performance and operational requirements.",
    icon: Cloud,
    features: [
      "Public cloud solutions",
      "Private cloud environments",
      "Hybrid cloud architecture",
      "Cloud migration",
      "Cloud backup and recovery",
      "Cloud infrastructure management",
    ],
    benefits: [
      "Scale resources on demand",
      "Reduce hardware expenditure",
      "Improve workload availability",
      "Faster application deployment",
      "Secure data backup",
      "Flexible resource utilization",
    ],
    process: [
      {
        title: "Cloud Readiness Assessment",
        description:
          "We review your workloads, applications, data, dependencies, and security requirements.",
      },
      {
        title: "Cloud Strategy",
        description:
          "We define the appropriate public, private, or hybrid cloud architecture.",
      },
      {
        title: "Migration & Deployment",
        description:
          "We migrate applications and data while minimizing operational disruption.",
      },
      {
        title: "Cloud Management",
        description:
          "We monitor, optimize, secure, and maintain your cloud environment.",
      },
    ],
    accent: "from-indigo-600 to-blue-500",
    metaTitle: "Cloud Solutions, Migration & Managed Cloud | Solution4U",
    metaDescription:
      "Explore secure cloud solutions, cloud migration, backup, disaster recovery, hybrid cloud, and managed cloud services from Solution4U.",
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    shortTitle: "Managed Services",
    tagline: "Proactive monitoring and support for your IT environment.",
    description:
      "Keep your infrastructure secure, available, and optimized through proactive monitoring, maintenance, and technical support.",
    overview:
      "Our managed services help businesses reduce operational risk and maintain reliable technology environments. We monitor systems, address issues, optimize performance, manage updates, and provide ongoing technical support.",
    icon: Activity,
    features: [
      "Infrastructure monitoring",
      "Server management",
      "Patch management",
      "Performance optimization",
      "Incident support",
      "Preventive maintenance",
    ],
    benefits: [
      "Reduced operational downtime",
      "Faster issue resolution",
      "Improved system performance",
      "Lower internal IT workload",
      "Proactive risk management",
      "Continuous technical support",
    ],
    process: [
      {
        title: "Environment Review",
        description:
          "We review your systems, infrastructure, applications, and support requirements.",
      },
      {
        title: "Service Planning",
        description:
          "We define monitoring, maintenance, response, and escalation procedures.",
      },
      {
        title: "Continuous Management",
        description:
          "Our team manages alerts, maintenance, incidents, and performance optimization.",
      },
      {
        title: "Reporting",
        description:
          "We provide ongoing insights into system health, incidents, and improvements.",
      },
    ],
    accent: "from-violet-600 to-indigo-500",
    metaTitle: "Managed IT Services & Infrastructure Support | Solution4U",
    metaDescription:
      "Get managed IT services including infrastructure monitoring, server management, maintenance, optimization, and technical support.",
  },
  {
    slug: "staffing-solutions",
    title: "Staffing Solutions",
    shortTitle: "Staffing",
    tagline: "Skilled technology professionals for your business requirements.",
    description:
      "Strengthen your technology team with experienced IT professionals for contract, permanent, and project-based requirements.",
    overview:
      "Solution4U helps businesses find skilled technology professionals for short-term projects, contract assignments, and long-term roles. Our staffing approach focuses on technical capabilities, business requirements, and team compatibility.",
    icon: Users,
    features: [
      "Contract staffing",
      "Permanent hiring",
      "Project-based resources",
      "Technical talent sourcing",
      "IT resource augmentation",
      "Specialized technology hiring",
    ],
    benefits: [
      "Faster access to talent",
      "Flexible workforce capacity",
      "Reduced recruitment workload",
      "Project-specific expertise",
      "Scalable staffing models",
      "Improved hiring efficiency",
    ],
    process: [
      {
        title: "Requirement Analysis",
        description:
          "We understand the required skills, role responsibilities, duration, and business objectives.",
      },
      {
        title: "Talent Screening",
        description:
          "Candidates are evaluated for technical ability, experience, and suitability.",
      },
      {
        title: "Candidate Selection",
        description:
          "We provide suitable profiles and support the interview and selection process.",
      },
      {
        title: "Ongoing Coordination",
        description:
          "We support onboarding, resource coordination, and staffing continuity.",
      },
    ],
    accent: "from-purple-600 to-pink-500",
    metaTitle: "IT Staffing & Technology Recruitment Solutions | Solution4U",
    metaDescription:
      "Find experienced IT professionals through contract staffing, permanent recruitment, project resources, and technology talent solutions.",
  },
  {
    slug: "annual-maintenance-contract",
    title: "Annual Maintenance Contract",
    shortTitle: "AMC",
    tagline: "Preventive maintenance and dependable technical support.",
    description:
      "Protect your technology investment with preventive maintenance, system health checks, priority support, and ongoing assistance.",
    overview:
      "Our annual maintenance contract services help businesses maintain hardware, software, servers, networks, and technology infrastructure throughout the year. Regular maintenance reduces failures, improves reliability, and provides access to priority support.",
    icon: Wrench,
    features: [
      "Preventive maintenance",
      "Hardware support",
      "Software support",
      "System health checks",
      "Priority issue resolution",
      "Scheduled maintenance visits",
    ],
    benefits: [
      "Reduced unexpected failures",
      "Longer hardware lifespan",
      "Predictable support costs",
      "Priority technical assistance",
      "Improved system stability",
      "Regular infrastructure maintenance",
    ],
    process: [
      {
        title: "Asset Assessment",
        description:
          "We review your hardware, systems, network devices, and maintenance requirements.",
      },
      {
        title: "AMC Planning",
        description:
          "We define service coverage, schedules, response procedures, and support scope.",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Our team performs scheduled inspections, health checks, and maintenance.",
      },
      {
        title: "Support & Reporting",
        description:
          "We resolve issues and maintain service records throughout the contract.",
      },
    ],
    accent: "from-sky-600 to-blue-500",
    metaTitle: "Annual Maintenance Contract & IT AMC Services | Solution4U",
    metaDescription:
      "Get annual maintenance contract services for hardware, software, servers, networks, preventive maintenance, and priority support.",
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    shortTitle: "Business Analytics",
    tagline: "Turn business data into meaningful insights.",
    description:
      "Transform business information into actionable insights through dashboards, reporting, forecasting, and analytics solutions.",
    overview:
      "Business analytics helps organizations understand performance, identify trends, improve planning, and make informed decisions. Solution4U develops reporting and analytics solutions that convert complex data into clear business insights.",
    icon: BarChart3,
    features: [
      "Business intelligence dashboards",
      "Data visualization",
      "Automated reporting",
      "Performance analytics",
      "Forecasting solutions",
      "Data integration",
    ],
    benefits: [
      "Better business decisions",
      "Improved performance visibility",
      "Reduced manual reporting",
      "Faster access to insights",
      "Centralized data analysis",
      "Clear operational reporting",
    ],
    process: [
      {
        title: "Data Discovery",
        description:
          "We identify your data sources, reporting requirements, and business metrics.",
      },
      {
        title: "Analytics Design",
        description:
          "We define dashboards, reports, visualizations, and performance indicators.",
      },
      {
        title: "Development",
        description:
          "Our team builds and integrates the required analytics solution.",
      },
      {
        title: "Optimization",
        description:
          "We refine reports and dashboards based on business usage and feedback.",
      },
    ],
    accent: "from-cyan-600 to-teal-500",
    metaTitle: "Business Analytics, BI & Dashboard Solutions | Solution4U",
    metaDescription:
      "Improve decision-making with business analytics, BI dashboards, data visualization, reporting automation, and performance insights.",
  },
  {
    slug: "security-solutions",
    title: "Security Solutions",
    shortTitle: "Security",
    tagline: "Protect your infrastructure, systems, applications, and data.",
    description:
      "Strengthen your technology environment with enterprise cybersecurity, access control, endpoint protection, and threat management.",
    overview:
      "Security is essential to every reliable technology environment. Solution4U helps organizations protect networks, endpoints, systems, applications, and critical business data through layered security controls and proactive monitoring.",
    icon: ShieldCheck,
    features: [
      "Network security",
      "Endpoint protection",
      "Access control",
      "Threat monitoring",
      "Security assessment",
      "Data protection",
    ],
    benefits: [
      "Reduced security exposure",
      "Improved access control",
      "Stronger data protection",
      "Better incident visibility",
      "Protected business operations",
      "Improved infrastructure security",
    ],
    process: [
      {
        title: "Security Assessment",
        description:
          "We evaluate systems, networks, access controls, risks, and vulnerabilities.",
      },
      {
        title: "Security Architecture",
        description:
          "We design layered security controls based on your technology environment.",
      },
      {
        title: "Implementation",
        description:
          "Our team deploys and configures the required security solutions.",
      },
      {
        title: "Monitoring & Improvement",
        description:
          "We monitor security performance and help improve protections over time.",
      },
    ],
    accent: "from-blue-700 to-violet-600",
    metaTitle: "Cybersecurity & Enterprise Security Solutions | Solution4U",
    metaDescription:
      "Protect your business with network security, endpoint protection, access control, threat monitoring, and enterprise cybersecurity solutions.",
  },
  {
    slug: "erp-business-applications",
    title: "ERP & Business Applications",
    shortTitle: "ERP Applications",
    tagline: "Automate operations with customized business applications.",
    description:
      "Streamline operations with ERP and business applications that improve automation, collaboration, efficiency, and control.",
    overview:
      "Customized ERP systems and business applications help organizations centralize information, automate workflows, reduce manual work, and improve operational visibility. Solution4U designs applications around your processes and business requirements.",
    icon: Workflow,
    features: [
      "Custom ERP development",
      "Workflow automation",
      "Business application development",
      "System integration",
      "Operational dashboards",
      "Process digitization",
    ],
    benefits: [
      "Improved process efficiency",
      "Reduced manual operations",
      "Centralized business data",
      "Better workflow visibility",
      "Improved collaboration",
      "Scalable business applications",
    ],
    process: [
      {
        title: "Process Analysis",
        description:
          "We study your workflows, departments, data, challenges, and operational requirements.",
      },
      {
        title: "Application Design",
        description:
          "We design the application structure, modules, integrations, and user experience.",
      },
      {
        title: "Development & Integration",
        description:
          "Our team develops, tests, and integrates the application with your systems.",
      },
      {
        title: "Deployment & Support",
        description:
          "We deploy the solution and provide maintenance, updates, and support.",
      },
    ],
    accent: "from-fuchsia-600 to-purple-600",
    metaTitle: "ERP Solutions & Custom Business Applications | Solution4U",
    metaDescription:
      "Streamline operations with custom ERP solutions, workflow automation, system integrations, and business application development.",
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
