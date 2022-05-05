// var nom;
// nom = "louisor";
// // alert(nom);
// console.log(nom);
// prompt("Question: ?", nom);

// var jour;
// jour = prompt();
// console.log(jour);
// document.write("louisor salima");

// var monExercice = "je suis entrain de faire mon exercice";
// // document.write(monExercice);
// console.log(monExercice);
// console.log(typeof monExercice);
// // alert(monExercice);
// monExercice = prompt("", "");
// document.write(monExercice);

// var monChiffre = 2022;
// document.write(typeof monChiffre);

// var monChiffreDecimal = 3.14;
// document.write(typeof monChiffreDecimal);

// var maChaineDeCaracteres = "57.12";
// console.log(maChaineDeCaracteres);
// document.write(maChaineDeCaracteres + "&nbsp");

// maChaineDeCaracteres = parseFloat(maChaineDeCaracteres);
// document.write(maChaineDeCaracteres + "&nbsp");
// console.log(maChaineDeCaracteres);

// maChaineDeCaracteres = parseInt(maChaineDeCaracteres);
// document.write(maChaineDeCaracteres + "&nbsp");
// console.log(maChaineDeCaracteres);

// maChaineDeCaracteres = maChaineDeCaracteres.toString();
// document.write(maChaineDeCaracteres + "&nbsp");
// console.log(maChaineDeCaracteres);

// var annee = 2017;
// future = 3;
// calcule = annee + future;
// console.log(calcule);

// document.write(calcule + "&nbsp,&nbsp" + calcule + "</br>");
// document.write(calcule + "<br>");

// var nb1 = 10;
// var nb2 = 5;
// var resultat = nb1 + nb2;
// document.write(resultat + "<br>");
// console.log(resultat);

// var resultatSoustraction = nb1 - nb2;
// document.write(resultatSoustraction + "<br>");
// console.log(resultatSoustraction);

// var resultatMultiplication = nb1 * nb2;
// document.write(resultatMultiplication + "<br>");
// console.log(resultatMultiplication);

// var resultatDivison = nb1 / nb2;
// document.write(resultatDivison + "<br>");
// console.log(resultatDivison);

// var resultatModulo = nb1 % nb2;
// document.write(resultatModulo + "<br>");
// console.log(resultatModulo);

// var teste ;

// var teste2 ="bonjour";
// console.log(typeof teste2);

// var chiffre = 10;
// var nombre=  5;
// var resultat = chiffre + nombre;

// var salima = prompt(louisor);
// if (salima == 10) {
//   document.write(salima);
// }

// var numero1 = 10;
// var resultat = numero1 + numero1;
// console.log(resultat);

// var string = "saisUnePhrases";
// var chiffre = 100;
// var resultat = string + chiffre;
// console.log(resultat);

// var nombre;
// nombre = prompt("Entrez un nombre entiers");
// // document.write(nombre);

// if (nombre > 10) {
//   document.write("salima");
// }

// var monPrenom = "salima";
// monPrenom = prompt("entrez une chaine de caractere");
// if (monPrenom == "salima") {
//   document.write(monPrenom);
// } else {
//   document.write("cette valeur n'est pas mon prénom");
// }

// var unChiffre = prompt("entrez un chiffre");
// var result = unChiffre % 5;
// if (result == 0) {
//   document.write();
// } else {
//   document.write("cette valeur");
// }

// var nombre = ;
// Number(prompt("entrez nb1:"));
// document.write();

// var prenom = prompt("entrez votre prénom :");
// alert("bonjour," + prenom);

// var nombre = prompt("entrez votre valeur :");
// nombre = parseInt(nombre);
// if (nombre === 5) {
//   document.write(nombre);
// }

// var nombre = prompt(":");
// var nombreFloat = parseFloat(nombre);
// var result = nombreFloat % 13;
// if (result == 0) {
//   document.write(nombre + "est un multiple de 13");
// } else {
//   document.write(
//     nombre +
//       "n'est pas un multiple de 13 et le résultat du modulo est : " +
//       result
//   );
// }

// var nombre = prompt("");
// var annalyseResultat = parseInt(nombre);
// document.write(annalyseResultat);
// if (typeof annalyseResultat === "number") {
//   document.write("la valeur est un nombre");
// } else {
//   document.write("la valeur n'est pas un nombre");
// }

// var saisie = prompt("Entrez votre saisie: ");
// var resultat = parseFloat(saisie);
// if (isNaN(resultat)) {
//   document.write(
//     saisie + "est une chaine de caractère peut-etre composée de chiffres"
//   );
// } else {
//   var finalResalt = resultat % 7;
//   if (finalResalt == 0) {
//     document.write(saisie + "est un multiple de 7");
//   } else {
//     document.write(
//       saisie +
//         "n'est pas un multiple de 7 et le résultat du modulo est : " +
//         finalResalt
//     );
//   }
// }

// var saisie = prompt(saisie * 5);
// resultat = saisie * 5;
// document.write(resultat + "<br>");
// var module = resultat % 3;
// document.write(module);

// var c = prompt(c * 1.8 + 32);
// var f = c * 1.8 + 32;
// document.write(f);

// var nb1 = 25;
// var nb2 = "arbre";
// var nb3;

// var nb3 = nb1;
// var nb1 = nb2;
// var nb2 = nb3;

// // nb3 25
// // nb1 "arbre"
// // nb2 25

// document.write(nb1 + "<br>" + nb2);

// PERMUTATION

// var nombre1 = example;
// var nombre2 = "example";

// var nombre3;

// nombre3 = nombre1;
// nombre1 = nombre2;
// nombre2 = nombre3;

// document.write(nombre1 + "<br>" + nombre2);
// var tva = example;
// var prixHT = prompt ("Question: prix HT");
// var prixTTC = prixHT * tva;
// document.write(prixTTC);

// for (var i = 3; i <= 15; i += 2) {
//   document.write("<p>Instruction exécutée :" + i + "</p>");
// }

var numerique = prompt();
var int_var = parseInt(numerique);

for (var i = 1; i <= int_var + 10; i += 2) {
  document.write("La valeur de i est " + i + "<br>");
}
