import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Solution4U"
                width={220}
                height={140}
                priority
                className="h-24 w-auto"
              />
            </Link>

            <p className="mt-5 text-black leading-7">
              Solution4U provides Cloud Infrastructure, Cyber Security, Backup &
              Disaster Recovery, Infrastructure Solutions and Managed IT
              Services to help businesses operate securely and efficiently.
            </p>

            <div className="flex gap-4 mt-6">
              {/* <Link
                href="#"
                className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition"
              >
                <Facebook size={18} />
              </Link> */}

              {/* <Link
                href="#"
                className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition"
              >
                <Linkedin size={18} />
              </Link> */}

              {/* <Link
                href="#"
                className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition"
              >
                <Instagram size={18} />
              </Link> */}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-blue-400 pl-3">
              Company
            </h3>

            <ul className="space-y-4 text-black">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-600 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/blogs" className="hover:text-blue-600 transition">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-blue-400 pl-3">
              Services
            </h3>

            <ul className="space-y-4 text-black">
              <li>
                <Link
                  href="/services/cloud-solutions"
                  className="hover:text-blue-600 transition"
                >
                  Cloud Computing
                </Link>
              </li>

              <li>
                <Link
                  href="/services/security-solutions"
                  className="hover:text-blue-600 transition"
                >
                  Cyber Security
                </Link>
              </li>

              <li>
                <Link
                  href="/services/infrastructure-solutions"
                  className="hover:text-blue-600 transition"
                >
                  Infrastructure Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/services/managed-services"
                  className="hover:text-blue-600 transition"
                >
                  Managed IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-blue-400 pl-3">
              Contact
            </h3>

            <div className="space-y-5 text-black ">
              <div className="flex gap-3">
                <MapPin className="text-blue-600 mt-1" size={18} />
                <p className="hover:text-blue-600">
                  SCO-66, 1st Floor,
                  <br />
                  Sector 20-C, Chandigarh, India
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-blue-600" size={18} />
                <a
                  href="tel:+919888885456"
                  className="hover:text-blue-600 transition"
                >
                  +91 98888 85456
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-blue-600" size={18} />
                <a
                  href="mailto:support@solution4u.com"
                  className="hover:text-blue-600 transition"
                >
                  support@solution4u.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 mt-14 pt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-black text-sm text-center">
            © 2026 Solution4U. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
