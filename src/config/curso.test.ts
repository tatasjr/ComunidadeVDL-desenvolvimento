import { afterEach, describe, expect, it } from "vitest";
import { canais, configuracaoCurso, formatarReais, pagamentoSeguro, destinoInscricao, textoParcelamento, dataTreinamentoFormatada } from "./curso";

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

const original = structuredClone(configuracaoCurso);
afterEach(() => Object.assign(configuracaoCurso, structuredClone(original)));

describe("Data e parcelamento configuráveis", () => {
  it.each(["", "2026-02-30", "2026-13-01", "10/11/2026"])("trata data vazia ou inválida sem erro: %s", data => {
    configuracaoCurso.dataTreinamento = data;
    expect(dataTreinamentoFormatada()).toBe("Data a confirmar");
  });
  it("mantém a data no Brasil sem deslocar um dia", () => {
    configuracaoCurso.dataTreinamento = "2026-11-10";
    expect(dataTreinamentoFormatada()).toBe("10 de novembro de 2026");
  });
  it("não inventa parcelamento antes de ser informado", () => {
    configuracaoCurso.parcelamento = { quantidadeParcelas: null, valorParcela: null, semJuros: false };
    expect(textoParcelamento()).toBe("Parcelamento: condições a confirmar.");
  });
  it.each([0, 1, 2.5, -2, Infinity])("não anuncia quantidade inválida: %s", quantidadeParcelas => {
    configuracaoCurso.parcelamento = { quantidadeParcelas, valorParcela: 100, semJuros: true };
    expect(textoParcelamento()).toContain("a confirmar");
  });
  it.each([0, -10, NaN, Infinity])("não anuncia parcela inválida: %s", valorParcela => {
    configuracaoCurso.parcelamento = { quantidadeParcelas: 3, valorParcela, semJuros: true };
    expect(textoParcelamento()).toContain("a confirmar");
  });
  it("só anuncia sem juros quando configurado e o total corresponde ao preço à vista", () => {
    configuracaoCurso.valorCurso = 400;
    configuracaoCurso.parcelamento = { quantidadeParcelas: 4, valorParcela: 100, semJuros: true };
    expect(textoParcelamento()).toContain("sem juros");
    configuracaoCurso.parcelamento.valorParcela = 110;
    expect(textoParcelamento()).not.toContain("sem juros");
    expect(textoParcelamento().replace(/\s/g, "")).toContain("total:R$440,00");
  });
  it("não redireciona quando o destino do status atual é inseguro", () => {
    configuracaoCurso.inscricoesAbertas = false;
    configuracaoCurso.linkGrupoWhatsapp = "javascript:alert(1)";
    configuracaoCurso.linkPagamento = "https://checkout.example.com/curso";
    expect(destinoInscricao()).toBeNull();
  });
});
