import { Ruler, Target, ClipboardList } from "lucide-react";

const items = [
  { icon: Ruler, title: "Medidas corporais", desc: "Avaliação completa do seu ponto de partida." },
  { icon: Target, title: "Análise de objetivos", desc: "Estratégia alinhada ao que você quer alcançar." },
  { icon: ClipboardList, title: "Direcionamento de treino", desc: "Plano sob medida para evoluir com segurança." },
];

const Assessment = () => (
  <section className="py-20 sm:py-24 bg-secondary/30 border-y border-border">
    <div className="container px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
          Avaliação física
        </div>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase">
          Comece com o <span className="text-gold">pé direito</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Inclusa em todos os planos presenciais. Saiba exatamente onde você está
          e até onde pode chegar.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl bg-card border border-border p-6 hover:border-gold transition-colors"
          >
            <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shadow-red">
              <Icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="mt-4 font-display text-xl uppercase">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Assessment;
