import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutUs from "@/components/AboutUs";
import ParkHighlights from "@/components/ParkHighlights";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <AboutUs />
        <ParkHighlights />
        <CTASection />
        <Testimonials />
        <Services />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
