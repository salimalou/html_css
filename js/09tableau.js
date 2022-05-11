// Les tableaux en javascript

var tableauFruits = ["apple", "banana"];
var tableauPays = ["France", "Maorc", "Martinique"];
var tableauChiffres = [1, 5, 3];
console.log("tableauFruits :", tableauFruits);
console.log("Nombres des items atableuFruits :", tableauFruits.length);
console.log(tableauPays);
console.log(tableauPays.length);
console.log(tableauChiffres);
console.log(tableauChiffres.length);

var first = tableauFruits[0];
console.log(" contenu du premier élément du tableauFruits :", first);

// var last = tableauFruits[tableauFruits.length - 1];
// console.log("contenu du dernier élément du tableauFruits : ", last);
// // tableauFruits.push("Abricot");
// console.log(tableauFruits);

var first = tableauPays[0];
console.log(" contenu du premier élément du tableauPays :", first);

var last = tableauPays[tableauPays.length - 1];
console.log("contenu du dernier élément du tableauPays : ", last);
tableauPays.push("espagne");
console.log(tableauPays);

var first = tableauChiffres[0];
console.log(" contenu du premier élément du tableauChiffres :", first);
tableauChiffres.push("2003");
console.log(tableauChiffres);
var last = tableauChiffres[tableauChiffres.length - 1];
console.log("contenu du dernier élément du tableauChiffres : ", last);

// ajouter un ou plusieurs éléments à mon tableu :

// tableauFruits.pop();
// console.log(tableauFruits);

// // afiiche c qu'ont a supprimé

// var resultatDeLaFonctionpop = tableauFruits.pop();
// console.log(resultatDeLaFonctionpop);

// tableauPays.pop();
// console.log(tableauPays);

// tableauChiffres.pop();
// console.log(tableauChiffres);

// enlever le debut
var resultatDeLaFonctionShift = tableauFruits.shift();
console.log(tableauFruits);
console.log(resultatDeLaFonctionShift);

// ajoute au debut
var resultatDeLaFonctionUnShift = tableauFruits.unshift("strawberry", "mango");
console.log(tableauFruits);
// console.log(resultatDeLaFonctionUnShift);

// afficher la position
var position = tableauFruits.indexOf("mango");
console.log(position);

// enlever au milieu
var resultatDeLaFonctionSplice = tableauFruits.splice(position, 2);
console.log(resultatDeLaFonctionSplice);

var resultatSplice = tableauPays.splice(2, 3);
console.log(resultatSplice);

// copier un tableau
var shallowCopy = tableauFruits.slice();
//  ccrée un nouveau tableau qui contient les élements de fruits du tableau : tableauFruits
