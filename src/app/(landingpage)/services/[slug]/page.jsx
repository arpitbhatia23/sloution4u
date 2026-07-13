import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";

import { getServiceBySlug, services } from "@/data/services";
import Image from "next/image";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Solution4U",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const image = service.image;

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden  py-20 text-white md:py-28">
        <Image
          src={image}
          alt="LaptopDoc - Best laptop repair shop in Tricity Chandigarh"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-white"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight size={15} />

            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>

            <ChevronRight size={15} />

            <span className="text-white">{service.shortTitle}</span>
          </nav>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                Solution4U Services
              </p>

              <h1 className="mt-5 text-xl font-bold leading-tight tracking-tight md:text-3xl">
                {service.title}
              </h1>

              <p className="mt-5 max-w-3xl text-xl font-medium text-white">
                {service.tagline}
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
                {service.description}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
                >
                  Discuss Your Requirements
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-black/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <ArrowLeft size={17} />
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Service Overview
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              Technology designed around your business requirements
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              {service.overview}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 hover:text-blue-800"
            >
              Talk to our specialists
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-md border border-blue-100 bg-blue-50 p-7 md:p-9">
            <h2 className="text-2xl font-bold">What this service includes</h2>

            <ul className="mt-7 space-y-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={15} strokeWidth={2.5} />
                  </span>

                  <span className="leading-7 text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Business Benefits
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              How {service.shortTitle.toLowerCase()} can support your business
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <article
                key={benefit}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <p className="text-sm font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 text-lg font-semibold">{benefit}</h3>
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
              Our Process
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
              From assessment to ongoing support
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-md border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>

                <p className="mt-4 leading-7 text-black">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Related Services
              </p>

              <h2 className="mt-4 text-xl font-bold tracking-tight md:text-3xl">
                Explore more technology solutions
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              View all services
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedServices.map((item) => {
              const img = item.image;

              return (
                <article
                  key={item.slug}
                  className="group rounded-md border border-slate-200 bg-white  shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div
                    className={`flex  items-center justify-center   text-white`}
                  >
                    <Image
                      src={img}
                      height={500}
                      width={500}
                      alt={`${item.title} image`}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold p-2">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 p-2">
                    {item.description}
                  </p>

                  <Link
                    href={`/services/${item.slug}`}
                    className="mt-6 inline-flex items-center gap-2 p-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-full overflow-hidden rounded-md  px-7 py-14 text-center text-black md:px-12 md:py-20">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Solution4U
            </p>

            <h2 className="mt-5 text-xl font-bold tracking-tight md:text-3xl">
              Need a customized {service.shortTitle.toLowerCase()} solution?
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-black">
              Tell us about your requirements and our team will help you plan a
              secure, scalable, and reliable solution.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Contact Our Team
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
