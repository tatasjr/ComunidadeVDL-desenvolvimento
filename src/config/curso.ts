export const configuracaoCurso = {
  nome: "Moda nos Marketplaces",
  professor: "Junior Martins",
  valorCurso: 497.00,
  valorPrevisto: 1000.00,
  linkPagamento: "",
};

export const formatarReais = (valor: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

export function pagamentoSeguro(link: string): string | null {
  try {
    const url = new URL(link);
    if (url.protocol !== "https:" || !url.hostname || url.username || url.password) return null;
    return url.href;
  } catch {
    return null;
  }
}

export const canais = ["Shopee", "Mercado Livre", "SHEIN"] as const;

export const identidade = {
  marca: "Viver de Loja",
  logo: null as string | null,
  fotoProfessor: null as string | null,
  biografia: [
    "Meu trabalho na Viver de Loja me coloca perto da realidade de quem compra e vende roupas: a busca por fornecedores, a preocupação com preço e o desafio de transformar divulgação em venda.",
    "Também vivo a operação de uma marca própria de roupas, a Lunavelle, e os desafios de vender em marketplaces.",
    "Neste treinamento, vou conectar esses assuntos em um caminho para quem está começando: organizar o negócio, escolher produtos, calcular preços, preparar anúncios e cuidar da operação.",
    "Quero ajudar você a entender as decisões da sua loja e colocar o aprendizado em prática.",
  ],
};
