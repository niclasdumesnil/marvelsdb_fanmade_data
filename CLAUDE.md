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
