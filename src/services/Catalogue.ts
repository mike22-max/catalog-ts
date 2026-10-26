import { Electronique, Livre, Produit, Vetement } from "../models/Produit";
import { Categorie, type ID, type ProduitBrut } from "../models/types";
import { somme } from "../utils/format";

// Garde de type : valide la forme brute avant tout accès aux propriétés.
export function estProduitBrut(x: unknown): x is ProduitBrut {
  if (typeof x !== "object" || x === null) return false;

  const objet = x as Record<string, unknown>;
  if (
    !("id" in objet) ||
    !("nom" in objet) ||
    !("prix" in objet) ||
    !("categorie" in objet)
  ) {
    return false;
  }

  const idValide = typeof objet.id === "number" || typeof objet.id === "string";
  const nomValide = typeof objet.nom === "string";
  const prixValide = typeof objet.prix === "number";
  const categorieValide =
    objet.categorie === Categorie.Livre ||
    objet.categorie === Categorie.Vetement ||
    objet.categorie === Categorie.Electronique;

  return idValide && nomValide && prixValide && categorieValide;
}

// Décorateur de classe : exécuté au moment de la définition.
export function journal(cible: any): void {
  console.log("Service enregistré : " + cible.name);
}

@journal
export class Catalogue {
  private produits: Produit[] = [];

  ajouter(produit: Produit): void {
    this.produits.push(produit);
  }

  lister(): Produit[] {
    return [...this.produits];
  }

  rechercherParId(id: ID): Produit | undefined {
    return this.produits.find((produit) => produit.id === id);
  }

  filtrerParCategorie(categorie: Categorie): Produit[] {
    return this.produits.filter((produit) => produit.categorie === categorie);
  }

  total(): number {
    return somme(...this.produits.map((produit) => produit.prix));
  }

  // Import défensif : unknown oblige à vérifier la forme avant usage.
  importer(donnee: unknown): void {
    if (!estProduitBrut(donnee)) {
      console.warn("Import ignoré : donnée invalide.", donnee);
      return;
    }

    switch (donnee.categorie) {
      case Categorie.Livre:
        this.ajouter(
          new Livre(donnee.id, donnee.nom, donnee.prix, "Auteur inconnu"),
        );
        break;
      case Categorie.Vetement:
        this.ajouter(
          new Vetement(donnee.id, donnee.nom, donnee.prix, "Taille unique"),
        );
        break;
      case Categorie.Electronique:
        this.ajouter(new Electronique(donnee.id, donnee.nom, donnee.prix));
        break;
    }
  }
}
