// premier type de fonctons: elle prend pas de parametre et elle na pas de valeur de retour
function salima1() {
  console.log("salima");
}

salima1();

// deuxieme type de fonctions : elle prend des parametre et elle na pas de valeur de retour
function salima2(para1, para2) {
  let resultat = para1 * para2;
  console.log(resultat);
}
salima2(5, 10);

salima2(3, 7);

// troiseme type de fonctions: elle prend des parametre et elle a une valeur de retour
function salima3(para1, para2, para3) {
  let resultat3 = para1 + para2 + para3;
  return resultat3;
}

// salima3("nom", "prenom", "mail");
var fonctions3 = salima3("nom", "prenom", "mail");
console.log(fonctions3);

salima3(1, 2, 3);
console.log(salima3(1, 2, 3));

// 4eme type de fonctions :
function salima4() {
  return "teste";
}

var resultat4 = salima4();
console.log(resultat4);

(function () {
  console.log("Mitra");
})();
console.log();
