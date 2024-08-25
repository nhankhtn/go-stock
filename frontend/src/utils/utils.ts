import { PATTERN_EMAIL } from "@/constants";

export function isValidEmail(email: string) {
  return PATTERN_EMAIL.test(email);
}
export function formatNumber(number: number): string {
  const numberFormatted: number = Math.floor(number * 10000);
  return `${numberFormatted >= 0 ? "+" : "-"}  ${
    Math.abs(numberFormatted) / 100
  }%`;
}
