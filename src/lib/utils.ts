import { clsx, type ClassValue } from "clsx";
import { format, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToShortDate(isoDateString: string | null) {
  if (!isoDateString) return "";
  try {
    const date = parseISO(isoDateString);
    return format(date, "MMM d, yyyy");
  } catch {
    return "";
  }
}

export function formatCurrency(valor: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(valor);
}

export function formatToDateTime(fechaISO: string) {
  const fecha = parseISO(fechaISO);
  if (!fecha || isNaN(fecha.getTime())) return "";
  return format(fecha, "MMMM d, yyyy 'at' h:mm a");
}
