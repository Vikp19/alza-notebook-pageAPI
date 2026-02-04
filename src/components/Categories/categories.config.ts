export interface UiCategory {
  id: string;
  label: string;
}

export const CATEGORIES: UiCategory[] = [
  { id: "macbook", label: "Macbook" },
  { id: "gaming", label: "Herní" },
  { id: "office", label: "Kancelářské" },
  { id: "professional", label: "Profesionální" },
  { id: "stylish", label: "Stylové" },
  { id: "basic", label: "Základní" },
  { id: "touch", label: "Dotykové" },
  { id: "installments", label: "Na splátky" },
  { id: "vr", label: "VR Ready" },
  { id: "iris", label: "IRIS Graphics" },
  { id: "bags", label: "Brašny, batohy" },
  { id: "accessories", label: "Příslušenství" },
];
