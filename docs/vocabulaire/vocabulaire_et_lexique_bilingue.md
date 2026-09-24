# Dictionnaire du Vocabulaire de Jeu & Lexique Bilingue (EN ↔ FR)
## Marvel Champions LCG — Référentiel Officiel & Fanmade

Ce dictionnaire constitue le **lexique bilingue de référence** pour Marvel Champions dans l'écosystème **MC4DB**.
Il rassemble l'ensemble des termes mécaniques, mots-clés, déclencheurs, statuts et zones de jeu, consolidés par l'analyse systématique des **336 packs** (8 500 cartes) du projet `marvelsdb_fanmade_data` et alignés sur les règles officielles FFG/Asmodee.

---

## 1. Mots-clés Officiels du Jeu (Keywords)

Les mots-clés confèrent des attributs de règles universels aux cartes qui les portent.
Le tableau ci-dessous indique leur forme syntaxique, leur traduction officielle, leur effet résumé et le nombre d'occurrences réelles observées dans le corpus analysé :

| Terme EN | Terme FR | Forme syntaxique | Définition & Règle résumée | Occurrences (Packs) |
|---|---|---|---|---|
| **Surge** | **Renfort** | Mot seul | Après qu'un joueur a révélé une carte avec renfort, ce joueur révèle une carte rencontre supplémentaire. | **490** |
| **Victory X** | **Victoire X** | `Victory X.` *(valeur)* | Lorsqu'une carte avec victoire X est vaincue ou déjouée, elle est ajoutée à la pile de victoire au lieu de la défausse. | **260** |
| **Permanent** | **Permanent** | Mot seul | Une carte avec permanent ne peut pas quitter le jeu sous l'effet de capacités de cartes. | **249** |
| **Piercing** | **Perçant** | Mot seul | Une attaque avec perçant défausse toutes les cartes d'état Tenace du personnage ciblé avant d'infliger ses dégâts. | **216** |
| **Overkill** | **Déferlement** | Mot seul | Les dégâts excédentaires d'une attaque avec déferlement qui élimine un ennemi sont infligés au méchant (ou à l'identité si l'attaquant est un sbire). | **212** |
| **Toughness** | **Ténacité** | Mot seul | Lorsqu'un personnage avec ténacité entre en jeu, placez une carte d'état Tenace sur lui. | **211** |
| **Retaliate X** | **Riposte X** | `Retaliate X.` *(valeur)* | Après qu'un personnage avec riposte X a été attaqué et a subi des dégâts, infligez X dégâts à l'attaquant. | **206** |
| **Uses (X « type »)** | **Utilisations (X « type »)** | `Uses (X type).` *(paramètre)* | Entre en jeu avec X jetons du type indiqué. Après le retrait du dernier jeton (et la résolution de l'effet), défaussez la carte. | **187** |
| **Hinder X** | **Entrave X** | `Hinder X.` *(valeur)* | Une carte avec entrave X entre en jeu avec X menaces supplémentaires placées sur elle. | **181** |
| **Guard** | **Garde** | Mot seul | Tant qu'un sbire avec garde est engagé avec un joueur, ce joueur ne peut pas effectuer d'attaques contre le méchant. | **159** |
| **Ranged** | **À distance** | Mot seul | Une attaque avec à distance ignore le mot-clé Riposte du personnage défenseur. | **116** |
| **Villainous** | **Vilenie** | Mot seul | Lorsqu'un sbire avec vilenie s'active (attaque ou manigance), attribuez-lui une carte de boost face cachée. | **107** |
| **Quickstrike** | **Coup rapide** | Mot seul | Dès qu'un ennemi avec coup rapide engage un joueur, il attaque immédiatement ce joueur si celui-ci est sous forme de héros. | **103** |
| **Steady** | **Solide** | Mot seul | Un personnage avec solide n'est affecté par sonné ou désorienté que s'il possède au moins 2 cartes d'état de ce type. | **95** |
| **Restricted** | **Restreint** | Mot seul | Un joueur ne peut pas contrôler simultanément plus de 2 cartes portant le mot-clé restreint. | **90** |
| **Patrol** | **Patrouille** | Mot seul | Tant qu'un sbire avec patrouille est engagé avec un joueur, ce joueur ne peut pas contrer la manigance principale. | **84** |
| **Stalwart** | **Robuste** | Mot seul | Un personnage avec robuste ne peut ni être sonné, ni être désorienté (immunité totale). | **79** |
| **Incite X** | **Incitation X** | `Incite X.` *(valeur)* | Lorsqu'une carte avec incitation X est révélée, placez immédiatement X menaces sur la manigance principale. | **68** |
| **Team-Up** | **En équipe** | `Team-Up (A & B).` | Ne peut être incluse ou jouée que si les deux personnages spécifiés sont en jeu sous forme d'identité ou d'allié. | **47** |
| **Teamwork (Trait)** | **Collaboration (Trait)** | `Teamwork (Trait).` | Après qu'un sbire avec collaboration entre en jeu, s'il y a un autre sbire avec le même trait en jeu, il s'active immédiatement. | **40** |
| **Peril** | **Péril** | Mot seul | Tant qu'un joueur résout une carte avec péril, les autres joueurs ne peuvent ni l'aider, ni dépenser de ressources ou jouer de cartes. | **25** |
| **Alliance** | **Alliance** | Mot seul | Lorsqu'un joueur déclare son intention de jouer une carte alliance, n'importe quel autre joueur peut aider à payer son coût. | **24** |
| **Setup** | **Mise en place** | Mot seul ou déclencheur | Une carte avec le mot-clé mise en place commence la partie en jeu lors de l'étape de configuration du scénario. | **28** |
| **Temporary** | **Temporaire** | Mot seul | Une carte avec temporaire doit être défaussée du jeu à la fin du round en cours. | **18** |
| **Amplified** | **Amplifié** | Mot seul | Renforce les effets d'amplification d'icônes ou de boost lors des activations. | **7** |

---

## 2. Mots-clés Fanmade (Créations Communautaires)

Ces mots-clés ont été créés par les concepteurs de contenu fanmade et sont pleinement intégrés dans le moteur d'indexation de MC4DB (`rules_card_terms.json`) et les règles bilingues :

| Terme EN | Terme FR | Forme syntaxique | Définition mécanique |
|---|---|---|---|
| **Ablative X** | **Ablatif X** | `Ablative X.` | Entre en jeu avec X jetons armure. Retirez-en 1 après avoir subi des dégâts ; défaussez la carte au retrait du dernier jeton. |
| **Agile X** | **Agile X** | `Agile X.` | Réduit de X les dégâts subis lors des attaques non défendues du méchant et des sbires portant vilenie. |
| **Armored X** | **Blindé X** | `Armored X.` | Lorsqu'un personnage avec blindé X subirait des dégâts d'une attaque, prévenez X de ces dégâts. |
| **Companion** | **Compagnon** | Mot seul | Un allié avec compagnon ne compte pas dans la limite d'alliés du joueur et ne peut pas défendre contre des attaques. |
| **Critical (X)** | **Critique (X)** | `Critical (X).` | Défaussez les X cartes du dessus du deck rencontre et infligez à la cible autant de dégâts que le total d'icônes de boost défaussées. |
| **Drain X** | **Drain X** | `Drain X.` | Lorsque drain X est déclenché par un personnage, infligez X dégâts à la cible, puis soignez X dégâts de ce personnage si la cible a subi des dégâts. |
| **Fleeting** | **Fugace** | Mot seul | Après la fin de la phase en cours, défaussez immédiatement cette carte du jeu. |
| **Fragile** | **Fragile** | Mot seul | Les attaques ciblant ce personnage gagnent automatiquement le mot-clé Déferlement. |
| **Hunter** | **Chasseur** | Mot seul | Au début de chaque phase, ce sbire s'engage automatiquement avec l'identité ayant le moins de points de vie restants. |
| **Investigate** | **Enquêter** | Mot seul | Regardez les 3 cartes du dessus du deck rencontre, défaussez-en 1 et replacez les autres sur le dessus du deck dans l'ordre de votre choix. |
| **Legion** | **Légion** | Mot seul | 2 alliés avec légion ne comptent ensemble que pour 1 seul allié dans votre limite d'alliés. |
| **Reckless** | **Téméraire** | Mot seul | Lorsque ce personnage entre en jeu, placez 1 menace sur chaque manigance en jeu. |
| **Regeneration X** | **Régénération X** | `Regeneration X.` | Lorsque ce personnage s'active, soignez immédiatement X dégâts sur ce personnage. |
| **Resilient** | **Résistant** | Mot seul | Ne peut pas être vaincu par la résolution de dégâts consécutifs. |
| **Scavenge** | **Puiser** | Mot seul | Défaussez des cartes du dessus du deck indiqué jusqu'à trouver une carte satisfaisant les critères, puis placez-la dans la zone indiquée. |
| **Suppression** | **Suppression** | Mot seul | Considérez la boîte de texte de la carte attachée comme étant complètement vierge. |

---

## 3. Déclencheurs de Capacités & Fenêtres d'Action (Triggers)

Les déclencheurs ouvrent une capacité et définissent les conditions et fenêtres temporelles sous lesquelles elle peut être exécutée.

| Déclencheur EN | Déclencheur FR | Catégorie | Description & Fenêtre temporelle | Occurrences (Packs) |
|---|---|---|---|---|
| **When Revealed** | **Une fois révélé(e)** | Rencontre | Se résout dès que la carte est révélée depuis le deck rencontre ou par un effet. | **1 586** |
| **Hero Action** | **Action de héros** | Action joueur | Action jouable uniquement par un joueur sous forme de Héros durant son tour ou sur demande. | **1 283** |
| **Forced Response** | **Réponse forcée** | Réponse passive | Réponse **obligatoire** déclenchée immédiatement après la survenue de son déclencheur. | **852** |
| **Forced Interrupt** | **Interruption forcée** | Interruption | Interruption **obligatoire** résolue juste avant que son événement déclencheur ne se produise. | **717** |
| **Response** | **Réponse** | Réponse joueur | Réponse **optionnelle** exécutable après la survenue de son événement déclencheur. | **542** |
| **Action** | **Action** | Action joueur | Action jouable sous n'importe quelle forme d'identité (Héros ou Alter ego). | **534** |
| **When Defeated** | **Une fois vaincu(e)** | Rencontre | Se résout immédiatement lorsqu'un ennemi ou une manigance est vaincu(e) ou déjoué(e). | **428** |
| **Hero Response** | **Réponse de héros** | Réponse joueur | Réponse optionnelle exécutable uniquement sous forme de Héros. | **335** |
| **Hero Interrupt** | **Interruption de héros** | Interruption | Interruption optionnelle exécutable uniquement sous forme de Héros. | **325** |
| **Interrupt** | **Interruption** | Interruption | Interruption optionnelle exécutable sous n'importe quelle forme d'identité. | **308** |
| **Alter-Ego Action** | **Action d'alter ego** | Action joueur | Action jouable uniquement lorsque le joueur est sous forme d'Alter ego. | **256** |
| **Hero Resource** | **Ressource de héros** | Ressource | Capacité de génération de ressource réservée à la forme Héros. | **66** |
| **Boost** | **Boost** | Boost | Effet supplémentaire résolu lorsqu'une carte portant cette ligne est retournée comme carte de boost. | **49** |
| **Setup** | **Mise en place** | Configuration | Capacité spéciale exécutée lors de la phase de préparation de la partie. | **28** |
| **Alter-Ego Response** | **Réponse d'alter ego** | Réponse joueur | Réponse optionnelle réservée à la forme Alter ego. | **20** |
| **When Completed** | **Une fois achevé(e)** | Rencontre | Se résout lorsqu'une étape de manigance principale atteint son seuil cible de menace. | **19** |
| **Forced Action** | **Action forcée** | Action passive | Action automatique imposée par une carte d'attachement ou une obligation. | **15** |
| **First Player Action** | **Action de premier joueur** | Action joueur | Action réservée exclusivement au premier joueur du round. | **12** |

---

## 4. États de Statut, Termes d'Action & Zones de Jeu

### 4.1 Cartes d'État & Statuts (Status Cards)
- **Tough status card** $\leftrightarrow$ **Carte d'état Tenace** : Empêche la prochaine occurrence de dégâts subie par le personnage, puis est défaussée.
- **Stunned status card** $\leftrightarrow$ **Carte d'état Sonné** : Remplace la prochaine tentative d'attaque du personnage par la défausse de cette carte.
- **Confused status card** $\leftrightarrow$ **Carte d'état Désorienté** : Remplace la prochaine tentative de contre (ou de manigance pour un ennemi) par la défausse de cette carte.
- **To stun** $\leftrightarrow$ **Sonner** : Donner une carte d'état Sonné.
- **To confuse** $\leftrightarrow$ **Désorienter** : Donner une carte d'état Désorienté.

### 4.2 Actions & Manipulation des Cartes
- **To exhaust** $\leftrightarrow$ **Incliner** : Pivoter la carte de 90° pour indiquer qu'elle a été utilisée.
- **To ready** $\leftrightarrow$ **Redresser** : Remettre la carte en position verticale active.
- **To discard** $\leftrightarrow$ **Défausser** : Envoyer une carte vers la pile de défausse appropriée.
- **To remove from the game** $\leftrightarrow$ **Retirer de la partie** : Placer la carte hors du jeu jusqu'à la fin de la partie.
- **To defeat** $\leftrightarrow$ **Vaincre** : Réduire les points de vie d'un personnage à zéro ou retirer toute la menace d'une manigance annexe.
- **To engage** $\leftrightarrow$ **Engager** : Amener un sbire dans la zone de jeu d'un joueur.
- **To attach to...** $\leftrightarrow$ **Attacher à...** : Lier physiquement une carte d'attachement ou une amélioration à une cible.

### 4.3 Dégâts, Soins & Menace
- **To deal damage** $\leftrightarrow$ **Infliger des dégâts** : Causer une perte de points de vie.
- **To take / suffer damage** $\leftrightarrow$ **Subir des dégâts** : Recevoir des dégâts.
- **Indirect damage** $\leftrightarrow$ **Dégâts indirects** : Dégâts devant être répartis librement entre les personnages contrôlés par le joueur.
- **Consequential damage** $\leftrightarrow$ **Dégâts consécutifs** : Dégâts subis automatiquement par un allié après avoir attaqué ou contré (indiqués sous ses stats).
- **Undefended attack** $\leftrightarrow$ **Attaque non défendue** : Attaque contre laquelle aucun personnage n'a été incliné pour défendre.
- **To heal** $\leftrightarrow$ **Soigner** : Retirer des jetons de dégâts d'un personnage.
- **To place threat** $\leftrightarrow$ **Placer de la menace** : Ajouter des jetons de menace sur une manigance.
- **To remove threat** $\leftrightarrow$ **Retirer de la menace** : Enlever des jetons de menace d'une manigance.

### 4.4 Zones de Jeu & Decks
- **Encounter deck** $\leftrightarrow$ **Deck Rencontre** : La pioche principale des cartes de scénario.
- **Encounter discard pile** $\leftrightarrow$ **Pile de défausse Rencontre** : Défausse des cartes de rencontre.
- **Victory display** $\leftrightarrow$ **Pile de victoire** : Zone où sont conservées les cartes portant Victoire X après leur élimination.
- **Main scheme deck** $\leftrightarrow$ **Deck Manigance principale** : La pile des stades successifs de la manigance principale.
- **Play area** $\leftrightarrow$ **Zone de jeu** : L'espace devant les joueurs où reposent les cartes actives.
- **Facedown / Faceup** $\leftrightarrow$ **Face cachée / Face visible** : Orientation de la face d'une carte.
- **Hand size** $\leftrightarrow$ **Taille de main** : Nombre maximal de cartes piochées en fin de round.
- **Hit points (HP)** $\leftrightarrow$ **Points de vie (PV)** : Seuil de santé avant élimination.
- **Ally limit** $\leftrightarrow$ **Limite d'alliés** : Nombre maximal d'alliés qu'un joueur peut contrôler (3 par défaut).
- **Basic power** $\leftrightarrow$ **Pouvoir de base** : Utilisation brute de l'ATQ, du CTR ou de la DEF d'un héros.
- **Basic recovery** $\leftrightarrow$ **Récupération de base** : Utilisation brute de la REC d'un alter ego pour se soigner.

---

## 5. Tableau des Faux Amis & Pièges de Traduction

Dans les traductions non professionnelles ou automatisées, certains termes anglais sont régulièrement traduits de manière erronée. Le tableau ci-dessous liste les pièges les plus fréquents :

| Terme Anglais (EN) | Traduction Officielle (FR) | ❌ Mauvaise Traduction à Proscrire | Explication & Contexte |
|---|---|---|---|
| **Surge** | **Renfort** | ~~Surgissement~~, ~~Vague~~ | FFG a fixé *Renfort* dès la boîte de base. |
| **Toughness** | **Ténacité** | ~~Robustesse~~ | *Ténacité* donne une carte d'état Tenace. *Robustesse* est réservé à *Stalwart*. |
| **Stalwart** | **Robuste** | ~~Inébranlable~~, ~~Ténacité~~ | *Robuste* empêche d'être sonné ou désorienté. |
| **Overkill** | **Déferlement** | ~~Surpuissance~~, ~~Massacre~~ | Les dégâts excédentaires déferlent sur l'identité ou le méchant. |
| **Piercing** | **Perçant** | ~~Perforant~~, ~~Pénétrant~~ | Défausse Tenace avant d'infliger les dégâts. |
| **Hinder** | **Entrave** | ~~Gêne~~, ~~Obstacle~~ | Menace additionnelle placée à l'entrée en jeu d'une manigance. |
| **Thwart (verbe)** | **contrer** | ~~déjouer~~ | *Contrer* est l'action standard. *Déjouer* n'est utilisé que dans la formule « une fois déjouée ». |
| **Thwart (stat)** | **CTR** | ~~THW~~, ~~CONTRE~~ | L'abréviation officielle française imprimée sur la carte est **CTR**. |
| **Scheme (stat)** | **MNG** | ~~SCH~~, ~~MAN~~ | L'abréviation officielle française imprimée sur la carte est **MNG**. |
| **Attack (stat)** | **ATQ** | ~~ATK~~, ~~ATT~~ | L'abréviation officielle française imprimée sur la carte est **ATQ**. |
| **Steady** | **Solide** | ~~Stable~~, ~~Ferme~~ | Nécessite 2 états sonné/désorienté pour être affecté. |
| **Villainous** | **Vilenie** | ~~Scélérat~~, ~~Maléfique~~ | Permet à un sbire de recevoir une carte de boost lors de son activation. |
| **Retaliate** | **Riposte** | ~~Représailles~~ | Dégâts infligés en retour après avoir subi une attaque. *(Ne pas confondre avec le nom de capacité thématique Retribution → Représailles sur Venom 27075).* |
| **Quickstrike** | **Coup rapide** | ~~Frappe rapide~~ | Attaque immédiate dès que le sbire engage un héros. |
| **Guard** | **Garde** | ~~Gardiens~~ | Empêche d'attaquer directement le méchant. |
