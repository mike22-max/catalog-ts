import { Livre, Vetement } from "./models/Produit";
import { Catalogue } from "./services/Catalogue";
import { Categorie } from "./models/types";
import { etiquette, formatPrix, moyenne, somme } from "./utils/format";

const catalogue = new Catalogue();

const livre = new Livre(1, "Le Petit Prince", 5000, "Antoine de Saint-Exupéry");
const vetement = new Vetement(2, "T-shirt", 3500, "M");

catalogue.ajouter(livre);
catalogue.ajouter(vetement);

console.log("=== Catalogue ===");
for (const produit of catalogue.lister()) {
  console.log(produit.afficher());
}

console.log("=== Total ===");
console.log(formatPrix(catalogue.total()));

console.log("=== Recherche par id ===");
const trouve = catalogue.rechercherParId(1);
console.log(trouve ? trouve.afficher() : "Produit 1 introuvable");
const absent = catalogue.rechercherParId(999);
console.log(absent ? absent.afficher() : "Produit 999 introuvable");

console.log("=== Filtrage par catégorie ===");
const livres = catalogue.filtrerParCategorie(Categorie.Livre);
for (const produit of livres) {
  console.log(produit.resume());
}

console.log("=== Import ===");
catalogue.importer({ id: 3, nom: "Souris", prix: 2000, categorie: 2 });
catalogue.importer("donnée invalide");
const souris = catalogue.rechercherParId(3);
console.log(souris ? souris.afficher() : "Produit 3 introuvable");

console.log("=== Utilitaires ===");
console.log(formatPrix(500));
console.log(somme(2, 4, 6));
console.log(moyenne([2, 4, 6]));
console.log(etiquette(5));
console.log(etiquette("x"));

console.log("=== Prix négatif ===");
livre.prix = -100;
console.log(`Prix conservé : ${formatPrix(livre.prix)}`);
