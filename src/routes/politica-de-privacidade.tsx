import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Logo } from "@/components/landing/Logo";
import { identidade } from "@/config/curso";

const title = "Política de Privacidade | Viver de Loja";
const description = "Como a página do treinamento Moda nos Marketplaces coleta, usa e compartilha dados de visitantes, incluindo cookies de medição e publicidade.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://faithful-image-to-interface.lovable.app/politica-de-privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://faithful-image-to-interface.lovable.app/politica-de-privacidade" }],
  }),
  component: PoliticaPage,
});

function Sessao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-primary md:text-2xl">{titulo}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PoliticaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 md:pb-16">
        <p className="text-sm font-bold uppercase text-accent">Política de Privacidade</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-4xl">Como tratamos os dados dos visitantes desta página</h1>
        <p className="mt-4 text-muted-foreground">
          Esta política explica quais dados a página do treinamento {identidade.marca} coleta, para que são usados e com quem são compartilhados. Ela vale para a página de vendas e para quaisquer outras páginas publicadas neste endereço.
        </p>

        <Sessao titulo="Resumo em linguagem simples">
          <p>Esta página usa cookies de medição e publicidade para entender de onde vêm os visitantes e medir o resultado de anúncios. Os dados podem ser compartilhados com plataformas como Meta e Google. Em países que exigem consentimento, os cookies só são ativados depois que você aceita — e você pode mudar sua escolha quando quiser, pelo link no rodapé.</p>
        </Sessao>

        <Sessao titulo="Dados que a página coleta">
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-primary">Parâmetros de origem da visita:</strong> informações que chegam no endereço da página, como utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, fbclid e ttclid. Elas indicam de onde veio o acesso (por exemplo, um anúncio).</li>
            <li><strong className="text-primary">Cookies de medição e publicidade:</strong> cookies e tecnologias semelhantes colocados pelas plataformas de anúncios quando o rastreamento está ativo.</li>
            <li><strong className="text-primary">Sua escolha de consentimento:</strong> guardada no seu navegador para lembrar se você aceitou ou recusou os cookies de publicidade.</li>
          </ul>
          <p>A página não realiza cadastro, não coleta senhas e não solicita dados de pagamento.</p>
        </Sessao>

        <Sessao titulo="Para que os dados são usados">
          <p>Os dados servem para medir o tráfego da página, entender quais canais trazem visitantes e avaliar o desempenho de anúncios. Eles não são usados para decisões que afetem você individualmente.</p>
        </Sessao>

        <Sessao titulo="Ferramentas que podem ser utilizadas">
          <p>Conforme a configuração da página, podem ser ativados pixels e etiquetas de plataformas de anúncios e medição, como Meta Ads, Google Ads, Google Analytics, Google Tag Manager e TikTok, além de scripts adicionais declarados pela equipe responsável. Cada ferramenta é carregada apenas quando está configurada e, nos países que exigem consentimento, somente após a sua aceitação.</p>
        </Sessao>

        <Sessao titulo="Compartilhamento de dados">
          <p>Os dados de cookies e de origem da visita são compartilhados com as plataformas de anúncios e medição ativadas, para que cada uma possa medir resultados e atribuir conversões às suas próprias campanhas. Essas plataformas atuam como responsáveis pelo tratamento dos dados que recebem e têm políticas próprias, que você pode consultar nos sites delas. Não vendemos dados de visitantes.</p>
        </Sessao>

        <Sessao titulo="Consentimento e como mudar sua escolha">
          <p>Na primeira visita, os visitantes de países que exigem consentimento veem um aviso de cookies e escolhem entre aceitar ou recusar. Você pode rever essa escolha a qualquer momento pelo link “Configurar cookies” no rodapé da página.</p>
        </Sessao>

        <Sessao titulo="Seus direitos">
          <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar informações sobre o tratamento dos seus dados, a correção de dados incompletos ou a exclusão de dados tratados por nós. Como a página não mantém cadastro de visitantes, a maior parte dos dados fica nas plataformas de anúncios — nesses casos, o pedido pode ser atendido diretamente por elas, nos canais que cada uma disponibiliza.</p>
        </Sessao>

        <Sessao titulo="Atualizações desta política">
          <p>Esta política pode ser atualizada quando as ferramentas utilizadas mudarem. A versão publicada nesta página é sempre a que está em vigor.</p>
        </Sessao>

        <Sessao titulo="Contato">
          <p>Dúvidas sobre esta política podem ser enviadas pelos canais de contato da {identidade.marca}.</p>
        </Sessao>

        <div className="mt-12 border-t border-border pt-6">
          <Link to="/" className="font-semibold text-accent hover:underline">← Voltar para a página do treinamento</Link>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm">Moda nos Marketplaces • {identidade.marca}</p>
          </div>
          <div className="max-w-sm text-xs leading-relaxed text-primary-foreground/85">
            <p><Link to="/politica-de-privacidade" className="underline">Política de Privacidade</Link></p>
            <p className="mt-2">Treinamento independente. As marcas citadas pertencem aos seus respectivos titulares.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
