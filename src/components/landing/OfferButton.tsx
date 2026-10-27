import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { configuracaoCurso, destinoInscricao } from "@/config/curso";
import { eventoInscricao } from "@/lib/tracking";

export function OfferButton({ className }: { children?: React.ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  const destino = destinoInscricao();
  const abertas = configuracaoCurso.inscricoesAbertas;
  const texto = abertas ? "Quero fazer parte da primeira turma" : "Entrar no grupo de WhatsApp";
  const rastrear = () => {
    if (abertas && destino) eventoInscricao(configuracaoCurso.valorCurso);
  };
  if (destino) {
    return (
      <Button asChild variant="cta" size="lg" className={className}>
        <a href={destino} onClick={rastrear}>{texto}</a>
      </Button>
    );
  }
  return (
    <>
      <Button variant="cta" size="lg" className={className} onClick={() => { rastrear(); setOpen(true); }}>
        {texto}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-lg">
          <DialogTitle className="font-display text-2xl text-primary">
            {abertas ? "Inscrições abertas" : "Grupo de WhatsApp em preparação"}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {abertas
              ? "O link de pagamento está sendo preparado. Volte em breve para concluir sua inscrição."
              : "As inscrições ainda não estão abertas. O link do grupo de WhatsApp será disponibilizado em breve."}
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="default" className="rounded-full px-8">Entendi</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
