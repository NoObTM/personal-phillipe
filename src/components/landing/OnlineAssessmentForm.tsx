import { useState } from "react";
import { z } from "zod";
import { ClipboardCheck, Send, User, Ruler, Activity, Pill, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const WHATSAPP = "5513974255999";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  idade: z.string().trim().min(1, "Informe a idade").max(3),
  altura: z.string().trim().min(1, "Informe a altura").max(10),
  peso: z.string().trim().min(1, "Informe o peso").max(10),
  objetivos: z.array(z.string()).min(1, "Escolha ao menos um objetivo"),
  nivel: z.string().min(1, "Selecione o nível"),
  treinosSemana: z.string().trim().max(2).optional().or(z.literal("")),
  cardio: z.string().optional(),
  sono: z.string().optional(),
  agua: z.string().trim().max(5).optional().or(z.literal("")),
  suplementos: z.string().trim().max(300).optional().or(z.literal("")),
  medicacao: z.string().trim().max(300).optional().or(z.literal("")),
  incomoda: z.string().trim().max(500).optional().or(z.literal("")),
  resultado: z.string().trim().max(500).optional().or(z.literal("")),
  buscou: z.string().trim().max(500).optional().or(z.literal("")),
});

const OBJETIVOS = ["Hipertrofia", "Definição", "Emagrecimento"];
const NIVEIS = ["Iniciante", "Intermediário", "Avançado"];

const SectionTitle = ({ icon: Icon, children }: { icon: typeof User; children: React.ReactNode }) => (
  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gold/30">
    <div className="w-8 h-8 rounded-md gradient-primary flex items-center justify-center shadow-red">
      <Icon className="w-4 h-4 text-primary-foreground" />
    </div>
    <h3 className="font-display text-lg uppercase tracking-wide text-gold">{children}</h3>
  </div>
);

const OnlineAssessmentForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [objetivos, setObjetivos] = useState<string[]>([]);
  const [nivel, setNivel] = useState("");
  const [cardio, setCardio] = useState("");
  const [sono, setSono] = useState("");

  const toggleObjetivo = (o: string) => {
    setObjetivos((prev) => (prev.includes(o) ? prev.filter((x) => x !== o) : [...prev, o]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nome: String(fd.get("nome") || ""),
      idade: String(fd.get("idade") || ""),
      altura: String(fd.get("altura") || ""),
      peso: String(fd.get("peso") || ""),
      objetivos,
      nivel,
      treinosSemana: String(fd.get("treinosSemana") || ""),
      cardio,
      sono,
      agua: String(fd.get("agua") || ""),
      suplementos: String(fd.get("suplementos") || ""),
      medicacao: String(fd.get("medicacao") || ""),
      incomoda: String(fd.get("incomoda") || ""),
      resultado: String(fd.get("resultado") || ""),
      buscou: String(fd.get("buscou") || ""),
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const first = result.error.issues[0];
      toast({
        title: "Verifique o formulário",
        description: first?.message ?? "Preencha os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const d = result.data;
    const lines = [
      "*AVALIAÇÃO CORPORAL ONLINE*",
      "",
      "*DADOS*",
      `Nome: ${d.nome}`,
      `Idade: ${d.idade}`,
      `Altura: ${d.altura}`,
      `Peso atual: ${d.peso}`,
      `Objetivo: ${d.objetivos.join(", ")}`,
      `Nível de treino: ${d.nivel}`,
      "",
      "*ROTINA E HÁBITOS*",
      `Treinos por semana: ${d.treinosSemana || "-"}`,
      `Cardio: ${d.cardio || "-"}`,
      `Qualidade do sono: ${d.sono || "-"}`,
      `Água (litros/dia): ${d.agua || "-"}`,
      "",
      "*SUPLEMENTAÇÃO / MEDICAÇÃO*",
      `Suplementos: ${d.suplementos || "-"}`,
      `Medicação: ${d.medicacao || "-"}`,
      "",
      "*PERCEPÇÃO*",
      `O que mais te incomoda: ${d.incomoda || "-"}`,
      `Onde quer mais resultado: ${d.resultado || "-"}`,
      `Por que buscou ajuda agora: ${d.buscou || "-"}`,
    ];
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({ title: "Pronto!", description: "Abrindo o WhatsApp para enviar sua avaliação." });
    setSubmitting(false);
  };

  return (
    <section id="avaliacao" className="py-20 sm:py-28 bg-secondary/30 border-y border-border">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.25em]">
            <ClipboardCheck className="w-4 h-4" />
            Avaliação corporal online
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase">
            Comece sua <span className="text-gold">consultoria</span>
          </h2>
          <div className="mt-3 h-1 w-16 gradient-gold rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl">
            Preencha o formulário abaixo. Ao enviar, suas informações vão direto para meu WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto rounded-2xl bg-card border border-border p-6 sm:p-10 shadow-red space-y-10"
        >
          {/* Dados do aluno */}
          <div>
            <SectionTitle icon={User}>Dados do aluno</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="nome">Nome completo *</Label>
                <Input id="nome" name="nome" maxLength={100} required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="idade">Idade *</Label>
                <Input id="idade" name="idade" inputMode="numeric" maxLength={3} required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="altura">Altura *</Label>
                <Input id="altura" name="altura" placeholder="ex: 1,75m" maxLength={10} required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="peso">Peso atual *</Label>
                <Input id="peso" name="peso" placeholder="ex: 78 kg" maxLength={10} required className="mt-1.5" />
              </div>
            </div>

            <div className="mt-5">
              <Label>Objetivo *</Label>
              <div className="mt-2 flex flex-wrap gap-3">
                {OBJETIVOS.map((o) => (
                  <label
                    key={o}
                    className="flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-2 cursor-pointer hover:border-gold transition-colors"
                  >
                    <Checkbox
                      checked={objetivos.includes(o)}
                      onCheckedChange={() => toggleObjetivo(o)}
                    />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <Label>Nível de treino *</Label>
              <RadioGroup value={nivel} onValueChange={setNivel} className="mt-2 flex flex-wrap gap-3">
                {NIVEIS.map((n) => (
                  <label
                    key={n}
                    className="flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-2 cursor-pointer hover:border-gold transition-colors"
                  >
                    <RadioGroupItem value={n} id={`nivel-${n}`} />
                    <span className="text-sm">{n}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Rotina e hábitos */}
          <div>
            <SectionTitle icon={Activity}>Rotina e hábitos</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="treinosSemana">Treinos por semana</Label>
                <Input id="treinosSemana" name="treinosSemana" inputMode="numeric" maxLength={2} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="agua">Água (litros/dia)</Label>
                <Input id="agua" name="agua" placeholder="ex: 2,5" maxLength={5} className="mt-1.5" />
              </div>
              <div>
                <Label>Faz cardio?</Label>
                <RadioGroup value={cardio} onValueChange={setCardio} className="mt-2 flex gap-3">
                  {["Sim", "Não"].map((v) => (
                    <label key={v} className="flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-2 cursor-pointer hover:border-gold transition-colors">
                      <RadioGroupItem value={v} id={`cardio-${v}`} />
                      <span className="text-sm">{v}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <Label>Qualidade do sono</Label>
                <RadioGroup value={sono} onValueChange={setSono} className="mt-2 flex flex-wrap gap-3">
                  {["Ruim", "Regular", "Boa"].map((v) => (
                    <label key={v} className="flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-2 cursor-pointer hover:border-gold transition-colors">
                      <RadioGroupItem value={v} id={`sono-${v}`} />
                      <span className="text-sm">{v}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Suplementação */}
          <div>
            <SectionTitle icon={Pill}>Suplementação / Medicação</SectionTitle>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="suplementos">Suplementos em uso</Label>
                <Input id="suplementos" name="suplementos" maxLength={300} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="medicacao">Medicação em uso</Label>
                <Input id="medicacao" name="medicacao" maxLength={300} className="mt-1.5" />
              </div>
            </div>
          </div>

          {/* Percepção */}
          <div>
            <SectionTitle icon={Target}>Percepção do aluno</SectionTitle>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="incomoda">O que mais te incomoda?</Label>
                <Textarea id="incomoda" name="incomoda" maxLength={500} rows={2} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="resultado">Onde quer mais resultado?</Label>
                <Textarea id="resultado" name="resultado" maxLength={500} rows={2} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="buscou">Por que buscou ajuda agora?</Label>
                <Textarea id="buscou" name="buscou" maxLength={500} rows={2} className="mt-1.5" />
              </div>
            </div>
          </div>

          <Button type="submit" variant="gold" size="lg" className="w-full" disabled={submitting}>
            <Send className="w-5 h-5 mr-2" />
            Enviar avaliação no WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
};

export default OnlineAssessmentForm;
