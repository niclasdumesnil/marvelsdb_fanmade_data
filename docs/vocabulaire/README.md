# Référentiel du Vocabulaire, Formatage & Typographie
## Marvel Champions LCG — Base de Données MC4DB (`marvelsdb_fanmade_data`)

Ce dossier rassemble le **référentiel officiel et exhaustif** du vocabulaire, des règles de typographie bilingue (FR/EN) et de la distribution mécanique des cartes de Marvel Champions.
Il a été constitué par un scan systématique des **336 packs** (8 500 cartes) du projet et croisé avec les moteurs de règles et de validation de l'écosystème **MC4DB**.

---

## 📚 Les 3 Fiches de Référence

Le référentiel est structuré en **3 fiches modulaires et complémentaires** :

### 1. ✍️ [Guide de Formatage & Typographie Bilingue (FR / EN)](guide_formatage_et_typographie.md)
*Le guide normatif des règles de saisie pour l'éditeur de cartes et les traducteurs.*
- **Typographie comparée FR vs EN** : guillemets français `« ... »` avec espaces insécables (`\u00A0`), deux-points avec espace insécable en français et minuscule subséquente, tiret cadratin (`—`) pour les capacités, tiret demi-cadratin (`–`) pour le texte d'ambiance.
- **Balisage HTML strict** : balise `<b>` strictement réservée à la liste blanche des déclencheurs homologués, balise `<i>` pour les noms de capacité et types d'action, proscription formelle de `<i>` dans le *flavor*, doubles crochets `[[Trait]]` pour les citations de traits.
- **Symboles & Icônes** : abréviations de statistiques (`CTR`, `ATQ`, `MNG`, `DEF`, `REC`), tokens de jeu (`[star]`, `[per_hero]`, `[acceleration]`, `[crisis]`, `[hazard]`, `[amplify]`, ressources), format de la ligne de boost `<hr>[star] <b>Boost</b> : `.
- **Accords grammaticaux** : accords en genre selon le type de carte (`Une fois révélé` vs `Une fois révélée`, `Une fois vaincu` vs `Une fois vaincue`).

---

### 2. 📖 [Dictionnaire du Vocabulaire de Jeu & Lexique Bilingue](vocabulaire_et_lexique_bilingue.md)
*Le glossaire bilingue complet de toutes les notions et règles du jeu.*
- **Mots-clés officiels (Keywords)** : tableau bilingue complet avec forme syntaxique, définition résumée et occurrences observées (Renfort / *Surge*, Victoire / *Victory*, Permanent, Perçant / *Piercing*, Déferlement / *Overkill*, Ténacité / *Toughness*, Riposte / *Retaliate*, Garde / *Guard*, Patrouille / *Patrol*, Coup rapide / *Quickstrike*, Solide / *Steady*, Robuste / *Stalwart*, etc.).
- **Mots-clés fanmade intégrés** : définitions et formes des mots-clés créés par la communauté (*Ablatif X*, *Blindé X*, *Compagnon*, *Chasseur*, *Fugace*, *Fragile*, *Légion*, *Régénération X*, *Puiser*, etc.).
- **Déclencheurs & fenêtres temporelles** : actions, interruptions, réponses (joueur, héros, alter ego, forcées), conditions de rencontre et de mise en place.
- **États, statuts, actions & zones** : sonné, désorienté, tenace, incliner/redresser, dégâts consécutifs, dégâts indirects, deck rencontre, pile de victoire, etc.
- **Tableau des faux amis** : pièges classiques de traduction à proscrire systématiquement.

---

### 3. 📊 [Index Typologique Croisé : Types de Cartes ↔ Termes de Jeu](index_types_cartes_et_termes.md)
*La cartographie analytique reliant chaque type de carte aux termes du jeu.*
- **Synthèse statistique** : distribution des 8 500 cartes réparties sur 16 types (`event`, `upgrade`, `minion`, `treachery`, `side_scheme`, `ally`, `attachment`, `main_scheme`, `support`, `villain`, `obligation`, `environment`, `hero`, `alter_ego`, `resource`, `player_side_scheme`).
- **Index 1 : Profil par type de carte** : pour chacun des 16 types, liste exhaustive des déclencheurs autorisés/observés, mots-clés prédominants et termes de règles avec volumes exacts.
- **Index 2 : Distribution par mot-clé / déclencheur** : tableau croisé répertoriant pour chaque grand terme la liste des types porteurs et les pourcentages d'apparition constatés.
- **Règles d'affinité mécanique** : principes de conception pour orienter créateurs et relecteurs sur la cohérence entre un terme et le type de carte.

---

### 4. 🧪 [Rapport d'Audit & Validation Pack par Pack](rapport_validation_packs.md)
*Le compte-rendu d'analyse et de contrôle qualité des 336 packs EN et 189 packs FR.*
- **Contrôles systématiques** : conformité des déclencheurs, recherche de faux amis sur les 5 214 cartes françaises, respect des règles typographiques (espaces insécables, guillemets, balisage gras).
- **Indicateurs de qualité** : taux de fidélité terminologique de 99,98 %, absence totale du token interdit `[player]`, liste des 20 packs modèles 100 % conformes et analyse des anomalies historiques.

---

## 🔍 Données & Méthodologie

Ce référentiel a été compilé à partir des sources de vérité du dépôt :
- **Packs scannés** : 336 fichiers dans `pack/*.json` (source anglaise) et 189 fichiers dans `translations/fr/pack/*.json` (traductions françaises officielles et fanmade).
- **Moteur d'indexation** : `rules_card_terms.cjs` et `rules_card_terms.json`.
- **Règles de linting & formatage** : `formatting/text_formatting_rules.json` et `formatting/keywords_dict.json`.
- **Glossaire de règles bilingue** : `memoire/skills/marvel-champions/content-generation/card-fr-en-formatting/reference/lexique_regles_fr.json`.
- **Nomenclatures officielles** : `types.json`, `translations/fr/types.json` et `rules/*.json`.
