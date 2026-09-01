import HeroSlider from "@/components/HeroSlider";
import AboutUs from "@/components/AboutUs";
import ParkHighlights from "@/components/ParkHighlights";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import { getPosts } from "@/lib/content";

export default function Home() {
  const posts = getPosts()
    .slice(0, 4)
    .map((p) => ({ title: p.title, date: p.dateLabel, href: `/blog/${p.slug}`, category: p.category }));
  return (
    <>
      <main>
        <HeroSlider />
        <AboutUs />
        <ParkHighlights />
        <CTASection />
        <Testimonials />
        <Services />
        <Blog posts={posts} />
      </main>
    </>
  );
}
