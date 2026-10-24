import { identidade } from "@/config/curso";

export function Logo() {
  if (identidade.logo) {
    return <img src={identidade.logo} alt={identidade.marca} className="h-9 w-auto" />;
  }
  return (
    <span className="font-display text-xl font-bold text-primary-foreground">
      Viver de <span className="text-accent">Loja</span>
    </span>
  );
}
