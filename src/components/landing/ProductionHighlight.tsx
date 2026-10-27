import { Check, Scissors } from "lucide-react";
import { producaoTopics } from "./data";

export function ProductionHighlight() {
  return (
    <section aria-labelledby="producao-titulo" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lilac text-primary"><Scissors className="h-5 w-5" aria-hidden /></span>
                <p className="text-xs font-bold uppercase tracking-wide text-accent sm:text-sm">Também incluído no treinamento</p>
              </div>
              <h2 id="producao-titulo" className="text-3xl font-bold leading-tight text-primary md:text-4xl">Quer aprender a produzir suas próprias peças? Vamos mostrar por onde começar.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>Além de aprender a vender nos marketplaces, você terá um módulo dedicado a entender como organizar a produção das próprias roupas — mesmo que nunca tenha fabricado uma peça.</p>
                <p>Você vai conhecer as etapas para escolher um modelo, buscar profissionais parceiros, planejar o primeiro lote e calcular os custos de produção.</p>
              </div>
            </div>
            <div className="border-t border-border bg-lilac/60 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {producaoTopics.map(topic => <li key={topic} className="flex items-start gap-3 text-base leading-relaxed"><Check className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden /><span>{topic}</span></li>)}
              </ul>
            </div>
          </div>
          <div className="border-t border-border px-6 py-6 sm:px-8 lg:px-10">
            <p className="border-l-2 border-success pl-4 font-semibold leading-relaxed text-primary">Você não precisa saber costurar. O foco é aprender a organizar a produção com profissionais parceiros.</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">Um conteúdo para quem deseja explorar a fabricação própria, sem deixar de lado o caminho da compra para revenda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
