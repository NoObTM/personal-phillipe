import { Dumbbell, Globe } from "lucide-react";
import PlanCard, { PlanCardProps } from "./PlanCard";

const presencial: PlanCardProps[] = [
  {
    name: "Essencial",
    frequency: "3x por semana",
    price: "320",
    features: [
      "Treinos personalizados",
      "Acompanhamento presencial",
      "Correção de execução",
      "Suporte via WhatsApp",
    ],
  },
  {
    name: "Intensivo",
    frequency: "5x por semana",
    price: "550",
    badge: "Premium",
    highlighted: true,
    features: [
      "Treinos personalizados",
      "Acompanhamento presencial diário",
      "Correção de execução",
      "Suporte via WhatsApp",
      "Ajustes semanais de treino",
    ],
  },
];

const online: PlanCardProps[] = [
  {
    name: "Mensal",
    frequency: "Online",
    price: "100",
    features: [
      "Treino personalizado",
      "Suporte via WhatsApp",
      "Ajustes mensais",
    ],
  },
  {
    name: "Semestral",
    frequency: "Online · 6 meses",
    price: "83",
    priceSuffix: "/mês",
    note: "R$ 500 à vista · economize mais",
    badge: "Mais escolhido",
    highlighted: true,
    features: [
      "Treino personalizado",
      "Acompanhamento completo",
      "Ajustes contínuos",
      "Evolução planejada",
    ],
  },
  {
    name: "Trimestral",
    frequency: "Online · 3 meses",
    price: "90",
    priceSuffix: "/mês",
    note: "R$ 270 à vista",
    features: [
      "Treino personalizado",
      "Suporte contínuo",
      "Ajustes estratégicos",
    ],
  },
];

const SectionHeader = ({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: typeof Dumbbell;
  eyebrow: string;
  title: string;
}) => (
  <div className="flex flex-col items-center text-center mb-10">
    <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.25em]">
      <Icon className="w-4 h-4" />
      {eyebrow}
    </div>
    <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase">{title}</h2>
    <div className="mt-3 h-1 w-16 gradient-gold rounded-full" />
  </div>
);

const Plans = () => {
  return (
    <section id="planos" className="py-20 sm:py-28">
      <div className="container px-4">
        <SectionHeader icon={Dumbbell} eyebrow="Planos presenciais" title="Treine ao meu lado" />
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {presencial.map((p) => (
            <PlanCard key={p.name} {...p} category="Presencial" />
          ))}
        </div>

        <div className="mt-24">
          <SectionHeader icon={Globe} eyebrow="Consultoria online" title="De qualquer lugar" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {online.map((p) => (
              <PlanCard key={p.name} {...p} category="Consultoria Online" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
