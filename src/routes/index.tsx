import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, CircleHelp, Video, MessageCircle, Radio, ArrowDown, Package, Scissors } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CoursePrice } from "@/components/landing/CoursePrice";
import { ProductionHighlight } from "@/components/landing/ProductionHighlight";
import { Header } from "@/components/landing/Header";
import { Logo } from "@/components/landing/Logo";
import { OfferButton } from "@/components/landing/OfferButton";
import { Consentimento } from "@/components/landing/Consentimento";
import { obterFaqs, included, modules, pilares, pains, perfil } from "@/components/landing/data";
import { configuracaoCurso, formatarReais, canais, identidade, dataTreinamentoFormatada } from "@/config/curso";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";

const title = "Moda nos Marketplaces | Viver de Loja com Junior Martins";
const description = "Treinamento para revendedores e fabricantes de roupas: organize produtos, preços, anúncios e operação na Shopee, no Mercado Livre e na SHEIN.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-bold uppercase text-accent">{children}</p>;
}
const formatos = [
  { icon: Radio, title: "Aulas online ao vivo", text: "Para acompanhar explicações e demonstrações." },
  { icon: Video, title: "Gravações na área de estudos", text: "Para rever etapas e retomar explicações." },
  { icon: MessageCircle, title: "Grupo de WhatsApp", text: "Espaço para dúvidas relacionadas ao treinamento." },
  { icon: CircleHelp, title: "Dois plantões de dúvidas ao vivo", text: "Em grupo para os alunos da turma, em datas estipuladas, para esclarecer os pontos que precisam de mais atenção." },
];

export function Index() {
  const previsto = formatarReais(configuracaoCurso.valorPrevisto);
  return (
    <div id="topo" className="bg-background pb-52 md:pb-0">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-secondary pt-16 text-secondary-foreground">
          <img src={hero} alt="Roupas, arara e embalagens para uma operação de vendas de moda" width={1200} height={1408} className="absolute inset-0 -z-20 h-full w-full object-cover object-right" fetchPriority="high" />
          <div className="absolute inset-0 -z-10 bg-secondary/90" />
          <div className="mx-auto max-w-6xl px-5 py-6 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-secondary-foreground/85">Treinamento online com {configuracaoCurso.professor} | {identidade.marca}</p>
              <p className="mt-4 font-display text-xl font-bold text-secondary-foreground md:mt-6 md:text-2xl">{configuracaoCurso.nome}</p>
              <h1 className="mt-3 text-[clamp(1.85rem,5vw,3rem)] font-bold leading-[1.12] text-balance md:mt-4">Você já sabe escolher roupas para vender. Agora, aprenda a levar suas peças para os marketplaces.</h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed md:mt-6 md:text-lg">Saia do “quero começar” e aprenda a organizar sua loja, cadastrar produtos e preparar sua operação para vender na Shopee, no Mercado Livre e na SHEIN — sabendo quanto precisa cobrar e quanto pode sobrar em cada venda.</p>
              <p className="mt-3 text-sm text-secondary-foreground/85 md:mt-4 md:text-base">Para revendedores e fabricantes de roupas que ainda não vendem nesses canais.</p>
              <p className="mt-4 inline-block rounded-lg border border-secondary-foreground/30 px-4 py-2 text-sm font-semibold">Início do treinamento: {dataTreinamentoFormatada()}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:mt-6 md:gap-3">
                {["Aulas online ao vivo.", "Gravações para revisar.", "Grupo de WhatsApp para dúvidas.", "Dois plantões de dúvidas ao vivo, em grupo para os alunos da turma, em datas estipuladas."].map(t => <li key={t} className="flex gap-2 text-sm"><Check className="h-5 w-5 shrink-0 text-warning" aria-hidden />{t}</li>)}
              </ul>
              <OfferButton className="mt-5 h-auto min-h-14 whitespace-normal py-3 text-center md:mt-8">Quero conhecer a primeira turma</OfferButton>
              <div className="mt-3 text-sm md:mt-4"><p className="mb-2">Condição especial de lançamento:</p><CoursePrice /></div>
            </div>
          </div>
        </section>
        <div className="border-b border-border bg-lilac">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6">
            <span className="text-xs font-semibold uppercase text-muted-foreground">Canais abordados</span>
            {canais.map(c => <span key={c} className="font-display text-lg font-semibold text-primary">{c}</span>)}
          </div>
        </div>

        <section id="treinamento" className="bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Eyebrow>O treinamento</Eyebrow>
          <h2 className="max-w-4xl text-3xl font-bold text-primary md:text-4xl">Você vê roupas sendo vendidas nos marketplaces e pensa: “Eu também poderia estar vendendo ali.”</h2>
          <p className="mt-6 text-lg text-muted-foreground">Mas, quando começa a pesquisar, aparecem as dúvidas:</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pains.map(p => <li key={p} className="flex gap-3 rounded-xl border border-border bg-background/70 p-5"><CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden /><span className="font-medium">“{p}”</span></li>)}
          </ul>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p className="font-semibold text-primary">Você não precisa resolver todas essas questões sozinho.</p>
            <p>O Moda nos Marketplaces foi pensado para conectar essas decisões em uma sequência prática: da organização do negócio à rotina de pedidos.</p>
            <p>Para você entender o que fazer, por onde começar e o que conferir antes de avançar.</p>
          </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <Eyebrow>Margem e organização</Eyebrow>
              <h2 className="text-3xl font-bold md:text-4xl">Vender uma peça é bom. Entender o resultado dessa venda é melhor ainda.</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-primary-foreground/90">
                <p>Preço baixo pode atrair pedidos. Mas estoque, embalagem, taxas, impostos, descontos e publicidade também entram na conta.</p>
                <p>Sem conhecer esses números, você pode vender e continuar sem dinheiro para repor a mercadoria.</p>
                <p>Neste treinamento, você vai aprender a olhar para a operação completa.</p>
              </div>
              <Button asChild variant="cta" size="lg" className="mt-8 h-auto min-h-14 whitespace-normal py-3"><a href="#conteudo">Quero aprender a estruturar minha loja <ArrowDown aria-hidden /></a></Button>
            </div>
            <div>
              <img src={studio} alt="Vestido no manequim em um espaço para fotografar produtos" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-lg object-cover" />
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">{pilares.map(p => <li key={p} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-warning" aria-hidden />{p}</li>)}</ul>
              <p className="mt-6 font-semibold">É essa estrutura que vamos construir ao longo das aulas.</p>
            </div>
          </div>
        </section>

        <section className="bg-blush">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <Eyebrow>Revenda ou fabricação própria</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-bold text-primary md:text-4xl">Um caminho para quem revende. Um caminho para quem fabrica.</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="border-t-2 border-accent pt-6"><Package className="mb-4 h-8 w-8 text-accent" aria-hidden /><h3 className="text-2xl font-bold text-primary">Quero comprar de fornecedores e revender</h3><p className="mt-4 text-lg leading-relaxed text-muted-foreground">Aprenda a avaliar fornecedores, comparar o custo real da mercadoria, conferir qualidade e planejar um primeiro lote de acordo com seu capital.</p></div>
              <div className="border-t-2 border-success pt-6"><Scissors className="mb-4 h-8 w-8 text-success" aria-hidden /><h3 className="text-2xl font-bold text-primary">Quero vender peças da minha própria produção</h3><p className="mt-4 text-lg leading-relaxed text-muted-foreground">Entenda as etapas da peça piloto à reposição: tecido, modelagem, corte, costura, qualidade e cálculo de custo.</p></div>
            </div>
            <p className="mt-8 text-lg text-muted-foreground">Você poderá priorizar o caminho que faz sentido para o seu momento.</p>
            <p className="mt-3 font-semibold text-primary">Não precisa fabricar para participar. E não precisa entrar em todos os marketplaces de uma vez.</p>
          </div>
        </section>

        <ProductionHighlight />

        <section id="conteudo" className="mx-auto max-w-4xl px-5 py-16 md:py-24">
          <Eyebrow>Conteúdo do treinamento</Eyebrow>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Do primeiro planejamento à rotina da sua loja.</h2>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {modules.map((m, i) => <AccordionItem key={m.title} value={`m${i}`} className="rounded-lg border border-border px-4 data-[state=open]:bg-lilac md:px-5">
              <AccordionTrigger className="gap-3 py-5 text-left hover:no-underline"><span className="flex items-start gap-3"><span className="font-display text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span><span><span className="block text-lg font-bold text-primary">{m.title}</span><span className="mt-1 block text-sm font-normal text-muted-foreground">{m.desc}</span></span></span></AccordionTrigger>
              <AccordionContent className="pb-6 text-base md:pl-10"><ul className="list-disc space-y-2 pl-5">{m.topics.map(t => <li key={t}>{t}</li>)}</ul><p className="mt-5 border-t border-border pt-4"><strong className="text-primary">Aplicação prática:</strong> {m.practice}</p>{m.note && <p className="mt-3 text-sm text-muted-foreground">Observação: {m.note}</p>}</AccordionContent>
            </AccordionItem>)}
          </Accordion>
        </section>

        <section className="bg-lilac">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <Eyebrow>Formato e acompanhamento</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-bold text-primary md:text-4xl">Você assiste, aplica e tem espaço para perguntar.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">Aprender uma ferramenta nova pode trazer dúvidas que só aparecem quando você tenta fazer. Por isso, o treinamento combina:</p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{formatos.map(({ icon: Icon, title, text }) => <li key={title} className="border-t border-border pt-5"><Icon className="mb-4 h-7 w-7 text-accent" aria-hidden /><h3 className="text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></li>)}</ul>
            <p className="mt-10 text-lg font-semibold text-primary">Previsão inicial: aproximadamente dois meses de treinamento.</p>
            <p className="mt-3 max-w-3xl text-muted-foreground">Início do treinamento: {dataTreinamentoFormatada()}. Horários, duração final e prazo de acesso às gravações serão informados à turma.</p>
          </div>
        </section>

        <section id="quem-ensina" className="bg-mist">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.7fr_1.3fr] md:py-24">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-lilac shadow-soft">{identidade.fotoProfessor ? <img src={identidade.fotoProfessor} alt={`Foto de ${configuracaoCurso.professor}`} loading="lazy" width={480} height={600} className="aspect-[4/5] w-full object-cover object-top" /> : <div role="img" aria-label={`Iniciais de ${configuracaoCurso.professor}`} className="flex aspect-square w-full items-center justify-center rounded-lg bg-primary"><span className="font-display text-8xl font-bold text-primary-foreground">JM</span></div>}</div>
          <div><Eyebrow>Quem vai conduzir você nessa jornada</Eyebrow><h2 className="text-4xl font-bold text-primary md:text-5xl">{configuracaoCurso.professor}</h2><p className="mt-3 font-semibold text-secondary">À frente da Viver de Loja</p>{identidade.biografia.map(b => <p key={b} className="mt-5 text-lg leading-relaxed text-muted-foreground">{b}</p>)}</div>
          </div>
        </section>

        <section id="investimento" className="bg-secondary text-secondary-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-2">
            <div><Eyebrow>Investimento</Eyebrow><h2 className="text-3xl font-bold md:text-4xl">A primeira turma tem uma condição especial para começar.</h2><p className="mt-6 text-lg leading-relaxed text-secondary-foreground/90">Uma formação para conectar produto, preço, anúncio e operação — em vez de tentar descobrir cada etapa isoladamente.</p><ul className="mt-8 space-y-4">{included.map(i => <li key={i} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-warning" aria-hidden />{i}</li>)}</ul></div>
            <div className="self-start rounded-2xl border border-secondary-foreground/25 bg-primary/35 p-6 sm:p-8 lg:p-10">
              <div className="mb-6 text-secondary-foreground/65">
                <p className="text-xs font-medium">Valor previsto do treinamento</p>
                <p className="mt-2 break-words font-display text-[clamp(1.25rem,3.5vw,1.875rem)] font-medium leading-tight">{previsto}</p>
                </div><p className="mb-3 text-base font-extrabold uppercase tracking-wide text-warning sm:text-lg">Condição especial da primeira turma:</p><CoursePrice featured /><p className="mt-3">Pelo treinamento completo</p>
              <OfferButton className="mt-8 h-auto min-h-14 w-full whitespace-normal py-3 text-center">Quero fazer parte da primeira turma</OfferButton>
              <p className="mt-5 text-sm leading-relaxed text-secondary-foreground/85">Início: {dataTreinamentoFormatada()}. {configuracaoCurso.inscricoesAbertas ? "Inscrições abertas. Confira as condições de pagamento no checkout." : "Inscrições ainda não abertas. Entre no grupo de WhatsApp para acompanhar a abertura da turma."}</p><p className="mt-6 border-t border-secondary-foreground/25 pt-5 text-sm leading-relaxed text-secondary-foreground/85">O investimento no treinamento não inclui estoque, produção, embalagens, publicidade ou eventuais serviços e ferramentas utilizados na loja.</p>
            </div>
          </div>
        </section>

        <section className="bg-blush"><div className="mx-auto max-w-4xl px-5 py-16 md:py-24"><Eyebrow>Para quem faz sentido</Eyebrow><h2 className="text-3xl font-bold text-primary md:text-4xl">Este treinamento faz sentido para você se…</h2><ul className="mt-8 space-y-5">{perfil.map(t => <li key={t} className="flex gap-3 text-lg"><Check className="h-6 w-6 shrink-0 text-success" aria-hidden />{t}</li>)}</ul><p className="mt-8 font-semibold text-primary">Não é necessário chegar sabendo operar as plataformas. O treinamento começa pela base.</p></div></section>

        <section className="bg-lilac"><div className="mx-auto max-w-3xl px-5 py-16 md:py-24"><Eyebrow>Perguntas frequentes</Eyebrow><h2 className="text-3xl font-bold text-primary md:text-4xl">Respostas para decidir com clareza.</h2><Accordion type="single" collapsible className="mt-8">{obterFaqs().map(([q, a], i) => <AccordionItem key={q} value={`f${i}`}><AccordionTrigger className="py-5 text-left text-base font-semibold">{q}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>
        <section className="bg-cream px-5 py-16 text-center md:py-24"><h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary md:text-4xl">Sua próxima etapa pode começar com um plano mais claro.</h2><div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground"><p>Você não precisa ter todas as respostas hoje.</p><p>Precisa aprender a fazer as perguntas certas, conferir os números e executar cada etapa com mais critério.</p><p>O Moda nos Marketplaces foi criado para ajudar você a percorrer esse caminho.</p></div><OfferButton className="mt-8 h-auto min-h-14 whitespace-normal py-3">Quero fazer parte da primeira turma</OfferButton><div className="mt-5 font-semibold text-primary"><p className="mb-2">Primeira turma:</p><CoursePrice /></div><p className="mt-2 text-sm text-muted-foreground">Aulas ao vivo, gravações e espaço para tirar dúvidas.</p></section>
      </main>
      <footer className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between"><div><Logo /><p className="mt-3 text-sm">{configuracaoCurso.nome} • {configuracaoCurso.professor}</p></div><div className="max-w-sm text-xs leading-relaxed text-primary-foreground/85"><p className="mb-2"><Link to="/politica-de-privacidade" className="underline">Política de Privacidade</Link></p><p>Treinamento independente. As marcas citadas pertencem aos seus respectivos titulares.</p><p className="mt-2">Esta página pode usar cookies de medição e publicidade da Meta, do Google e de outras plataformas para medir visitas e anúncios. <button type="button" className="underline" onClick={() => { localStorage.removeItem("consentimento-anuncios"); window.location.reload(); }}>Configurar cookies</button></p></div></div></footer>
      <Consentimento />
      <aside aria-label="Oferta da primeira turma" className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] md:hidden"><div className="mx-auto flex min-h-20 max-w-xl flex-wrap items-center justify-between gap-3 px-4 py-3"><div><p className="text-xs text-muted-foreground">Primeira turma</p><CoursePrice compact /></div><Button asChild variant="cta" className="min-h-11 px-4"><a href="#investimento">Conhecer a oferta <ArrowDown aria-hidden /></a></Button></div></aside>
    </div>
  );
}
