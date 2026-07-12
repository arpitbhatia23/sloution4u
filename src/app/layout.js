import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Solution4U | Enterprise Cloud, IT Infrastructure & Managed Services",
  description:
    "Solution4U provides enterprise cloud solutions, IT infrastructure, managed services, cybersecurity, networking, ERP solutions, business analytics, and technology consulting to help businesses scale securely.",
  keywords: [
    "Solution4U",
    "Cloud Solutions",
    "IT Infrastructure",
    "Managed Services",
    "Cybersecurity",
    "Network Solutions",
    "Dedicated Servers",
    "ERP Solutions",
    "Business Analytics",
    "Technology Consulting",
  ],
  alternates: {
    canonical: "https://www.solution4u.co.in",
  },
  openGraph: {
    title:
      "Solution4U | Enterprise Cloud, IT Infrastructure & Managed Services",
    description:
      "Transform your business with enterprise cloud, managed IT services, cybersecurity, infrastructure, and technology consulting.",
    url: "/",
    siteName: "Solution4U",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solution4U | Enterprise Cloud & IT Solutions",
    description:
      "Enterprise cloud, infrastructure, cybersecurity, managed services, ERP, and business technology solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <main>{children}</main>
      </body>
    </html>
  );
}
