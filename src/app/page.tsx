import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Info />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
