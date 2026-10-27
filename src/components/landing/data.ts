export const pains = [
  "Qual plataforma é melhor para começar?",
  "Meu fornecedor tem preço para eu conseguir competir?",
  "Depois das taxas, será que vai sobrar lucro?",
  "Preciso ter CNPJ? Como emito nota?",
  "Como faço fotos e anúncios que valorizem minhas peças?",
  "E se eu começar a receber pedidos e não conseguir organizar tudo?",
];

export const pilares = ["Produto que faz sentido para o seu negócio.", "Anúncio que apresenta bem a peça.", "Preço calculado com critério.", "Rotina para atender e entregar."];
export const producaoTopics = [
  "Escolha do modelo e dos tecidos.",
  "Modelagem e desenvolvimento da peça piloto.",
  "Busca e avaliação de profissionais de corte e costura.",
  "Organização dos tamanhos e das quantidades.",
  "Cálculo do custo por peça.",
  "Acompanhamento de prazos, acabamento e qualidade.",
];
export type Module = { title: string; desc: string; topics: string[]; practice: string; note?: string };
export const modules: Module[] = [
  { title: "Escolha por onde começar", desc: "Troque o excesso de possibilidades por um plano de entrada.", topics: ["Canais, público e análise de concorrentes.", "Mix inicial, capital de giro e metas."], practice: "plano de entrada nos marketplaces." },
  { title: "Organize a empresa e o dinheiro", desc: "Enxergue o que entra, o que sai e o que precisa ficar reservado.", topics: ["Preparação do CNPJ com apoio contábil.", "Separação das finanças, conta PJ e recebíveis.", "Notas fiscais e fluxo de caixa."], practice: "checklist da empresa e controle financeiro inicial." },
  { title: "Escolha fornecedores com mais critério", desc: "O menor preço da peça não conta a história inteira.", topics: ["Amostras, qualidade, medidas e grade.", "Prazos, reposição, condições de compra e custo total."], practice: "ficha de comparação de fornecedores." },
  { title: "Produção própria: como começar a fabricar suas peças", desc: "Entenda o caminho da escolha do modelo ao planejamento do primeiro lote, com atenção aos profissionais, aos custos e à qualidade.", topics: [...producaoTopics, "Ficha técnica da peça."], practice: "roteiro de produção e ficha de custo." },
  { title: "Calcule o preço antes de oferecer desconto", desc: "Saiba até onde pode negociar sem comprometer a margem.", topics: ["Mercadoria, embalagem, custos fixos e variáveis.", "Taxas, impostos, frete e devoluções.", "Publicidade e margem de contribuição."], practice: "cálculo de preço e margem por produto e canal." },
  { title: "Prepare suas lojas nos marketplaces", desc: "Aprenda o caminho do cadastro à configuração inicial.", topics: ["Cadastro na Shopee, no Mercado Livre e na SHEIN.", "Documentos, recebimentos e envio."], practice: "checklist do canal escolhido.", note: "Cada plataforma possui critérios próprios de elegibilidade e aprovação." },
  { title: "Faça sua peça ser entendida e desejada", desc: "Ajude o cliente a enxergar o valor da roupa e escolher com mais segurança.", topics: ["Fotos, vídeos, caimento, detalhes e tabela de medidas.", "Títulos, descrições, atributos e variações.", "SKU (código interno), GTIN (código de barras), peso e dimensões.", "Uso responsável de IA, preservando a fidelidade ao produto."], practice: "anúncio completo de uma peça." },
  { title: "Organize a operação no UpSeller", desc: "Prepare um fluxo para acompanhar estoque e pedidos.", topics: ["Configuração e conexão dos canais compatíveis.", "SKUs, variações, estoque e pedidos.", "Notas e etiquetas conforme as integrações disponíveis."], practice: "fluxo de operação.", note: "A compatibilidade depende das integrações disponíveis para cada canal; o UpSeller não necessariamente integra todos os canais abordados." },
  { title: "Divulgue com objetivo e acompanhe os números", desc: "Entenda o que observar antes de colocar mais dinheiro em uma campanha.", topics: ["Cupons, promoções e primeiros testes de Ads (anúncios pagos).", "Orçamento, visitas, cliques, conversão e margem."], practice: "plano de lançamento e primeiro teste de campanha." },
  { title: "Construa uma rotina que você consiga manter", desc: "Saiba o que precisa acontecer todos os dias e o que revisar a cada semana.", topics: ["Atendimento, separação, embalagem e envio.", "Devoluções, reposição e acompanhamento financeiro."], practice: "checklist operacional e plano de ação de 30 dias." },
];
export const included = ["Conteúdo dos 10 módulos.", "Aulas online inicialmente ao vivo.", "Gravações na área de estudos.", "Grupo de WhatsApp para dúvidas.", "Dois plantões de dúvidas ao vivo.", "Módulo de produção própria para quem quer começar a fabricar suas peças."];
export const perfil = ["Você revende ou fabrica roupas e quer começar nos marketplaces.", "Precisa de uma sequência para organizar os primeiros passos.", "Quer compreender os custos antes de definir seus preços.", "Está disposto a separar tempo para assistir às aulas e aplicar o conteúdo.", "Quer construir uma operação que consiga acompanhar e melhorar."];
export const faqs = [
  ["Nunca vendi em marketplaces. Consigo acompanhar?", "O treinamento foi pensado para quem está começando, da preparação do negócio à rotina da loja."],
  ["Preciso ter CNPJ para entrar no treinamento?", "Você pode participar para aprender a estruturar seu negócio. As exigências para vender variam conforme o canal e a modalidade de cadastro. Vamos abordar essa preparação e os pontos que precisam de apoio contábil."],
  ["Preciso fabricar minhas peças para participar do treinamento?", "Não. Você pode trabalhar com compra para revenda e aplicar os demais conteúdos normalmente. O módulo de produção própria é uma possibilidade adicional para quem deseja conhecer esse caminho."],
  ["Preciso saber costurar para acompanhar o módulo de produção própria?", "Não. O objetivo é ensinar como organizar a produção com profissionais parceiros, entendendo as etapas, os custos e os cuidados com a qualidade. Não é um curso técnico de costura."],
  ["Vou precisar abrir loja em todas as plataformas?", "Não. Você aprenderá a avaliar por onde começar. A expansão deve acompanhar sua capacidade de investimento e operação."],
  ["E se eu perder uma aula ao vivo?", "As aulas terão gravações na área de estudos. O prazo de acesso será informado antes da inscrição."],
  ["O valor do treinamento inclui dinheiro para mercadoria e anúncios?", "Não. Os custos da operação são separados."],
  ["O treinamento garante vendas ou lucro?", "Não. O treinamento oferece orientação e aplicações práticas. Resultados dependem da execução, dos produtos, da demanda, dos custos e de outros fatores."],
  ["Quando começa?", "O calendário está em definição, com previsão inicial de aproximadamente dois meses de treinamento. As informações completas serão divulgadas na abertura das inscrições."],
] as const;
