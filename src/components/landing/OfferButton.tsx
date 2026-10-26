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
import { configuracaoCurso, pagamentoSeguro } from "@/config/curso";
import { eventoInscricao } from "@/lib/tracking";

export function OfferButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  const checkout = pagamentoSeguro(configuracaoCurso.linkPagamento);
  const rastrear = () => eventoInscricao(configuracaoCurso.valorCurso);
  if (checkout) {
    return (
      <Button asChild variant="cta" size="lg" className={className}>
        <a href={checkout} onClick={rastrear}>{children}</a>
      </Button>
    );
  }
  return (
    <>
      <Button variant="cta" size="lg" className={className} onClick={() => { rastrear(); setOpen(true); }}>
        {children}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-lg">
          <DialogTitle className="font-display text-2xl text-primary">
            As inscrições ainda não estão abertas.
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            O calendário, as condições de pagamento e o canal de inscrição serão divulgados na abertura da turma.
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
