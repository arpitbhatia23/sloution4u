import HeroSection from "@/components/Herosection";
import LogoMarquee from "@/components/logoMarque";
import ServicesSection from "@/components/serviceSection";
import WhoWeAreSection from "@/components/whoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <WhoWeAreSection />
    </>
  );
}
