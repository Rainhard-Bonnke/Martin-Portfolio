import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkGallery from "@/components/WorkGallery";
import Experience from "@/components/Experience";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <WorkGallery />
      <Experience />
      <CtaBand />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
