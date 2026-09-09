/**
 * Verification de l'index des regles associees aux cartes.
 *
 *   node rules_card_terms.verif.cjs
 *
 * Deux niveaux : le contrat (chaque forme de recherche fait ce qu'elle promet, les faux
 * positifs mesures restent ecartes) et le corpus (le volume d'etiquettes reste tenable
 * sur les 7 855 cartes a texte). Le second attrape la regression qui compte : un terme
 * ajoute sans forme, qui ferait remonter la mediane et noierait la page carte.
 */

const fs = require('fs');
const path = require('path');
const { chargerIndex, reglesDeLaCarte } = require('./rules_card_terms.cjs');

let ok = 0, ko = 0;
function eq(nom, obtenu, attendu) {
  const m = JSON.stringify(obtenu) === JSON.stringify(attendu);
  if (m) { ok++; console.log('  ok   ' + nom); }
  else { ko++; console.log('  KO   ' + nom + '\n       attendu ' + JSON.stringify(attendu) + '\n       obtenu  ' + JSON.stringify(obtenu)); }
}
function contient(nom, liste, id) { eq(nom, liste.includes(id), true); }
function exclut(nom, liste, id) { eq(nom, liste.includes(id), false); }

const idx = chargerIndex(__dirname);
const r = t => reglesDeLaCarte(t, idx);

console.log('Contrat');
eq("l'index est charge", idx.termes.length > 100, true);
eq('tout terme a un id et un libelle', idx.termes.every(t => t.id && t.match), true);
eq('les formes connues sont les seules employees',
   [...new Set(idx.termes.map(t => t.forme).filter(Boolean))].sort(),
   ['colon', 'dot', 'paren', 'value']);

// Le cas qui a motive tout l'index : deux etiquettes, pas sept.
eq('Nick Fury',
   r('[star] <b>Response</b>: After Nick Fury uses a basic power, place 1 all-purpose counter on a [[S.H.I.E.L.D.]] support.'),
   ['all_purpose_counter', 'basic_power']);

console.log('\nFormes de recherche');
contient('value : « Hinder 2 » est reconnu', r('Hinder 2.'), 'hinder_x');
exclut('value : « Hinder » seul ne l est pas', r('This card hinders your progress.'), 'hinder_x');
contient('paren : « Uses (3 charges) »', r('Uses (3 teleport counters).'), 'uses_x_type');
exclut('paren : « uses a basic power » n est pas le mot-cle', r('After Nick Fury uses a basic power.'), 'uses_x_type');
contient('colon : « Setup : » est la capacite declenchee', r('Setup: Search your deck.'), 'setup_triggered_ability');
exclut('colon : « Setup : » n est pas le mot-cle', r('Setup: Search your deck.'), 'setup_keyword');
contient('dot : « Setup. » est le mot-cle', r('Setup. Permanent.'), 'setup_keyword');
exclut('dot : « the Hunter s attacks » est un nom de carte', r("Bushmaster the Hunter's attacks gain overkill."), 'hunter');
contient('dot : « Hunter. » est le mot-cle', r('Hunter. Villainous.'), 'hunter');

console.log('\nRecouvrement');
const nf = r('place 1 all-purpose counter on a support.');
contient('le libelle long est retenu', nf, 'all_purpose_counter');
exclut('le libelle court qu il contient est efface', nf, 'counter');

console.log('\nRobustesse');
eq('texte vide', r(''), []);
eq('texte absent', r(null), []);
eq('traits et icones seuls', r('[[S.H.I.E.L.D.]] [star] [energy]'), []);

console.log('\nCorpus');
const cartes = [];
for (const f of fs.readdirSync(path.join(__dirname, 'pack')).filter(f => f.endsWith('.json'))) {
  let d; try { d = JSON.parse(fs.readFileSync(path.join(__dirname, 'pack', f), 'utf8')); } catch (e) { continue; }
  if (Array.isArray(d)) for (const c of d) if (c && c.text) cartes.push(c);
}
const n = cartes.map(c => reglesDeLaCarte(c.text + ' ' + (c.keywords || ''), idx).length).sort((a, b) => a - b);
const mediane = n[Math.floor(n.length / 2)];
const moyenne = n.reduce((a, b) => a + b, 0) / n.length;
console.log(`  ${cartes.length} cartes a texte | moyenne ${moyenne.toFixed(1)} | mediane ${mediane} | max ${n[n.length - 1]}`);
eq('la mediane reste a 1 etiquette', mediane, 1);
eq('la moyenne reste sous 2', moyenne < 2, true);
eq('aucune carte ne depasse 10 etiquettes', n[n.length - 1] <= 10, true);

console.log('\n' + ok + ' ok, ' + ko + ' KO');
process.exit(ko ? 1 : 0);
