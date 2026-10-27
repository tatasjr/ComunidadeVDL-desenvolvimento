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

afterEach(() => {
  cleanup();
  configuracaoCurso.valorCurso = 397;
  configuracaoCurso.linkPagamento = "";
});

describe("Oferta em toda a página", () => {
  it("atualiza todas as quatro exibições quando o preço muda", () => {
    configuracaoCurso.valorCurso = 512.5;
    const { container } = render(<Index />);
    expect(container.textContent?.replace(/\s/g, "").match(/R\$512,50/g)).toHaveLength(4);
    expect(container.textContent?.replace(/\s/g, "")).not.toContain("R$397,00");
  });
  it("direciona todos os cinco botões de inscrição para o HTTPS configurado", () => {
    configuracaoCurso.linkPagamento = "https://checkout.example.com/curso";
    const { container } = render(<Index />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(container.querySelectorAll('a[href="https://checkout.example.com/curso"]')).toHaveLength(5);
  });
  it("não cria links de pagamento para endereço inseguro", () => {
    configuracaoCurso.linkPagamento = "http://checkout.example.com/curso";
    const { container } = render(<Index />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(container.querySelectorAll('a[href^="http:"]')).toHaveLength(0);
    expect(screen.getAllByRole("button", { name: /primeira turma/ })).toHaveLength(5);
  });
});