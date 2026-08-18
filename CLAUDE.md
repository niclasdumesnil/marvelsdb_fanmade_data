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
