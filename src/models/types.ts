// enum : un ensemble fermé de valeurs nommées.
export enum Categorie {
  Livre,
  Vetement,
  Electronique,
}
// Union de littéraux : la variable ne peut valoir QUE l'une de ces trois chaînes.
export type Statut = "disponible" | "indisponible" | "promotion";
// Alias de type : un nom court pour une union number | string..
export type ID = number | string;
// Tuple : tableau de longueur FIXE, avec un type par position.
export type Dimensions = [largeur: number, hauteur: number];


export interface ProduitBrut {
  id: ID;
  nom: string;
  prix: number;
  categorie: Categorie;
}