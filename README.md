# Moda nos Marketplaces — Viver de Loja

Página de vendas do treinamento com Junior Martins.

## Alterar o preço

Em `src/config/curso.ts`, altere `valorCurso` (primeira turma) e `valorPrevisto` (valor previsto, não preço anterior). Use números, por exemplo `397.00`, sem o símbolo R$. Todos os valores exibidos são formatados automaticamente em reais.

## Inserir o checkout

Preencha `linkPagamento` com a URL HTTPS completa do checkout, por exemplo `https://checkout.seu-dominio.com/curso`. Todos os botões de inscrição passam a direcionar para esse endereço. Enquanto estiver vazio ou inválido, mostram apenas o aviso de inscrições não abertas. Links de menu e “Conhecer a oferta” continuam navegando pela página. Não há coleta de dados nem processamento de pagamento próprio.

## Publicar as alterações

Revise a página no Lovable, confira o preço e os botões e clique em **Publish**. Se já estiver publicada, publique novamente para atualizar a versão pública. Alterar a prévia não atualiza automaticamente a página publicada.

## Imagens e identificação

Nenhuma logo ou foto real foi fornecida: a página usa a marca em texto e as iniciais JM. As imagens de roupas são ilustrativas. A identidade e biografia ficam em `src/config/curso.ts`.

## Desenvolvimento

Use `bun install`, `bun run dev` e `bun run test`.
