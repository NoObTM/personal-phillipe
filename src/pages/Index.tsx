import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Plans from "@/components/landing/Plans";
import OnlineAssessmentForm from "@/components/landing/OnlineAssessmentForm";
import Assessment from "@/components/landing/Assessment";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Luis Phillipe — Personal Trainer.";
    const desc =
      "Treinos personalizados presenciais e consultoria online. Vagas limitadas.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Plans />
      <OnlineAssessmentForm />
      <Assessment />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
