
import Navbar from "@/components/Headers";
import Footer from "@/components/Footer";





export default function LandingPageLayout({ children }) {
  return (
   <>
        <Navbar />
        <main>{children}</main>
        <Footer />
   </>
     
  );
}
