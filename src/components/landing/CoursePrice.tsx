import { configuracaoCurso, formatarReais, textoParcelamento } from "@/config/curso";

export function CoursePrice({ featured = false, compact = false }: { featured?: boolean; compact?: boolean }) {
  return (
    <div className={compact ? "min-w-0" : "space-y-2"}>
      <p className={featured ? "break-words font-display text-[clamp(2.5rem,7vw,3.75rem)] font-bold leading-tight" : compact ? "font-display text-lg font-bold text-primary" : "font-display text-lg font-bold"}>
        {formatarReais(configuracaoCurso.valorCurso)} <span className={featured ? "font-sans text-base font-medium" : "font-sans text-xs font-medium"}>à vista</span>
      </p>
      <p className={compact ? "max-w-52 text-xs leading-relaxed" : "text-sm leading-relaxed"}>{textoParcelamento()}</p>
    </div>
  );
}
