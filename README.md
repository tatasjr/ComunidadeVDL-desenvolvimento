# Moda nos Marketplaces — Viver de Loja

Página de vendas do treinamento com Junior Martins.

## Configurar a turma e a oferta

Edite `src/config/curso.ts`. A página, o FAQ, os preços e os botões usam essa configuração.

```ts
export const configuracaoCurso = {
  nome: "Moda nos Marketplaces",
  professor: "Junior Martins",
  valorCurso: 397.00,       // Preço à vista em reais, sem R$.
  valorPrevisto: 1000.00,  // Valor previsto, não preço anterior praticado.
  dataTreinamento: "",    // Data de início: "AAAA-MM-DD"; vazio = data a confirmar.
  inscricoesAbertas: false,
  linkGrupoWhatsapp: "",  // Cole o link HTTPS do grupo.
  linkPagamento: "",      // Cole o link HTTPS do checkout.
  parcelamento: {
    quantidadeParcelas: null, // Quantidade real de parcelas (2 ou mais).
    valorParcela: null,       // Valor real de cada parcela, em reais.
    semJuros: false,
  },
};
```

- **Inscrições fechadas (`false`)**: os botões mostram “Entrar no grupo de WhatsApp” e levam a `linkGrupoWhatsapp`, mesmo se o checkout estiver preenchido.
- **Inscrições abertas (`true`)**: os botões levam a `linkPagamento`.
- Se o destino correspondente ao status estiver vazio ou não for HTTPS válido, aparece um aviso. O site não usa o outro destino como alternativa.
- Menu e “Conhecer a oferta” continuam sendo links para seções.
- A data aparece na apresentação, no formato, na oferta e no FAQ. Use o formato `AAAA-MM-DD`.
- Todas as quatro exibições de preço mostram “à vista” e as condições de parcelamento. Sem os dois campos preenchidos, a página informa “Parcelamento: condições a confirmar”.
- Informe as condições efetivamente oferecidas no checkout. O site não calcula juros nem inventa parcelas. O total parcelado é exibido automaticamente.
- “Sem juros” só é exibido quando configurado e o total das parcelas corresponde ao preço à vista (tolerância de um centavo para arredondamento).

Os dois plantões de dúvidas são apresentados como encontros ao vivo em grupo para os alunos da turma, em datas estipuladas. A data de início do treinamento não é a agenda dos plantões.

## Imagens e identificação

A logo, a foto e a biografia ficam em `src/config/curso.ts`, no objeto `identidade`. Imagens públicas podem ficar em `public/imagens/` e ser referenciadas por `/imagens/nome-do-arquivo.jpg`.

## Publicar as alterações

Revise a página no Lovable, confira data, status, preços e botões e clique em **Publish**. Se já estiver publicada, publique novamente para atualizar a versão pública. Alterar o repositório ou a prévia não garante atualização automática no domínio; isso depende da integração da hospedagem.

## Desenvolvimento

Use `bun install`, `bun run dev`, `bun run test` e `bun run build`.
