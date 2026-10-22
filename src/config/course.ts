// Informações editáveis da página de vendas.
export const course = {
  name: "Moda nos Marketplaces",
  brand: "Viver de Loja",
  teacher: {
    name: "Junior Martins",
    role: "Criador da Viver de Loja",
    bio: [
      "Sou Junior Martins, criador da Viver de Loja. Há mais de 8 anos, ajudo revendedores de roupas a venderem mais, no presencial e no online. Minha atuação conecta criação de conteúdo, marketing digital e vendas para o mercado de moda.",
      "Neste treinamento, vou orientar você a organizar o negócio, preparar seus produtos e dar os primeiros passos nos marketplaces, com atenção à margem e à rotina da loja.",
    ],
    // Caminho da foto real (ex.: "/images/junior.jpg"). null = mostra as iniciais.
    photo: null as string | null,
  },
  // Caminho da logo original (ex.: "/images/logo-viver-de-loja.png"). null = logo em texto.
  logo: null as string | null,
  promoPrice: "R$297,00",
  expectedPrice: "R$1.000",
  dates: null as string | null,
  schedule: null as string | null,
  recordingsAccess: null as string | null,
  checkoutUrl: null as string | null,
  enrollmentOpen: false,
};

export const checkoutAvailable = () =>
  course.enrollmentOpen && !!course.checkoutUrl && /^https:\/\//.test(course.checkoutUrl);
