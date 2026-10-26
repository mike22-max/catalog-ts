# CataLog

CataLog est un gestionnaire de catalogue en ligne de commande écrit en TypeScript.
Il illustre les modules 1 à 4 du cours : types, fonctions utilitaires, classes,
héritage, polymorphisme, gardes de type et décorateur.

## Prérequis

- Node.js (version 18 ou supérieure)
- npm

## Installation

```bash
npm install
```

## Compilation

```bash
npx tsc
```

Le code compilé est généré dans `dist/`.

## Exécution

```bash
node dist/main.js
```

Les scripts npm équivalents sont également disponibles :

```bash
npm run build
npm start
```

## Structure du projet

```text
src/
├── main.ts                  # Programme principal
├── models/
│   ├── types.ts             # Enum, union, alias, tuple et interface
│   └── Produit.ts           # Classes Produit, Livre, Vetement, Electronique
├── services/
│   └── Catalogue.ts         # Service Catalogue et décorateur journal
└── utils/
    └── format.ts            # Fonctions utilitaires de formatage
```

## Exemple de sortie

```text
Service enregistré : Catalogue
=== Catalogue ===
[1] Le Petit Prince - 5000 FCFA
[2] T-shirt - 3500 FCFA (taille M)
=== Total ===
8500 FCFA
=== Recherche par id ===
[1] Le Petit Prince - 5000 FCFA
Produit 999 introuvable
=== Filtrage par catégorie ===
Livre : Le Petit Prince de Antoine de Saint-Exupéry
=== Import ===
[3] Souris - 2000 FCFA
Import ignoré : donnée invalide. donnée invalide
=== Utilitaires ===
500 FCFA
12
4
Réf #5
X
=== Prix négatif ===
Prix conservé : 5000 FCFA
Prix refusé : un prix ne peut pas être négatif.
```
