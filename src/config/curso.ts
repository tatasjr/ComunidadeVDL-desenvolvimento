export const configuracaoCurso = {
  nome: "Moda nos Marketplaces",
  professor: "Junior Martins",
  valorCurso: 397.00,
  valorPrevisto: 1000.00,
  // Data de início no formato AAAA-MM-DD. Vazio = data a confirmar.
  dataTreinamento: "",
  inscricoesAbertas: false,
  // Inscrições fechadas: os botões levam ao grupo. Abertas: levam ao checkout.
  linkGrupoWhatsapp: "",
  linkPagamento: "",
  parcelamento: {
    // Preencha os dois campos conforme as condições reais do checkout.
    quantidadeParcelas: 10,
    valorParcela: 39.90,
    semJuros: true,
  },
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
  fotoProfessor: "https://comunidade.viverdeloja.com.br/imagens/junior_martins.jpg",
  biografia: [
    "Meu trabalho na Viver de Loja me coloca perto da realidade de quem compra e vende roupas: a busca por fornecedores, a preocupação com preço e o desafio de transformar divulgação em venda.",
    "Também vivo a operação de uma marca própria de roupas, a Lunavelle, e os desafios de vender em marketplaces.",
    "Neste treinamento, vou conectar esses assuntos em um caminho para quem está começando: organizar o negócio, escolher produtos, calcular preços, preparar anúncios e cuidar da operação.",
    "Quero ajudar você a entender as decisões da sua loja e colocar o aprendizado em prática.",
  ],
};


export function destinoInscricao(): string | null {
  return pagamentoSeguro(configuracaoCurso.inscricoesAbertas
    ? configuracaoCurso.linkPagamento
    : configuracaoCurso.linkGrupoWhatsapp);
}

export function textoParcelamento(): string {
  const { quantidadeParcelas, valorParcela, semJuros } = configuracaoCurso.parcelamento;
  if (quantidadeParcelas === null || valorParcela === null ||
      !Number.isInteger(quantidadeParcelas) || quantidadeParcelas < 2 ||
      !Number.isFinite(valorParcela) || valorParcela <= 0) {
    return "Parcelamento: condições a confirmar.";
  }
  const total = quantidadeParcelas * valorParcela;
  // Não anunciar sem juros quando o total difere do preço à vista.
  const semAcrescimo = semJuros && Math.abs(total - configuracaoCurso.valorCurso) < 0.011;
  return `ou ${quantidadeParcelas}x de ${formatarReais(valorParcela)}${semAcrescimo ? " sem juros" : ""} (total: ${formatarReais(total)})`;
}

export function dataTreinamentoFormatada(): string {
  const valor = configuracaoCurso.dataTreinamento;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) return "Data a confirmar";
  const data = new Date(`${valor}T12:00:00Z`);
  if (!Number.isFinite(data.getTime()) || data.toISOString().slice(0, 10) !== valor) return "Data a confirmar";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(data);
}
