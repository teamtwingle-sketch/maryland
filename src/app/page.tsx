import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countries from "@/components/Countries";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Countries />
      <SuccessStories />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
