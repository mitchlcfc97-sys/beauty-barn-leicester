import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FRESHA_CONFIG = {
  providerId: "354459",
  locationId: "380113",
  slug: "the-beauty-barn-leicester-leicester-beeby-road-x4x1h429",
  directBookingUrl: "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/booking",
  voucherUrl: "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/vouchers",
};
