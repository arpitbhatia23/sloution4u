import Link from "next/link";
import {
  Cloud,
  DatabaseBackup,
  Facebo,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white text-black border border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Company */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Solution4U"
                width={260}
                height={80}
                priority
                className="w-35  lg:w-45 h-14 object-cover"
              />
            </Link>
            <p className="mt-6 leading-7 text-black">
              Solution4U delivers enterprise cloud infrastructure,
              cybersecurity, backup & disaster recovery and managed IT solutions
              that help businesses grow securely.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg">Company</h3>

            <ul className="mt-6 space-y-3">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg">Services</h3>

            <ul className="mt-6 space-y-3">
              
                <li>
                  <Link href={"/services/cloud-solutions"}>
                  Cloud Computing
                  </Link>
                  </li>
              
                <li>
              <Link href={"/services/security-solutions"}>
                  Cyber Security
              </Link>
                  </li>

                <li>
              <Link href={"/services/infrastructure-solutions"}>
                  Infrastructure Solutions
              </Link>
                  </li>
                <li>
              <Link href={"/services/managed-services"}>
                  Managed IT
              </Link>
                  </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg">Contact</h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li>📍 sco-66 1st floor sector 20-c chandigarh</li>
              <li>📞 +91 XXX XXX XXX</li>
              <li>✉ support@solution4u.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-sm font-semibold text-black">
            © 2026 Solution4U. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
