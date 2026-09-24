# Guide de Formatage & Typographie Bilingue (FR / EN)
## Marvel Champions LCG — Éditeur & Données de Cartes

Ce guide établit les standards typographiques, syntaxiques et techniques pour la rédaction et la traduction des cartes Marvel Champions dans l'écosystème **MC4DB** (`marvelsdb_fanmade_data` / `mc4db_editor`).
Il est directement adossé aux moteurs de validation et de formatage automatique (`lib/formattingRules.ts`, `lib/translationLinter.ts` et `formatting/text_formatting_rules.json`).

---

## 1. Règles Typographiques Françaises vs Anglaises

La typographie française obéit à des normes strictes qui diffèrent systématiquement de l'anglais. Le tableau suivant récapitule les règles fondamentales vérifiées par l'audit du Pack Editor :

| Élément | Règle Française (FR) | Règle Anglaise (EN) | Exemple FR | Exemple EN |
|---|---|---|---|---|
| **Guillemets** | Guillemets français `« ... »` avec **espace insécable** (`\u00A0`) à l'intérieur. | Guillemets doubles courbés `“...”` sans espace interne. | `« Attaque Surprise »` | `“Surprise Attack”` |
| **Deux-points (`:`)** | **Espace insécable obligatoire** avant le deux-points (` :`). | **Aucune espace** avant le deux-points (`:`), espace normale après. | `<b>Action</b> : piochez...` | `<b>Action</b>: Draw...` |
| **Point d'exclamation / interrogation (`!`, `?`)** | **Espace insécable obligatoire** avant (` !`, ` ?`). | **Aucune espace** avant (`!`, `?`). | `Arrêtez-le !` | `Stop him!` |
| **Casse après le deux-points** | **Minuscule obligatoire** immédiatement après le `:`, sauf s'il s'agit d'un nom propre (héros, lieu, organisation). | **Majuscule obligatoire** immédiatement après le `:`, quelle que soit la nature du mot. | `<b>Réponse</b> : après que...`<br>`<b>Action</b> : Peter Parker gagne...` | `<b>Response</b>: After you...`<br>`<b>Action</b>: Deal 3 damage...` |
| **Tiret cadratin (`—`, em-dash)** | Réservé **exclusivement** au séparateur du **nom de capacité** et du déclencheur. Espace insécable avant et après. | Même usage thématique. Espaces standards ou accolé selon le pack. | `<i>Sens d'Araignée</i> — <b>Interruption</b> : ...` | `<i>Spider-Sense</i> — <b>Interrupt</b>: ...` |
| **Tiret demi-cadratin (`–`, en-dash)** | Réservé **exclusivement** au texte d'ambiance (*flavor*) pour l'attribution de citation. Espace normale avant, insécable après. | Même usage dans le texte d'ambiance. | `« Je peux faire ça toute la journée. » – Steve Rogers` | `“I can do this all day.” – Steve Rogers` |
| **Flèche de coût / effet (`→`)** | Remplacement obligatoire de `->` par `→`. Espace insécable avant, espace normale après. | Remplacement obligatoire de `->` par `→`. | `Inclinez cette carte → soignez 2 dégâts.` | `Exhaust this card → heal 2 damage.` |
| **Accents sur majuscules** | **Obligatoires sans exception** sur toutes les majuscules et capitales initiales. | Non applicable. | `Élite`, `Équipe`, `À distance`, `Événement` | `Elite`, `Team`, `Ranged`, `Event` |

> [!CAUTION]
> **Interdiction du tiret cadratin dans le flavor** : Le tiret cadratin (`—`) est strictement interdit dans le texte d'ambiance (*flavor*). Seul le tiret demi-cadratin (`–`) est autorisé pour introduire le nom de l'auteur d'une citation. Le linter bloque tout flavor contenant un `—`.

---

## 2. Balisage HTML & Syntaxe de Texte

Le balisage HTML à l'intérieur des textes de cartes est restreint et contrôlé par une liste blanche rigoureuse :

### 2.1 La balise `<b>` (Gras)
- **Règle absolue** : La balise `<b>` est **strictement réservée aux déclencheurs de capacités homologués** et aux mentions de fin de partie.
- **Interdiction formelle** : Ne jamais mettre en gras un trait, un mot-clé (ex: *Renfort*, *Garde*, *Perçant* restent en texte brut ou avec leur majuscule initiale, jamais en gras), ou un effet de texte standard.
- **Position des deux-points** : Le deux-points doit **toujours être placé en dehors** de la balise fermante :
  - ✅ Correct (FR) : `<b>Action de héros</b> : `
  - ❌ Incorrect : `<b>Action de héros :</b> ` ou `<b>Action de héros:</b>`
  - ✅ Correct (EN) : `<b>Hero Action</b>: `
  - ❌ Incorrect : `<b>Hero Action:</b>`

#### Liste blanche des déclencheurs admis dans `<b>` :
- **Actions** : `Action`, `Action de héros`, `Action d'alter ego`, `Action forcée`, `Action de premier joueur`.
- **Interruptions** : `Interruption`, `Interruption de héros`, `Interruption d'alter ego`, `Interruption forced`, `Interruption forcée`, `Interruption forcée (héros)`, `Interruption de premier joueur`.
- **Réponses** : `Réponse`, `Réponse de héros`, `Réponse d'alter ego`, `Réponse forcée`, `Réponse de mission`.
- **Ressources** : `Ressource`, `Ressource de héros`, `Ressource d'alter ego`.
- **Déclencheurs de rencontre** : `Une fois révélé`, `Une fois révélée`, `Une fois révélé (héros)`, `Une fois révélée (héros)`, `Une fois révélé (alter ego)`, `Une fois révélée (alter ego)`, `Une fois vaincu`, `Une fois vaincue`, `Une fois déjouée`, `Une fois achevé`, `Une fois achevée`.
- **Spéciaux & Structure** : `Mise en place`, `Contenu`, `Spécial`, `Boost`, `Si ce stade est achevé, les joueurs perdent la partie.`, `Si cette manigance est achevée, les joueurs perdent la partie.`.

### 2.2 La balise `<i>` (Italique)
La balise `<i>` a deux usages exclusifs dans le champ `text` :
1. **Nom thématique de la capacité** : placé immédiatement avant un tiret cadratin :
   - `<i>Rayon Répulseur</i> — <b>Action de héros</b> (<i>attaque</i>) : ...`
2. **Sous-type ou modalité d'action entre parenthèses** :
   - `(<i>attaque</i>)`, `(<i>contre</i>)`, `(<i>défense</i>)`.

> [!WARNING]
> **Interdiction formelle de `<i>` dans le champ `flavor`** :
> L'interface web de MC4DB et les gabarits CardMaker appliquent déjà automatiquement le style italique à l'intégralité du texte d'ambiance via les feuilles de style CSS.
> Encadrer le flavor de `<i>...</i>` crée un doublon inutile et déclenche une erreur dans l'audit.

### 2.3 Balisage des Traits dans le texte : `[[Trait]]`
- Lorsque le texte d'une carte fait référence à un trait (par exemple *Avenger*, *Espion*, *Aérien*, *S.H.I.E.L.D.*), le nom du trait doit **impérativement être entouré de doubles crochets** :
  - Exemple : `Choisissez un allié [[Avenger]] ou [[Gardien]].`
  - Exemple : `Placez 1 jeton sur un soutien [[S.H.I.E.L.D.]].`
- Le moteur de MC4DB convertit automatiquement `[[NomDuTrait]]` en un lien cliquable filtrant la base de données.
- **Rappel pour le champ d'en-tête `traits`** : À l'inverse du corps de texte, le champ de métadonnées `traits` de la carte ne contient **aucun crochet**. Chaque trait commence par une majuscule et se termine par un point :
  - Exemple : `"traits": "Avenger. Espion."`

---

## 3. Tokens d'Icônes & Symboles de Jeu

Les symboles et icônes du jeu sont représentés par des codes entre crochets simples :

### 3.1 Abréviations des Statistiques (Imprimées sur la carte)
Les icônes de statistiques imprimées sur les cartes de personnages ou de manigances diffèrent entre l'anglais et le français :

| Statistique | Code / Abréviation EN | Code / Abréviation FR | Règle de traduction |
|---|---|---|---|
| **Thwart / Contre** | `THW` | `CTR` | Traduit en CTR dans le texte français |
| **Attack / Attaque** | `ATK` | `ATQ` | Traduit en ATQ dans le texte français |
| **Scheme / Manigance** | `SCH` | `MNG` | Traduit en MNG dans le texte français |
| **Defense / Défense** | `DEF` | `DEF` | Identique |
| **Recovery / Récupération** | `REC` | `REC` | Identique |

### 3.2 Icônes de Jeu & Ressources
- `[star]` : Icône étoile (renvoie à un effet spécial de stat ou de boost).
- `[per_hero]` : Échelle par joueur / par héros (ex: `2[per_hero]`).
  - 🔴 **INTERDIT** : Le token `[player]` est obsolète et formellement interdit. Il doit toujours être remplacé par `[per_hero]`.
- `[acceleration]` : Icône d'accélération (ajoute 1 menace par round).
- `[crisis]` : Icône de crise (empêche de contrer la manigance principale).
- `[hazard]` : Icône de danger (distribue 1 carte rencontre supplémentaire).
- `[amplify]` : Icône d'amplification (ajoute 1 icône de boost aux activations).
- **Ressources générées ou requises** :
  - `[energy]` : Ressource Énergie
  - `[physical]` : Ressource Physique
  - `[mental]` : Ressource Mentale
  - `[wild]` : Ressource Libre

### 3.3 Format de la Ligne de Boost
Sur les cartes de rencontre comportant un effet de boost dans leur boîte de texte, la ligne doit respecter une syntaxe normalisée précédée d'un filet de séparation horizontal `<hr>` :
- **En Français** : `<hr>[star] <b>Boost</b> : ` *(avec espace insécable avant le deux-points)*
- **En Anglais** : `<hr>[star] <b>Boost</b>: ` *(sans espace avant le deux-points)*

---

## 4. Accords en Genre & Règles de Grammaire

En français, les déclencheurs passifs s'accordent en genre selon le type de carte sur lequel ils apparaissent :

### 4.1 Déclencheur « Une fois révélé(e) »
L'accord dépend de la nature grammaticale du type de carte :

| Forme FR | Types de cartes associés | Justification grammaticale |
|---|---|---|
| **`Une fois révélé`** | `minion`, `attachment` | Masculin singulier (*un sbire*, *un attachement*) |
| **`Une fois révélée`** | `treachery`, `main_scheme`, `side_scheme`, `player_side_scheme`, `obligation` | Féminin singulier (*une traîtrise*, *une manigance*, *une obligation*) |
| **`Une fois révélé (héros)`** / **`(alter ego)`** | `minion`, `attachment` | Accord masculin + condition de forme d'identité |
| **`Une fois révélée (héros)`** / **`(alter ego)`** | `treachery`, `side_scheme`, `obligation` | Accord féminin + condition de forme d'identité |

### 4.2 Déclencheur « Une fois vaincu(e) »
| Forme FR | Types de cartes associés | Justification grammaticale |
|---|---|---|
| **`Une fois vaincu`** | `minion`, `ally`, `villain`, `attachment`, `support` | Masculin singulier (*un sbire vaincu*, *un allié vaincu*) |
| **`Une fois vaincue`** | `side_scheme`, `player_side_scheme`, `upgrade` | Féminin singulier (*une manigance vaincue*, *une amélioration vaincue*) |

### 4.3 Déclencheur « Une fois déjouée »
- Réservé aux manigances (`main_scheme`, `side_scheme`, `player_side_scheme`) lorsque l'effet se déclenche spécifiquement par le retrait de la dernière menace via un contre.

### 4.4 Déclencheur « Une fois achevé(e) »
- `Une fois achevée` s'applique à un stade de manigance principale (`main_scheme`) lorsque le seuil de menace cible est atteint.

### 4.5 Grammaire des Déclencheurs Temporels
Pour maintenir la cohérence stylistique officielle de FFG / Asmodee :
- Le texte suivant immédiatement **`<b>Réponse</b>`** doit débuter par l'une des locutions suivantes :
  - *Après...*, *Lorsque...*, *Une fois...*, ou *Au moment où...*.
- Le texte suivant immédiatement **`<b>Interruption</b>`** doit débuter par l'une des locutions suivantes :
  - *Quand...*, *Lorsque...*, ou *Au moment où...*.

---

## 5. Synthèse des Erreurs Fréquentes à Éviter

```
❌ <b>Action :</b> Deal 3 damage.
   -> Mauvais placement du ":" (doit être hors de <b>) et majuscule manquante en EN.
✅ <b>Action</b>: Deal 3 damage.

❌ <b>Action de héros</b>: Inclinez cette carte.
   -> Espace insécable manquante avant le ":" et majuscule indue après en FR.
✅ <b>Action de héros</b> : inclinez cette carte.

❌ Une fois révélé sur une Traîtrise
   -> Traîtrise est féminin en français.
✅ Une fois révélée : ...

❌ Inclinez un allié <b>Avenger</b>
   -> Un trait ne doit jamais être en gras dans le texte.
✅ Inclinez un allié [[Avenger]]

❌ Ce personnage gagne [player] points de vie.
   -> [player] est interdit.
✅ Ce personnage gagne [per_hero] points de vie.

❌ Ce sbire gagne <b>Garde</b>.
   -> Le mot-clé de statut ne prend jamais de balise <b>.
✅ Ce sbire gagne Garde.
```
