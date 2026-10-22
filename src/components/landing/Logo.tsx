import { course } from "@/config/course";

export function Logo() {
  if (course.logo) {
    return <img src={course.logo} alt={course.brand} className="h-9 w-auto" />;
  }
  return (
    <span className="font-display text-xl font-bold text-primary-foreground">
      Viver de <span className="text-accent">Loja</span>
    </span>
  );
}
