import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { guardarOrigem, iniciarRastreamento, lerConsentimento, paisPrecisaConsentimento, salvarConsentimento } from "@/lib/tracking";

export function Consentimento() {
  const [aberto, setAberto] = useState(false);
  useEffect(() => {
    guardarOrigem();
    const c = lerConsentimento();
    if (c === "aceito") return iniciarRastreamento();
    if (c === "recusado") return;
    paisPrecisaConsentimento().then(p => (p ? setAberto(true) : iniciarRastreamento()));
    const abrir = () => setAberto(true);
    window.addEventListener("abrir-cookies", abrir);
    return () => window.removeEventListener("abrir-cookies", abrir);
  }, []);
  if (!aberto) return null;
  const escolher = (v: "aceito" | "recusado") => { salvarConsentimento(v); setAberto(false); };
  return (
    <div role="dialog" aria-label="Cookies" className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-lg rounded-lg border border-border bg-background p-5 shadow-lg md:bottom-6">
      <p className="text-sm text-muted-foreground">Usamos cookies de medição e publicidade (Meta, Google e outras plataformas) para entender de onde vêm os visitantes e medir anúncios. Você pode mudar sua escolha quando quiser.</p>
      <div className="mt-4 flex gap-3">
        <Button variant="outline" className="flex-1" onClick={() => escolher("recusado")}>Recusar</Button>
        <Button className="flex-1" onClick={() => escolher("aceito")}>Aceitar</Button>
      </div>
    </div>
  );
}
