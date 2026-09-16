# MarvelSDB Fanmade Data — Base de Données des Cartes Marvel Champions

Dépôt principal contenant l'ensemble des données brutes en format JSON pour les cartes officielles et fan-made Marvel Champions (packs, cartes, scénarios, campagnes, traductions FR/EN, règles).

---

## 🎯 Domaine & Rôle OS
- **Domaine OS** : `marvel-champions`
- **Type OS** : `dataset`
- **Git Repo Origin** : `https://github.com/niclasdumesnil/marvelsdb_fanmade_data.git`
- **Git Repo Upstream** : `https://github.com/zzorba/marvelsdb-json-data.git`

---

## 📁 Emplacements des données
- **Répertoire du projet** : `C:\OS-Merlin\projets\marvelsdb_fanmade_data\`
- **Packs officiels & fanmade** : `pack/` et `packs.json` / `packs_fanmade.json`
- **Traductions** : `translations/fr/`
- **Règles bilingues** : `rules/` et `translations/fr/rules/`

---

## 🔢 Attribution des `cgdb_id` — quinte 5000

Le code d'une carte vaut **`cgdb_id × 100 + position`**. Un pack qui dépasse 99 positions
déborde donc sur l'identifiant suivant : Alpha Flight (5045, 104 positions) produit des codes
en `5046xx`, et tout pack posé sur 5046 aurait partagé ses codes.

**Règle : dans la quinte 5000, on attribue un identifiant sur cinq** — 5050, 5055, 5060, 5065…
Les quatre intermédiaires sont réservés d'office, sans attendre que le pack ait ses cartes.
Cinq identifiants donnent 500 positions de marge, ce qu'aucun pack n'a jamais approché.

La règle est appliquée par l'éditeur — `mc4db_editor/app/components/PackManagerView.tsx`,
constante `PAS_QUINTE_5000` — qui bloque les intermédiaires et ne propose que des multiples
du pas.

⚠️ **Renuméroter un pack, c'est renuméroter ses cartes.** Le `cgdb_id` seul ne suffit pas :
il faut réécrire le préfixe de chaque `code` et de chaque `back_link` des fichiers de cartes,
renommer les images du bundle (nommées par code), et mettre la base à jour. Les packs
antérieurs à cette règle (5001, 5003, 5007, 5011) ne la respectent pas ; ils ne se
chevauchent pas pour autant et sont laissés tels quels.

---

## 🛠️ Validation des Données
La validation des schémas JSON et de la cohérence des cartes s'effectue via le service `mc-services` :
```powershell
# Valider les données via le script centralisé de mc-services
python C:/OS-Merlin/projets/mc-services/scripts/validate.py --base-path C:/OS-Merlin/projets/marvelsdb_fanmade_data
```

---

## 📜 Gouvernance Git
- **Fork préservé** avec accès à l'historique et au remote `upstream`.
- **Brancher AVANT tout développement** — jamais directement sur la branche par défaut.
- **Push / Déploiement** exige la **confirmation explicite** de l'utilisateur.

---

## 📚 Documentation du projet (dans le vault, pas ici)

- **Technique** (pour qui modifie le code) : `C:\OS-Merlin\memoire\projets\marvelsdb_fanmade_data\doc-technique\`
- **Utilisation** (pour l'utilisateur) : `C:\OS-Merlin\memoire\projets\marvelsdb_fanmade_data\doc-utilisation\`
- **Journal des lots** : `C:\OS-Merlin\memoire\projets\marvelsdb_fanmade_data\_cadrage.md`

**Convention impérative : à chaque lot livré, la doc est mise à jour.** Un lot livré sans
sa doc est un lot incomplet.

Les gabarits, le frontmatter, les règles d'index et les interdits sont portés par le skill
**`documentation-projet`** — source unique dans le vault
(`C:\OS-Merlin\memoire\skills\os-merlin\documentation-projet\`), exposé à Claude Code et à
Gemini. **Le charger avant de rédiger** ; ne jamais recopier ses règles ici, sous peine
d'avoir autant de conventions divergentes que de projets.
