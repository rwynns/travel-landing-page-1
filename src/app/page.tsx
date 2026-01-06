import Hero from "@/components/sections/Hero";
import Packages from "@/components/sections/Packages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Schedule from "@/components/sections/Schedule";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Packages />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Gallery />
      <Schedule />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
