import { createFileRoute } from "@tanstack/react-router";
import { Check, CircleHelp, Video, MessageCircle, Radio, CalendarRange, MonitorPlay } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/landing/Header";
import { Logo } from "@/components/landing/Logo";
import { OfferButton } from "@/components/landing/OfferButton";
import { faqs, included, modules, outcomes, pains, weeks } from "@/components/landing/data";
import { course } from "@/config/course";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";

const title = "Moda nos Marketplaces | Treinamento Viver de Loja com Junior Martins";
const description =
  "Aprenda a estruturar sua loja de roupas na Shopee, Mercado Livre, SHEIN e TikTok Shop: produtos, anúncios, margens e rotina. Primeira turma.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const channels = ["Shopee", "Mercado Livre", "SHEIN", "TikTok Shop"];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">{children}</p>;
}

function Index() {
  return (
    <div id="topo" className="bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-lilac pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-2">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-semibold text-secondary shadow-sm">
                <span className="h-2 w-2 rounded-full bg-success" aria-hidden /> Treinamento online • Primeira turma
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
                Sua roupa merece vender onde os clientes <em className="text-accent">já estão comprando.</em>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                Saia do zero e monte sua loja de moda nos marketplaces com método: produto certo, anúncio que mostra bem a peça e preço que deixa margem no seu bolso.
              </p>
              <p className="mt-4 text-muted-foreground">
                Um passo a passo prático, do plano da loja ao primeiro pedido embalado, para revendedores e fabricantes que querem começar na Shopee, no Mercado Livre, na SHEIN e no TikTok Shop.
              </p>
              <div className="mt-8">
                <a href="#investimento" className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-base font-bold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-110">
                  Quero vender moda nos marketplaces
                </a>
                <p className="mt-4 text-sm text-muted-foreground">Primeira turma por {course.promoPrice} • Aulas ao vivo + gravações + grupo de dúvidas</p>
              </div>
            </div>
            <div className="relative">
              <img src={hero} alt="Roupas dobradas, arara e pacotes prontos para envio" width={1200} height={1408} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
              <div className="absolute -bottom-5 left-5 rounded-2xl bg-background px-5 py-4 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Do produto ao pedido</p>
                <p className="font-display text-lg font-bold text-primary">10 módulos práticos</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border bg-background">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-6 text-muted-foreground">
              <span className="text-xs uppercase tracking-widest">Canais abordados</span>
              {channels.map((c) => <span key={c} className="font-display text-lg font-semibold text-secondary/70">{c}</span>)}
            </div>
          </div>
        </section>

        {/* Identificação */}
        <section id="treinamento" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Para quem é</Eyebrow>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">Você já entende de roupa. O que falta é o caminho para vender online.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Muita gente trava antes de começar porque tenta aprender tudo solto: um vídeo sobre cadastro aqui, uma dica de preço ali. Entre escolher a peça e enviar o pedido existem decisões que definem se a venda vale a pena. Aqui você aprende essas etapas na ordem certa.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pains.map((p) => (
              <li key={p} className="flex gap-3 rounded-2xl border border-border p-5">
                <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden />
                <span className="font-medium">“{p}”</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Se você se viu em pelo menos uma dessas frases, este treinamento foi feito para você.</p>
          <div className="mt-10"><a href="#investimento" className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-center text-base font-bold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-110">Quero organizar minha loja online</a></div>
        </section>

        {/* Aprendizado */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>O que você vai aprender</Eyebrow>
              <h2 className="text-3xl font-bold md:text-5xl">Ao final, você terá uma loja estruturada, e não só uma conta aberta.</h2>
              <img src={studio} alt="Estúdio simples para fotografar roupas, com vestido no manequim e câmera" loading="lazy" width={1200} height={912} className="mt-10 aspect-[4/3] w-full rounded-3xl object-cover" />
            </div>
            <ul className="grid content-center gap-3">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-4 rounded-2xl bg-primary-foreground/8 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success"><Check className="h-4 w-4" aria-hidden /></span>
                  <span className="text-base">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conteúdo */}
        <section id="conteudo" className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Eyebrow>Conteúdo do curso</Eyebrow>
          <h2 className="text-3xl font-bold text-primary md:text-5xl">10 módulos com aplicação prática em cada um.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Cada módulo termina com uma tarefa para aplicar no seu negócio: você sai com planilhas, checklists e anúncios prontos, não só com anotações. Revenda e fabricação própria são caminhos diferentes, e você prioriza o que faz sentido para o seu modelo.
          </p>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {modules.map((m, i) => (
              <AccordionItem key={m.title} value={`m${i}`} className="rounded-2xl border border-border px-5 data-[state=open]:bg-lilac">
                <AccordionTrigger className="gap-4 py-5 text-left hover:no-underline">
                  <span className="flex items-start gap-4">
                    <span className="font-display text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-lg font-bold text-primary">{m.title}</span>
                      <span className="block text-sm font-normal text-muted-foreground">{m.desc}</span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-12 text-base">
                  <ul className="list-disc space-y-1.5 pl-4">{m.topics.map((t) => <li key={t}>{t}</li>)}</ul>
                  <p className="mt-4 rounded-xl bg-background p-3 text-sm"><strong className="text-success">Aplicação prática:</strong> {m.practice}</p>
                  {m.note && <p className="mt-3 text-sm text-muted-foreground">Observação: {m.note}</p>}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10"><a href="#investimento" className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-center text-base font-bold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-110">Quero acesso aos 10 módulos</a></div>
        </section>

        {/* Formato */}
        <section className="bg-lilac">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Eyebrow>Formato</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-bold text-primary md:text-5xl">Você não aprende sozinho: aulas ao vivo, gravações e dúvidas respondidas.</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [MonitorPlay, "Treinamento online"],
                [Radio, "Aulas inicialmente ao vivo"],
                [Video, "Área de estudos com gravações das aulas"],
                [MessageCircle, "Grupo de WhatsApp para dúvidas"],
                [CircleHelp, "Dois plantões de dúvidas ao vivo"],
                [CalendarRange, "Previsão inicial de aproximadamente dois meses"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof Video;
                return (
                  <li key={label as string} className="flex items-center gap-4 rounded-2xl bg-background p-5">
                    <I className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                    <span className="font-semibold">{label as string}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-14">
              <h3 className="text-2xl font-bold text-primary">Proposta de organização em oito semanas</h3>
              <p className="mt-2 text-sm text-muted-foreground">Cronograma em proposta. Datas, horários, carga horária e duração final ainda serão definidos.</p>
              <ol className="mt-8 grid gap-4 md:grid-cols-4">
                {weeks.map((w) => (
                  <li key={w.w} className="rounded-2xl border-t-4 border-primary bg-background p-5">
                    <p className="text-sm font-bold text-accent">{w.w}</p>
                    <p className="mt-2 font-medium">{w.t}</p>
                    {w.plantao && <p className="mt-3 inline-block rounded-full bg-warning/15 px-3 py-1 text-xs font-semibold text-secondary">{w.plantao}</p>}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="mx-auto grid max-w-6xl gap-6 px-5 pt-20 md:grid-cols-2 md:pt-28">
          <div className="rounded-3xl border-2 border-success/40 p-8">
            <h2 className="text-2xl font-bold text-primary">É para você se…</h2>
            <ul className="mt-5 space-y-3">
              {["Revende ou fabrica roupas e ainda não vende em marketplaces.", "Quer começar com organização, sabendo quanto sobra em cada venda.", "Prefere um passo a passo prático a juntar dicas soltas.", "Está disposto a aplicar as tarefas de cada módulo no seu negócio."].map((t) => (
                <li key={t} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-success" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-muted p-8">
            <h2 className="text-2xl font-bold text-primary">Não é para você se…</h2>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {["Procura promessa de faturamento rápido ou lucro garantido.", "Não pretende dedicar tempo para estruturar a operação.", "Já tem uma operação avançada e busca apenas táticas de escala."].map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden className="font-bold">—</span>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Professor */}
        <section id="quem-ensina" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
          <div className="mx-auto w-full max-w-sm">
            {course.teacher.photo ? (
              <img src={course.teacher.photo} alt={`Foto de ${course.teacher.name}`} loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
            ) : (
              <div role="img" aria-label={`Iniciais de ${course.teacher.name}`} className="flex aspect-[4/5] w-full items-center justify-center rounded-[2rem] bg-primary shadow-soft">
                <span className="font-display text-8xl font-bold text-primary-foreground">JM</span>
              </div>
            )}
          </div>
          <div>
            <Eyebrow>Quem ensina</Eyebrow>
            <h2 className="text-4xl font-bold text-primary md:text-5xl">{course.teacher.name}</h2>
            <p className="mt-2 font-semibold text-secondary">{course.teacher.role}</p>
            {course.teacher.bio.map((b) => <p key={b} className="mt-5 text-lg leading-relaxed text-muted-foreground">{b}</p>)}
          </div>
        </section>

        {/* Oferta */}
        <section id="investimento" className="bg-secondary px-5 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center text-secondary-foreground">
            <Eyebrow>Investimento</Eyebrow>
            <h2 className="text-3xl font-bold md:text-5xl">Comece a construir o próximo canal de vendas da sua marca.</h2>
          </div>
          <div className="mx-auto mt-12 max-w-xl rounded-[2rem] bg-background p-8 shadow-soft md:p-10">
            <p className="text-center text-muted-foreground">Valor previsto do treinamento: <strong className="text-foreground">{course.expectedPrice}</strong></p>
            <p className="mt-6 text-center text-sm font-bold uppercase tracking-widest text-accent">Condição promocional da primeira turma</p>
            <p className="mt-1 text-center font-display text-6xl font-bold text-primary">{course.promoPrice}</p>
            <ul className="mt-8 space-y-3">
              {included.map((i) => (
                <li key={i} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-success" aria-hidden />{i}</li>
              ))}
            </ul>
            <p className="mt-6 text-center text-sm text-muted-foreground">Menos de 30% do valor previsto, exclusivo para quem entrar na primeira turma.</p>
            <OfferButton className="mt-6 w-full whitespace-normal text-center">Quero fazer parte da primeira turma</OfferButton>
            <p className="mt-5 text-center text-sm text-muted-foreground">Datas, condições de pagamento e prazo de acesso às gravações serão informados na abertura das inscrições.</p>
            <p className="mt-4 border-t border-border pt-4 text-center text-xs text-muted-foreground">Estoque, produção, embalagens, publicidade e eventuais ferramentas da operação são investimentos separados do treinamento.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Ainda com dúvida? A gente responde.</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`f${i}`}>
                <AccordionTrigger className="py-5 text-left text-base font-semibold">{q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="bg-lilac px-5 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-primary md:text-4xl">Seu próximo passo é decidir começar com método.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">10 módulos práticos, aulas ao vivo, gravações e grupo de dúvidas. Condição da primeira turma: <strong className="text-foreground">{course.promoPrice}</strong>.</p>
          <OfferButton className="mt-8 whitespace-normal">Quero fazer parte da primeira turma</OfferButton>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-primary-foreground/80">{course.name} • com {course.teacher.name}</p>
          </div>
          <p className="text-xs text-primary-foreground/70">Treinamento independente. As marcas citadas pertencem aos seus respectivos titulares.</p>
        </div>
      </footer>
    </div>
  );
}
