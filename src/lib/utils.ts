import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return format(new Date(date), "yyyy年MM月dd日", { locale: zhCN });
}

export function estimateReadingTime(content: string): number {
  // Average reading speed: ~400 Chinese characters or ~200 English words per minute
  const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = content
    .replace(/[\u4e00-\u9fa5]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = chineseChars / 400 + englishWords / 200;
  return Math.max(1, Math.ceil(minutes));
}
