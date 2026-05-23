import { Button } from "@/components/ui/button";
import { MessageCircle, Flame } from "lucide-react";

const WHATSAPP = "5513974255999";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Vim pelo site e quero saber mais sobre os planos."
)}`;

const Contact = () => (
  <section id="contato" className="py-20 sm:py-28 relative overflow-hidden">
    <div className="absolute inset-0 gradient-dark" />
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

    <div className="container px-4 relative">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.25em]">
          <Flame className="w-4 h-4" />
          Vagas limitadas
        </div>
        <h2 className="mt-3 font-display text-4xl sm:text-6xl uppercase leading-tight">
          Pronto para <span className="text-primary">começar</span>?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Me chama no WhatsApp e vamos montar o melhor plano pra você.
          Resposta rápida, sem enrolação.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" variant="hero" className="animate-pulse-red">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              (13) 97425-5999
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
