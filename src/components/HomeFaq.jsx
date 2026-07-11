import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is cloud computing?",
    answer:
      "Cloud computing provides servers, storage, applications, networking, and other computing resources through secure remote infrastructure rather than relying only on physical systems at your office.",
  },
  {
    question: "Where will my business data be stored?",
    answer:
      "Your data may be stored in secure cloud data centres, private infrastructure, or hybrid environments depending on your security, compliance, performance, and operational requirements.",
  },
  {
    question: "Do I need to upgrade my existing hardware?",
    answer:
      "Not necessarily. Cloud and virtualization solutions can reduce the need for frequent hardware upgrades by allowing resources to scale based on your actual business needs.",
  },
  {
    question: "Can Solution4U manage our infrastructure?",
    answer:
      "Yes. Managed services may include server monitoring, system maintenance, performance optimization, incident response, backup oversight, and ongoing technical support.",
  },
  {
    question: "Can you migrate our existing applications to the cloud?",
    answer:
      "Yes. Solution4U can assess your current environment, identify dependencies, plan the migration, and help move applications, workloads, and data securely.",
  },
];

export default function HomeFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 sm:text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Answers to common cloud and infrastructure questions
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Understand how cloud computing, managed services, security, and
            infrastructure modernization can support your business.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Ask Our Experts
          </Link>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-md border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-sm sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-semibold text-slate-950 sm:text-lg">
                  {faq.question}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-open:rotate-180 group-open:bg-blue-600 group-open:text-white">
                  <ChevronDown size={18} />
                </span>
              </summary>

              <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
