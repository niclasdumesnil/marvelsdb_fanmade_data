# Rules Reference — JSON Structure

This directory contains the **Rules Reference** data for Marvel Champions, used by [MC4DB](https://mc4db.com/rules).

## Directory Layout

```
marvelsdb_fanmade_data/
├── rules/                          ← English (source of truth)
│   ├── a.json
│   ├── b.json
│   ├── ...
│   └── z.json
└── translations/
    └── fr/
        └── rules/                  ← French translations
            ├── a.json
            ├── b.json
            ├── ...
            └── z.json
```

Files are organized **alphabetically** by the first letter of the rule's English `id`.

---

## EN File Structure (Source of Truth)

Each file is a JSON array of rule entries:

```json
[
  {
    "id": "ability",
    "term": "Ability",
    "type": "official",
    "versions": [
      {
        "version": "1.7",
        "content": "<p>An ability is game text on a card...</p>",
        "whats_new": ""
      }
    ],
    "see_also": ["keyword"]
  }
]
```

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✅ | Unique identifier, derived from the English term. Lowercase, underscores instead of spaces/special chars. Example: `"hit_points_hp"` |
| `term` | ✅ | Display name of the rule. Example: `"Hit Points (HP)"` |
| `type` | ✅ | `"official"` — from the official FFG Rules Reference. `"fanmade"` — community-created rule (displayed in blue). |
| `versions` | ✅ | Array of version objects (see below). |
| `see_also` | ❌ | Array of `id` references to related rules. Values must be existing entry `id`s (not display terms). Example: `["keyword", "guard"]` |

### Version Object

| Field | Required | Description |
|-------|----------|-------------|
| `version` | ✅ | Version number string. Use `"1.7"` for the initial migration. Increment for future updates (e.g. `"1.8"`). |
| `content` | ✅ | HTML content of the rule text. Supports `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<h1>`–`<h3>`, and game icon spans. **Any text that was added or changed compared to the previous version should be wrapped in `<red>…</red>`** to visually track changes inline (displayed in red). |
| `whats_new` | ❌ | HTML summary describing changes from the previous version. Displayed in a dedicated "What's New" section below the entry. Leave empty `""` or omit if no changes to highlight. |

---

## FR File Structure (Translations)

French translation files contain **only translatable fields**. The `type` and `see_also` fields are **never** included — they are inherited from the EN source.

```json
[
  {
    "id": "ability",
    "term": "Capacité",
    "versions": [
      {
        "version": "1.7",
        "content": "<p>Une capacité est un texte de jeu sur une carte...</p>",
        "whats_new": ""
      }
    ]
  }
]
```

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✅ | Must match the EN `id` exactly (used for merging). |
| `term` | ✅ | Translated display name. |
| `versions` | ❌ | Array of translated version objects. If omitted, the EN content is displayed. |

> **Note:** An entry with only `id` and `term` (no `versions`) is valid — it means the rule term is translated but the content is still in English.

---

## Game Icons in Content

Use icon spans to render Marvel Champions icons inline:

```html
<span class="icon icon-energy rules-icon" title="energy" aria-hidden="true"></span>
```

Available icons:

| Icon Code | Display |
|-----------|---------|
| `icon-energy` | Energy resource |
| `icon-physical` | Physical resource |
| `icon-mental` | Mental resource |
| `icon-wild` | Wild resource |
| `icon-boost` | Boost icon |
| `icon-star` | Star icon |
| `icon-unique` | Unique icon |
| `icon-cost` | Cost icon |
| `icon-acceleration` | Acceleration icon |
| `icon-amplify` | Amplify icon |
| `icon-crisis` | Crisis icon |
| `icon-hazard` | Hazard icon |
| `icon-per_hero` | Per hero icon |
| `icon-per_player` | Per player icon |

---

## How to Add a New Rule

### Via the UI (Admins only)

1. Go to [mc4db.com/rules](https://mc4db.com/rules) and log in as an admin.
2. Click the **"+ Ajouter une entrée"** button.
3. Fill in the English term, select the type (Official/Fanmade), and write the content.
4. Optionally fill in the French translation.
5. Click **Save**.

### Manually (via JSON)

1. Determine the `id` from the English term: lowercase, replace spaces/special chars with `_`.  
   Example: `"Per Player Icon"` → `"per_player_icon"`

2. Open the correct EN file based on the first letter (e.g. `p.json` for "per_player_icon").

3. Add the entry in alphabetical order:
   ```json
   {
     "id": "per_player_icon",
     "term": "Per Player Icon",
     "type": "official",
     "versions": [
       {
         "version": "1.7",
         "content": "The per player icon indicates..."
       }
     ]
   }
   ```

4. *(Optional)* Add the French translation in `translations/fr/rules/p.json`:
   ```json
   {
     "id": "per_player_icon",
     "term": "Icône Par Joueur",
     "versions": [
       {
         "version": "1.7",
         "content": "L'icône par joueur indique..."
       }
     ]
   }
   ```

---

## How to Update an Existing Rule

When updating content for a new version:

1. Update the `content` field in the existing version object, **or** add a new version entry.
2. **Mark changed text in red** inside `content`: wrap any added or modified text with `<red>…</red>`. This allows readers to quickly see what changed at a glance directly in the rule text.
3. Fill the `whats_new` field with a short summary of the changes (displayed in a separate "What's New" block below the entry).

Example:
```json
{
  "version": "1.8",
  "content": "A character is a hero, alter-ego, ally, villain, or minion. <red>Environment cards are not characters.</red>",
  "whats_new": "Added clarification that environment cards are not characters."
}
```

> **Tip:** The `<red>` formatting in `content` tracks *inline changes* within the rule text itself, while `whats_new` provides a *summary* displayed separately.

---

## Important Rules

- **`id` must be unique** across all files.
- **EN is the source of truth** for `type` and `see_also`.
- **FR files must not contain** `type` or `see_also`.
- **HTML content** must be valid — close all tags properly.
- **Version numbers** should be consistent across EN and FR for the same entry.
