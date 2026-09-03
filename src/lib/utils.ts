import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FRESHA_CONFIG = {
  providerId: "354459",
  locationId: "380113",
  slug: "the-beauty-barn-sowuxl7s",
  directBookingUrl: "https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459",
  voucherUrl: "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-hall-farm-barn-beeby-road-wv85isjz/vouchers?pId=354459",
};
