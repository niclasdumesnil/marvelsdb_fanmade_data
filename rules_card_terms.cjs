/**
 * Regles associees a une carte — implementation de reference.
 *
 * Vit ici, avec `rules_card_terms.json` qu'elle interprete, parce qu'elle a DEUX
 * consommateurs qui lisent tous deux ce repertoire sur disque : le site MC4DB
 * (backend/src, via FANMADE_DATA_DIR) et le bot Jarvis (services/dataLoader.js, via
 * CARDS_DATA_DIR). Une copie dans chacun aurait diverge : le contrat n'est pas
 * « chercher le libelle », il tient dans quatre formes de recherche et une regle de
 * recouvrement, toutes nees d'un faux positif mesure.
 *
 * Ecrite en CommonJS a dessein : le backend MC4DB est en CJS et fait `require`, le bot
 * est en ESM et fait `import index from '.../rules_card_terms.cjs'`. L'inverse ne
 * marcherait pas.
 *
 * Aucune dependance, aucun etat global : `chargerIndex` rend un index, les fonctions de
 * recherche le prennent en argument. A l'appelant de le garder en memoire — le relire a
 * chaque carte couterait un acces disque pour rien.
 */

const fs = require('fs');
const path = require('path');

/** Texte de carte debarrasse de ce qui n'est pas de la langue : traits, balises, icones. */
function nettoyerTexte(texte) {
  return String(texte || '')
    .replace(/\[\[.*?\]\]/g, ' ')   // [[S.H.I.E.L.D.]]
    .replace(/<[^>]+>/g, ' ')       // <b>, <i>, <hr>
    .replace(/\[[a-z_]+\]/gi, ' ')  // [star], [energy]
    .replace(/\s+/g, ' ');
}

function echapper(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Motif de recherche d'un terme, selon sa forme. Les formes sont documentees dans
 * l'en-tete de rules_card_terms.json ; chacune existe parce que la recherche du libelle
 * seul produisait un faux positif : « Uses » attrapait « uses a basic power »,
 * « Hunter » attrapait « Bushmaster the Hunter's attacks ».
 */
function motif(terme) {
  const m = echapper(terme.match);
  switch (terme.forme) {
    case 'value': return new RegExp('\\b' + m + '\\s+(?:X|\\d+)\\b', 'i');
    case 'paren': return new RegExp('\\b' + m + '\\s*\\(', 'i');
    case 'colon': return new RegExp('\\b' + m + '\\s*:', 'i');
    case 'dot':   return new RegExp('\\b' + m + '\\s*\\.', 'i');
    default:      return new RegExp('\\b' + m + '(?:s|es)?\\b', 'i');
  }
}

/**
 * Charge l'index depuis le repertoire de donnees.
 * @param {string} dossierDonnees racine de marvelsdb_fanmade_data
 * @returns {{termes: Array, motifs: Array}} a conserver en memoire par l'appelant
 */
function chargerIndex(dossierDonnees) {
  const chemin = path.join(dossierDonnees, 'rules_card_terms.json');
  const brut = JSON.parse(fs.readFileSync(chemin, 'utf8'));
  const termes = Array.isArray(brut.terms) ? brut.terms : [];
  return {
    termes,
    motifs: termes.map(t => ({ id: t.id, cle: String(t.match).toLowerCase(), rx: motif(t) })),
  };
}

/**
 * Identifiants des regles concernant une carte.
 *
 * @param {string} texteAnglais  le texte ANGLAIS de la carte — jamais la traduction :
 *   63 % seulement des cartes ont un texte francais, moins encore dans les autres
 *   langues. Le libelle affiche, lui, se resout ensuite dans la langue voulue.
 * @param {object} index  rendu par chargerIndex
 * @returns {string[]} identifiants, dans l'ordre de l'index
 */
function reglesDeLaCarte(texteAnglais, index) {
  const texte = nettoyerTexte(texteAnglais);
  if (!texte.trim() || !index || !index.motifs) return [];
  const trouves = index.motifs.filter(m => m.rx.test(texte));
  /* Un libelle contenu dans un autre s'efface devant le plus long : sur « place 1
     all-purpose counter », « Counter » n'apprend rien que « All-Purpose Counter » ne
     dise deja, et deux etiquettes pour une meme notion encombrent. */
  const cles = trouves.map(m => m.cle);
  return trouves
    .filter(m => !cles.some(c => c !== m.cle && c.includes(m.cle)))
    .map(m => m.id);
}

module.exports = { chargerIndex, reglesDeLaCarte, nettoyerTexte };
