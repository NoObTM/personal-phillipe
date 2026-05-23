import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PlanCardProps {
  name: string;
  badge?: string;
  frequency?: string;
  price: string;
  priceSuffix?: string;
  note?: string;
  features: string[];
  highlighted?: boolean;
  ctaHref?: string;
  category?: "Presencial" | "Consultoria Online";
}

const WHATSAPP = "5513974255999";

const PlanCard = ({
  name,
  badge,
  frequency,
  price,
  priceSuffix = "/mês",
  note,
  features,
  highlighted,
  ctaHref,
  category,
}: PlanCardProps) => {
  const waHref = category
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        `Olá! Vim pelo site e tenho interesse no plano ${category} - ${name}${frequency ? ` (${frequency})` : ""}.`
      )}`
    : ctaHref ?? "#contato";
  const isExternal = waHref.startsWith("http");
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-card p-6 sm:p-7 flex flex-col transition-all duration-300",
        highlighted
          ? "border-gold shadow-gold scale-[1.02]"
          : "border-border hover:border-primary/60 hover:shadow-red"
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full gradient-gold text-gold-foreground text-[11px] font-bold uppercase tracking-wider">
          <Star className="w-3 h-3 fill-current" />
          {badge}
        </div>
      )}

      <div className="space-y-1">
        {frequency && (
          <div className="text-xs font-semibold text-primary uppercase tracking-widest">
            {frequency}
          </div>
        )}
        <h3 className="font-display text-2xl sm:text-3xl uppercase">{name}</h3>
      </div>


      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            <span className="text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className="mt-7"
        variant={highlighted ? "gold" : "hero"}
        size="lg"
      >
        <a
          href={waHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          Quero esse plano
        </a>
      </Button>
    </div>
  );
};

export default PlanCard;
