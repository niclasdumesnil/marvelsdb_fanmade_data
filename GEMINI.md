# Directives et Règles du Projet `marvelsdb_fanmade_data`

## À lire avant toute modification

1. **[`CLAUDE.md`](CLAUDE.md)** (racine du dépôt) — invariants du projet, structure des données JSON, attribution des identifiants (`PAS_QUINTE_5000`).
2. **Référentiel de Vocabulaire & Règles de Formatage** (`docs/vocabulaire/`) :
   - `guide_formatage_et_typographie.md` : typographie française stricte (espaces insécables `\u00A0` devant `:`, `!`, `?`, tirets `—` et `–`, guillemets `« ... »`).
   - `vocabulaire_et_lexique_bilingue.md` : lexique bilingue de référence EN ↔ FR ordonné alphabétiquement.
   - `procedure_traduction_automatique_pack.md` : pipeline de traduction des packs et sets.
3. **Validation locale systématique** :
   ```powershell
   node rules_card_terms.verif.cjs
   ```

---

## 📜 Gouvernance Git & Exception de Branche

- **Exception de branche** : pour le projet `marvelsdb_fanmade_data`, il n'est **pas demandé de travailler en branche de feature**. Le travail direct et les commits sur la branche par défaut (`master`) sont pleinement autorisés.
- **Push / Publication distante** : ⚠️ `git push` exige **toujours la confirmation explicite** de l'utilisateur. Ne jamais pousser sans autorisation préalable.
