// Fonctions utilitaires de formatage (surcharge, paramètre reste, valeur par défaut)
export function formatPrix(prix: number, devise: string = "FCFA"): string {
  return `${prix} ${devise}`;
}

// Paramètre du reste : regroupe tous les arguments dans un tableau.
export function somme(...valeurs: number[]): number {
  return valeurs.reduce((total, v) => total + v, 0);
}

// Reçoit un tableau ; réutilise somme()
export function moyenne(valeurs: number[]): number {
  if (valeurs.length === 0) return 0;
  return somme(...valeurs) / valeurs.length;
}

// Surcharge : deux signatures sans corps, une seule implémentation.
export function etiquette(x: number): string;
export function etiquette(x: string): string;
export function etiquette(x: number | string): string {
  if (typeof x === "number") return "Réf #" + x;
  return x.toUpperCase();
}
