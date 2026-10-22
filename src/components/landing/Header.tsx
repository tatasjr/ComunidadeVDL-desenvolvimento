import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { href: "#treinamento", label: "O treinamento" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#quem-ensina", label: "Quem ensina" },
  { href: "#investimento", label: "Investimento" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#topo" aria-label="Viver de Loja — início"><Logo /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild variant="cta" size="default"><a href="#investimento">Conhecer a primeira turma</a></Button>
        </nav>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-primary-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu móvel" className="border-t border-primary-foreground/15 px-5 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-primary-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="cta" className="mt-3 w-full"><a href="#investimento" onClick={() => setOpen(false)}>Conhecer a primeira turma</a></Button>
        </nav>
      )}
    </header>
  );
}
