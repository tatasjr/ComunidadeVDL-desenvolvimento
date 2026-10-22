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
import { checkoutAvailable, course } from "@/config/course";

export function OfferButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  if (checkoutAvailable()) {
    return (
      <Button asChild variant="cta" size="lg" className={className}>
        <a href={course.checkoutUrl!}>{children}</a>
      </Button>
    );
  }
  return (
    <>
      <Button variant="cta" size="lg" className={className} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl">
          <DialogTitle className="font-display text-2xl text-primary">
            As inscrições ainda não estão abertas.
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            A oferta de lançamento será de R$297. O calendário, as condições de pagamento e o canal
            de inscrição serão divulgados na abertura da turma.
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
