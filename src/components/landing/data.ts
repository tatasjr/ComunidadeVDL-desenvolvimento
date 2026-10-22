export const pains = [
  "Quero vender online, mas não sei por onde começar.",
  "Tenho produtos, mas ainda não sei cadastrar minha loja.",
  "Preciso encontrar fornecedores confiáveis.",
  "Quero entender quanto realmente sobra em cada venda.",
  "Tenho dúvidas sobre fotos, anúncios e divulgação.",
  "Preciso organizar estoque, pedidos e atendimento.",
];

export const outcomes = [
  "Escolher o primeiro marketplace de acordo com seu negócio.",
  "Avaliar fornecedores e planejar compras para revenda.",
  "Entender as etapas da fabricação das próprias peças.",
  "Organizar a base empresarial e financeira.",
  "Calcular preços considerando custos, taxas e margem.",
  "Preparar fotos, vídeos e anúncios de produto.",
  "Centralizar a operação dos canais compatíveis no UpSeller.",
  "Planejar campanhas e acompanhar indicadores.",
  "Criar uma rotina de atendimento, expedição e reposição.",
];

export type Module = { title: string; desc: string; topics: string[]; practice: string; note?: string };

export const modules: Module[] = [
  { title: "O plano da sua loja", desc: "Defina como, para quem e por onde começar a vender.", topics: ["Como funciona a venda de moda em marketplaces.", "Revenda ou fabricação própria.", "Escolha do público e do primeiro canal.", "Análise de concorrentes.", "Mix inicial, capital de giro e metas."], practice: "plano de entrada da loja." },
  { title: "Empresa e financeiro organizados", desc: "A base formal e o controle do dinheiro do negócio.", topics: ["CNPJ e avaliação de enquadramento com apoio de contador.", "Separação do dinheiro pessoal e empresarial.", "Conta PJ, notas fiscais e certificado digital.", "Fluxo de caixa, contas a pagar e recebíveis.", "Reserva para reposição de estoque."], practice: "checklist da empresa e controle financeiro inicial." },
  { title: "Fornecedores e compra para revenda", desc: "Como encontrar, comparar e testar fornecedores.", topics: ["Onde buscar fornecedores.", "Como comparar propostas e avaliar amostras.", "Qualidade, composição, grade e medidas.", "Pedido mínimo, prazo, reposição e condições de troca.", "Custo total de compra e teste de lote inicial."], practice: "ficha de avaliação de fornecedores." },
  { title: "Sua própria produção", desc: "As etapas para tirar uma peça do papel.", topics: ["Escolha do modelo e do tecido.", "Ficha técnica, modelagem e peça piloto.", "Prova e grade de tamanhos.", "Corte, costura e contratação de prestadores.", "Custos, prazos, qualidade e identificação das peças."], practice: "roteiro de produção e ficha de custo." },
  { title: "Preço que sustenta o negócio", desc: "Calcule quanto realmente sobra em cada venda.", topics: ["Custo da peça e da embalagem.", "Custos fixos e variáveis.", "Taxas, impostos e frete.", "Provisão para devoluções.", "Margem de contribuição, lucro e ponto de equilíbrio.", "Simulação de descontos, cupons e publicidade."], practice: "cálculo de preço e margem por produto e canal." },
  { title: "Cadastro e configuração das lojas", desc: "O passo a passo para abrir sua loja em cada canal.", topics: ["Cadastro na Shopee.", "Cadastro no Mercado Livre.", "Cadastro na SHEIN.", "Cadastro no TikTok Shop.", "Documentação e critérios de elegibilidade.", "Configuração de recebimentos, envio e devoluções."], practice: "checklist do canal escolhido.", note: "Cadastros estão sujeitos às regras e à aprovação de cada plataforma." },
  { title: "Fotos, vídeos e anúncios de produto", desc: "Mostre bem a peça e preencha o anúncio do jeito certo.", topics: ["Fotos reais de frente, costas, detalhes e caimento.", "Vídeos de demonstração.", "Uso responsável de inteligência artificial nas imagens.", "Tabelas de medidas.", "Títulos, descrições e atributos.", "SKU (código interno do produto), GTIN (código de barras), variações, peso e dimensões."], practice: "anúncio completo de uma peça." },
  { title: "Operação centralizada no UpSeller", desc: "Organize estoque e pedidos dos canais compatíveis em um só lugar.", topics: ["Configuração inicial.", "Conexão dos canais disponíveis.", "Padronização de SKUs e vínculo de variações.", "Controle e sincronização de estoque.", "Processamento de pedidos.", "Fluxo de notas fiscais e etiquetas, conforme as integrações disponíveis."], practice: "fluxo de operação dos canais compatíveis.", note: "As integrações disponíveis variam conforme cada canal." },
  { title: "Divulgação e primeiras campanhas", desc: "Atraia visitas sem perder de vista a margem.", topics: ["Diferença entre cadastro de produto e publicidade paga.", "Cupons, descontos e campanhas internas.", "Primeiros testes de Ads (anúncios pagos dentro da plataforma).", "Definição de orçamento e objetivos.", "Visitas, cliques, conversão e margem após publicidade."], practice: "plano de lançamento e primeiro teste de campanha." },
  { title: "Rotina, atendimento e crescimento", desc: "O dia a dia da loja e os próximos passos.", topics: ["Rotina diária de pedidos e atendimento.", "Separação, embalagem e expedição.", "Trocas, devoluções e dúvidas de tamanho.", "Estoque e reposição.", "Revisão semanal de caixa, margem e anúncios.", "Priorização das próximas melhorias."], practice: "checklist operacional e plano de ação de 30 dias." },
];

export const weeks = [
  { w: "Semanas 1 e 2", t: "Estratégia, empresa e financeiro." },
  { w: "Semanas 3 e 4", t: "Fornecedores, produção e precificação.", plantao: "Plantão de dúvidas ao final da semana 4" },
  { w: "Semanas 5 e 6", t: "Cadastro, fotos, anúncios e UpSeller." },
  { w: "Semanas 7 e 8", t: "Campanhas, rotina e plano de ação.", plantao: "Plantão de dúvidas ao final da semana 8" },
];

export const included = [
  "Conteúdo dos 10 módulos.",
  "Aulas online inicialmente ao vivo.",
  "Gravações em uma área de estudos.",
  "Grupo de WhatsApp para dúvidas.",
  "Dois plantões de dúvidas ao vivo.",
];

export const faqs = [
  ["Preciso já vender em marketplaces?", "Não. O treinamento foi pensado para revendedores e fabricantes que ainda não vendem nesses canais."],
  ["Preciso fabricar minhas próprias peças?", "Não. O conteúdo contempla compra para revenda e fabricação própria."],
  ["Preciso estar em todos os marketplaces?", "Não. O aluno aprenderá a escolher por onde começar e poderá expandir conforme sua capacidade operacional."],
  ["Quando começa e quanto tempo dura?", "A previsão inicial é de aproximadamente dois meses. Calendário e duração final serão confirmados na abertura das inscrições."],
  ["E se eu não conseguir assistir ao vivo?", "As aulas terão gravações na área de estudos. O prazo de acesso será informado antes da inscrição."],
  ["O treinamento inclui estoque ou ferramentas?", "Não. Investimentos na operação e eventuais serviços contratados são separados do treinamento."],
  ["O treinamento garante vendas?", "Não há garantia de vendas ou lucro. Os resultados dependem da aplicação, do produto, da demanda, dos custos e de outros fatores."],
  ["Minha loja será aprovada em todas as plataformas?", "Cada plataforma define seus próprios critérios e analisa os cadastros."],
] as const;
