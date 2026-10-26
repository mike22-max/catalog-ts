"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categorie = void 0;
// enum : un ensemble fermé de valeurs nommées.
// TypeScript les numérote automatiquement : Livre = 0, Vetement = 1, Electronique = 2.
// "export" rend l'enum importable depuis les autres fichiers.
var Categorie;
(function (Categorie) {
    Categorie[Categorie["Livre"] = 0] = "Livre";
    Categorie[Categorie["Vetement"] = 1] = "Vetement";
    Categorie[Categorie["Electronique"] = 2] = "Electronique";
})(Categorie || (exports.Categorie = Categorie = {}));
//# sourceMappingURL=types.js.map