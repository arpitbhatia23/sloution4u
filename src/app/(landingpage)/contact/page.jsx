import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

export const metadata = {
  title: "Contact Solution4U | Cloud & IT Solutions Chandigarh",
  description:
    "Contact Solution4U for cloud services, IT infrastructure, cybersecurity, managed services, ERP solutions, staffing, and enterprise technology consulting in Chandigarh.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Solution4U | Technology Consulting Chandigarh",
    description:
      "Discuss your cloud, infrastructure, security, managed services, staffing, analytics, or ERP requirements with Solution4U.",
    url: "/contact",
    type: "website",
  },
};

const contactDetails = [
  {
    title: "Visit Our Office",
    description: "SCO 66, 1st Floor, Sector 20-C, Chandigarh",
    icon: MapPin,
    href: "https://www.google.com/maps/search/?api=1&query=SCO+66+1st+Floor+Sector+20-C+Chandigarh",
    label: "Get Directions",
  },
  {
    title: "Call Our Team",
    description: "Add your official business phone number",
    icon: Phone,
    href: "tel:+910000000000",
    label: "Call Now",
  },
  {
    title: "Email Us",
    description: "Add your official Solution4U email address",
    icon: Mail,
    href: "mailto:support@solution4u.co.in",
    label: "Send Email",
  },
  {
    title: "Business Hours",
    description: "Monday to Saturday · 10:00 AM to 8:00 PM",
    icon: Clock3,
    href: null,
    label: null,
  },
];

const serviceOptions = [
  "Infrastructure Solutions",
  "Cloud Solutions",
  "Managed Services",
  "Staffing Solutions",
  "Annual Maintenance Contract",
  "Business Analytics",
  "Security Solutions",
  "ERP & Business Applications",
  "Other Requirement",
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden  py-20 text-black sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 sm:text-sm">
              Contact Solution4U
            </p>

            <h1 className="mt-5 text-xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-3xl">
              Let&apos;s discuss your technology requirements
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
              Tell us about your cloud, infrastructure, managed services,
              cybersecurity, staffing, analytics, or business application
              requirements. Our team will help you identify the right next
              steps.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-black">
              {[
                "Cloud Consulting",
                "Infrastructure",
                "Managed IT",
                "Security",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-black/15 bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="relative z-10 -mt-8">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map(
            ({ title, description, icon: Icon, href, label }) => (
              <article
                key={title}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 text-lg font-semibold">{title}</h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>

                {href && label ? (
                  <a
                    href={href}
                    target={title === "Visit Our Office" ? "_blank" : undefined}
                    rel={
                      title === "Visit Our Office"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 hover:text-blue-800"
                  >
                    {label}
                    <ArrowRight size={15} />
                  </a>
                ) : null}
              </article>
            ),
          )}
        </div>
      </section>

      {/* Form and office details */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Contact form */}
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 sm:text-sm">
                Send an Enquiry
              </p>

              <h2 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                Tell us how we can help
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Share your requirements and a member of the Solution4U team can
                contact you.
              </p>
            </div>

            <form
              action="/api/contact"
              method="POST"
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-800"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-slate-800"
                  >
                    Company Name
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Enter company name"
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@company.com"
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-800"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91"
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-slate-800"
                >
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-800"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your current setup, challenges, and requirements."
                  className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-slate-500">
                  By submitting this form, you agree that Solution4U may contact
                  you regarding your enquiry.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Send Enquiry
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Office information */}
          <aside className="space-y-6">
            <div className="rounded-md bg-blue-800 p-7 text-white shadow-xl sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white">
                <MapPin size={24} strokeWidth={1.8} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm">
                Chandigarh Office
              </p>

              <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                Visit Solution4U
              </h2>

              <address className="mt-4 not-italic leading-7 text-blue-100">
                SCO 66, 1st Floor
                <br />
                Sector 20-C
                <br />
                Chandigarh, India
              </address>

              <a
                href="https://maps.google.com/?q=Solution4U+SCO+66+1st+Floor+Sector+20-C+Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
              >
                Open in Google Maps
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="rounded-md border border-blue-100 bg-blue-50 p-7 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-blue-700 shadow-sm">
                <MessageSquare size={21} strokeWidth={1.8} />
              </div>

              <h2 className="mt-5 text-xl font-bold sm:text-2xl">
                Need technical assistance?
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Contact our team for cloud infrastructure, server management,
                cybersecurity, networking, ERP, staffing, and managed support
                requirements.
              </p>

              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 hover:text-blue-800"
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-sm">
            <div className="border-b border-slate-200 bg-white px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-sm">
                Find Us
              </p>

              <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                SCO 66, 1st Floor, Sector 20-C, Chandigarh
              </h2>
            </div>

            <iframe
              title="Solution4U office location in Chandigarh"
              src="https://maps.google.com/?q=Solution4U+SCO+66+1st+Floor+Sector+20-C+Chandigarh&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block min-h-90 w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-full overflow-hidden rounded-md  px-7 py-12 text-center text-white sm:px-10 sm:py-16">
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 sm:text-sm">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-xl font-bold sm:text-2xl">
              Build a secure and scalable technology environment
            </h2>

            <p className="mt-5 leading-7 text-black">
              Our team can help you assess your requirements and plan the right
              infrastructure, cloud, security, or business application solution.
            </p>

            <a
              href="#contact-form"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Contact Solution4U
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
