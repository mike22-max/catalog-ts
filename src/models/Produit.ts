import { Categorie, type ID, type Statut } from "./types";
import { formatPrix } from "../utils/format";

// Interface : contrat que toute classe affichable doit respecter.
export interface Affichable {
  afficher(): string;
}

// Classe abstraite : ne peut pas être instanciée directement.
export abstract class Produit implements Affichable {
  constructor(
    public readonly id: ID,
    public nom: string,
    protected _prix: number,
    public categorie: Categorie,
    public statut: Statut = "disponible",
  ) {}

  // Accesseur : lecture contrôlée du prix.
  get prix(): number {
    return this._prix;
  }

  // Mutateur : refuse un prix strictement négatif.
  set prix(valeur: number) {
    if (valeur < 0) {
      console.warn("Prix refusé : un prix ne peut pas être négatif.");
      return;
    }
    this._prix = valeur;
  }

  // Méthode abstraite : chaque sous-classe fournit sa propre version.
  abstract resume(): string;

  afficher(): string {
    return `[${this.id}] ${this.nom} - ${formatPrix(this.prix)}`;
  }
}

// Héritage : Livre réutilise Produit et spécialise son résumé.
export class Livre extends Produit {
  constructor(id: ID, nom: string, prix: number, public auteur: string) {
    super(id, nom, prix, Categorie.Livre);
  }

  resume(): string {
    return `Livre : ${this.nom} de ${this.auteur}`;
  }
}

export class Vetement extends Produit {
  constructor(id: ID, nom: string, prix: number, public taille: string) {
    super(id, nom, prix, Categorie.Vetement);
  }

  // Redéfinition : enrichit l'affichage de la classe parente.
  afficher(): string {
    return `${super.afficher()} (taille ${this.taille})`;
  }

  resume(): string {
    return `Vêtement : ${this.nom} (taille ${this.taille})`;
  }
}

export class Electronique extends Produit {
  constructor(id: ID, nom: string, prix: number) {
    super(id, nom, prix, Categorie.Electronique);
  }

  resume(): string {
    return `Électronique : ${this.nom}`;
  }
}
