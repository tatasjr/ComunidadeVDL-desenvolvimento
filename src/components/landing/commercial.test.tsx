import { afterEach, describe, expect, it, vi } from "vitest";
import type { AnchorHTMLAttributes } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Index } from "@/routes/index";
import { configuracaoCurso } from "@/config/curso";

// These tests isolate the offer; navigation is covered by app-routing.test.tsx.
vi.mock("@tanstack/react-router", async (importOriginal) => {
  const original = await importOriginal<typeof import("@tanstack/react-router")>();
  return {
    ...original,
    Link: ({ to, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => <a href={to} {...props} />,
  };
});

const original = structuredClone(configuracaoCurso);

afterEach(() => {
  cleanup();
  Object.assign(configuracaoCurso, structuredClone(original));
});

describe("Oferta em toda a página", () => {
  it("atualiza todas as quatro exibições quando o preço muda", () => {
    configuracaoCurso.valorCurso = 512.5;
    const { container } = render(<Index />);
    expect(container.textContent?.replace(/\s/g, "").match(/R\$512,50/g)).toHaveLength(4);
    expect(container.textContent?.replace(/\s/g, "")).not.toContain("R$397,00");
  });
  it("direciona todos os cinco botões de inscrição para o HTTPS configurado", () => {
    configuracaoCurso.inscricoesAbertas = true;
    configuracaoCurso.linkPagamento = "https://checkout.example.com/curso";
    const { container } = render(<Index />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(container.querySelectorAll('a[href="https://checkout.example.com/curso"]')).toHaveLength(5);
  });
  it("não cria links de pagamento para endereço inseguro", () => {
    configuracaoCurso.inscricoesAbertas = true;
    configuracaoCurso.linkPagamento = "http://checkout.example.com/curso";
    const { container } = render(<Index />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(container.querySelectorAll('a[href^="http:"]')).toHaveLength(0);
    expect(screen.getAllByRole("button", { name: /primeira turma/ })).toHaveLength(5);
  });
  it("leva os cinco botões ao grupo quando as inscrições estão fechadas, mesmo com checkout preenchido", () => {
    configuracaoCurso.inscricoesAbertas = false;
    configuracaoCurso.linkPagamento = "https://checkout.example.com/curso";
    configuracaoCurso.linkGrupoWhatsapp = "https://chat.whatsapp.com/grupo-da-turma";
    const { container } = render(<Index />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(container.querySelectorAll('a[href="https://chat.whatsapp.com/grupo-da-turma"]')).toHaveLength(5);
    expect(screen.getAllByRole("link", { name: "Entrar no grupo de WhatsApp" })).toHaveLength(5);
    expect(container.querySelectorAll('a[href="https://checkout.example.com/curso"]')).toHaveLength(0);
    expect(screen.getByRole("link", { name: /Conhecer a oferta/ })).toHaveAttribute("href", "#investimento");
  });
  it("com inscrições abertas não usa o grupo como alternativa a um checkout inválido", () => {
    configuracaoCurso.inscricoesAbertas = true;
    configuracaoCurso.linkPagamento = "javascript:alert(1)";
    configuracaoCurso.linkGrupoWhatsapp = "https://chat.whatsapp.com/grupo-da-turma";
    const { container } = render(<Index />);
    expect(container.querySelectorAll('a[href^="https://chat.whatsapp.com"]')).toHaveLength(0);
    fireEvent.click(screen.getByRole("button", { name: "Quero conhecer a primeira turma" }));
    expect(screen.getByRole("dialog")).toHaveTextContent("O link de pagamento está sendo preparado");
  });
  it("mostra um aviso quando o grupo não está configurado", () => {
    configuracaoCurso.inscricoesAbertas = false;
    configuracaoCurso.linkGrupoWhatsapp = "";
    render(<Index />);
    fireEvent.click(screen.getAllByRole("button", { name: "Entrar no grupo de WhatsApp" })[0]);
    expect(screen.getByRole("dialog")).toHaveTextContent("link do grupo de WhatsApp será disponibilizado em breve");
  });
  it("atualiza parcelamento nas quatro ofertas, incluindo o total", () => {
    configuracaoCurso.parcelamento = { quantidadeParcelas: 3, valorParcela: 150, semJuros: false };
    const { container } = render(<Index />);
    const text = container.textContent?.replace(/\s/g, "");
    expect(text?.match(/3xdeR\$150,00/g)).toHaveLength(4);
    expect(text?.match(/total:R\$450,00/g)).toHaveLength(4);
    expect(text?.match(/àvista/g)).toHaveLength(4);
  });
  it("mostra a data configurada na apresentação, no formato, na oferta e no FAQ", () => {
    configuracaoCurso.dataTreinamento = "2026-11-10";
    const { container } = render(<Index />);
    expect(container).toHaveTextContent("10 de novembro de 2026");
    fireEvent.click(screen.getByRole("button", { name: "Quando começa?" }));
    expect(screen.getByText(/Início do treinamento: 10 de novembro de 2026. A previsão/)).toBeInTheDocument();
  });

});