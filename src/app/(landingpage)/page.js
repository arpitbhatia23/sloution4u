import CloudBenefitsSection from "@/components/cloudBenifit";
import HeroSection from "@/components/Herosection";
import HomeFaqSection from "@/components/HomeFaq";
import LogoMarquee from "@/components/logoMarque";
import MissionVisionSection from "@/components/Mission";
import ServicesSection from "@/components/serviceSection";
import WhoWeAreSection from "@/components/whoWeAre";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <WhoWeAreSection />
      <CloudBenefitsSection />
      <MissionVisionSection />
      <HomeFaqSection />
    </>
  );
}
