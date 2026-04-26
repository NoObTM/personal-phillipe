import heroImg from "@/assets/hero-trainer.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luis Phillipe — Personal Trainer"
        className="absolute inset-0 w-full h-full object-cover object-[70%_top] md:object-cover md:scale-85 origin-center"
        width={1080}
        height={1920}
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-background/40 md:bg-background/20" />

      <div className="relative z-10 container px-4 pt-28 pb-16 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-red" />
            Vagas limitadas
          </span>

          <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] uppercase">
            Construa o<br />
            <span className="text-primary">corpo</span> que<br />
            você <span className="text-gold">merece</span>.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-md">
            Treinos personalizados, acompanhamento real e resultado.
            Presencial ou consultoria online em qualquer lugar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" variant="hero" className="group">
              <a href="#planos">
                Ver planos
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline-gold">
              <a href="#contato">Falar no WhatsApp</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-gold" />
            Atendimento em Cubatão/SP
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
