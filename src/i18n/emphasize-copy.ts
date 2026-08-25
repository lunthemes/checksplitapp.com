import type { SupportedLanguage } from "./config";

/** Demo people used in method examples (same names in every locale). */
const DEMO_NAMES = [
  "Alex",
  "Blair",
  "Casey",
  "Dana",
  "Maya",
  "Noah",
  "Owen",
  "Priya",
  "Nina",
  "Leo",
  "Sam",
] as const;

/**
 * Official in-app control names as they appear in marketing copy
 * (English fallbacks plus localized UI strings). Longest first.
 */
const APP_LABELS = [
  "Continue in browser",
  "Record a Payment",
  "Get the free app",
  "Fees & Tips",
  "Invite Friends",
  "Who Owes Whom",
  "Lock Trip",
  "Delete Trip",
  "Add Expense",
  "Add Bill",
  "Items and Summary tabs",
  "Summary tab",
  "Expenses tab",
  "Bills tab",
  "Tab Zusammenfassung",
  "onglet Résumé",
  "pestaña Resumen",
  "scheda Riepilogo",
  "fila Rezumat",
  "вкладку Итоги",
  "вкладке Итоги",
  "вкладка Итоги",
  "Summary fület",
  "Summary sekmesini",
  "karty Summary",
  "kartu Summary",
  "kartę Summary",
  "karta Summary",
  "Özet bölümünü",
  "Özet bölümü",
  "Összegzés nézetet",
  "Összegzés nézet",
  "Rechnung Hinzufügen",
  "Ausgabe hinzufügen",
  "Tab Rechnungen",
  "Tab Ausgaben",
  "Agregar Factura",
  "Agregar Gasto",
  "pestaña Cuentas",
  "pestaña Gastos",
  "Tasas y Propina",
  "Ajouter une addition",
  "Ajouter une dépense",
  "onglet Additions",
  "onglet Dépenses",
  "Aggiungi conto",
  "Aggiungi spesa",
  "scheda Conti",
  "scheda Spese",
  "Dodaj Wydatek",
  "karty Rachunki",
  "karty Wydatki",
  "karcie Rachunki",
  "kartę Rachunki",
  "kartę Wydatki",
  "karta Rachunki",
  "Kiadás Hozzáadása",
  "Számlák fülét",
  "Számlák fülön",
  "Számlák fület",
  "Számlák fül",
  "Kiadások fülét",
  "Kiadások fület",
  "Masraf Ekle",
  "Faturalar sekmesini",
  "Faturalar sekmesinden",
  "Faturalar sekmesi",
  "Masraflar sekmesini",
  "Masraflar sekmesinden",
  "kartu Expenses",
  "kartu Bills",
  "kartě Expenses",
  "kartě Bills",
  "Adaugă Cheltuială",
  "Adaugă cheltuială",
  "Adaugă Notă",
  "Înregistrează plata",
  "fila Cheltuieli",
  "fila Note",
  "fila Conturi",
  "Добавить Расход",
  "Добавить Счёт",
  "вкладке Расходы",
  "вкладку Расходы",
  "вкладка Расходы",
  "вкладке Счета",
  "вкладку Счета",
  "вкладка Счета",
  "Tasse e Mancia",
  "Frais et pourboire",
  "Gebühren und Trinkgeld",
  "karty Bills",
  "Everyone",
  "Custom",
].sort((a, b) => b.length - a.length);

/** Standalone in-app screen names when copy omits “tab”. */
const APP_SCREEN_NAMES = [
  "Summary",
  "Zusammenfassung",
  "Résumé",
  "Resumen",
  "Riepilogo",
  "Rezumat",
  "Podsumowanie",
  "Итоги",
  "Özet",
  "Összegzés",
] as const;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Wrap demo names and in-app labels in <strong> for readable body copy. */
export function emphasizeCopy(text: string, _lang: SupportedLanguage): string {
  let s = escapeHtml(text);
  const placeholders: string[] = [];
  for (const label of APP_LABELS) {
    const needle = escapeHtml(label);
    if (!s.includes(needle)) continue;
    const token = `\u0000L${placeholders.length}\u0000`;
    placeholders.push(needle);
    s = s.split(needle).join(token);
  }
  for (const screen of APP_SCREEN_NAMES) {
    s = s.replace(
      new RegExp(
        `(?<![\\p{L}\\u0000])${escapeRegExp(screen)}(?!\\p{L})`,
        "gu",
      ),
      `<strong>${screen}</strong>`,
    );
  }
  for (const name of DEMO_NAMES) {
    s = s.replace(
      new RegExp(`(?<![A-Za-z])${escapeRegExp(name)}(?![A-Za-z])`, "g"),
      `<strong>${name}</strong>`,
    );
  }
  placeholders.forEach((needle, i) => {
    s = s.split(`\u0000L${i}\u0000`).join(`<strong>${needle}</strong>`);
  });
  return s;
}
