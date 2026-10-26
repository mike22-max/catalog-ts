export declare enum Categorie {
    Livre = 0,
    Vetement = 1,
    Electronique = 2
}
export type Statut = "disponible" | "indisponible" | "promotion";
export type ID = number | string;
export type Dimensions = [largeur: number, hauteur: number];
export interface ProduitBrut {
    id: ID;
    nom: string;
    prix: number;
    categorie: Categorie;
}
//# sourceMappingURL=types.d.ts.map