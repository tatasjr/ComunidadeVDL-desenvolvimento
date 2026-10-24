import { describe, expect, it } from "vitest";
import { canais, configuracaoCurso, formatarReais, pagamentoSeguro } from "./curso";

describe("Regras comerciais", () => {
  it("mantém a primeira turma em 397 reais", () => {
    expect(configuracaoCurso.valorCurso).toBe(397);
  });
  it("mantém o valor previsto em 1000 reais", () => {
    expect(configuracaoCurso.valorPrevisto).toBe(1000);
  });
  it("formata valores alterados em reais", () => {
    expect(formatarReais(512.5).replace(/\s/g, "")).toBe("R$512,50");
  });
  it("inclui somente os três canais confirmados", () => {
    expect(canais).toEqual(["Shopee", "Mercado Livre", "SHEIN"]);
  });
  it("não permite pagamento quando o endereço está vazio", () => {
    expect(pagamentoSeguro("")).toBeNull();
  });
  it("aceita uma URL HTTPS válida", () => {
    expect(pagamentoSeguro("https://checkout.example.com/curso")).toBe("https://checkout.example.com/curso");
  });
  it.each(["https://", "https://?", "http://example.com", "javascript:alert(1)", "/checkout", "https://usuario:senha@example.com"])("bloqueia endereço inválido ou inseguro: %s", (link) => {
    expect(pagamentoSeguro(link)).toBeNull();
  });
});