// Configuração central de pixels e fontes de tráfego.
// Preencha os IDs abaixo. Campo vazio = ferramenta desativada (nada é carregado).
export const rastreamento = {
  metaPixelId: "", // ex.: "123456789012345"
  googleAds: {
    id: "", // ex.: "AW-123456789"
    rotuloConversaoInscricao: "", // label da conversão do clique em inscrição
  },
  googleAnalyticsId: "", // ex.: "G-XXXXXXX"
  googleTagManagerId: "", // ex.: "GTM-XXXXXXX"
  tiktokPixelId: "", // ex.: "C123ABC..."
  // Outras fontes: scripts adicionais (URL https) carregados após o consentimento.
  scriptsExtras: [] as string[],
  // Parâmetros de origem guardados para acompanhar de onde veio o visitante.
  parametrosOrigem: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "ttclid"],
  // Países onde o aviso de cookies é exibido antes de ativar os pixels.
  paisesComConsentimento: ["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","IS","LI","NO","GB","CH"],
};
