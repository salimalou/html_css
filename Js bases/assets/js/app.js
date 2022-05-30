// ceci est un commentaire sur une seule ligne

/*
ceci est un commentaire multi lignes
*/

// AFFICHAGE
// on peut afficher les résultats de nos programmes via la console.
console.log("Hello word!");

//LES VARIABLES
// Une variable est une entité informartique qui sert de conteneur à une donnée.
// Toute donnée fournie à une ordinateur est stockée dans une zone mémoire repérable

// par la machine grace à une adresse mémoire. Une variable est crée pour contenir cette adresse

// mémoire.

//la valeur est donc stockée quelque part dans la RAM. la variable contient l'adresse à laquelle

//la machine peut aller récupérer cette valeur

// DECLARATION DE VARIABLE
// -let
// -var
// -const

// const permet de déclarer une constante nommée.
// Elle doit etre initialisée dès sa déclaration et ne peut plus changer de valeur
// dans la suite du script.
const maConstante = "ma constante";
console.log(maConstante);

//tentative de reaffectation d'une valeur à une constante:
// maConstante = "Bonjour mond"; // renvoie une erreur

// var permet de déclarer une variable globale. Elle apartient d'office à lespace globale
// meme si elle est déclarée à l'intérieur d'un bloc.

if (true) {
  var varGlobale = 5;
}

console.log("varGlobale = ", varGlobale);

// let permet de déclarer une variable de bloc. Elle n'est accesible que dans le bloc auquel elle appartient.
if (true) {
  let varLocale = 5;
  console.log("varLocale depuis lespace global = ", varLocale);
}

// console.log("varLocale depuis lespace global = ", varLocale); // gènére une erreur

var animal = "Chien";
console.log("animal:", animal);
console.log("Chien");
// On ne peut pas appeler une variable par sa valeur
// console.log(Chien); // genère une erreur

var volaille = "poulet";
var Volaille = "canard";

console.log("vollaile : ", volaille);
console.log("vollaile : ", Volaille);

// une variable doit etre déclaré avant d'etre utilisée.
// le code suivant gènére une erreur:
console.log(typeof bonjour);
var bonjour = "bonjour";

// mais celui ci n'en génnère pas:
// console.log (bonjour);
// var bonjour = "bonjour";

console.log(num);
num = 6;
num += 5;
var num;
// Une variable possède:
// -Un NOM
// doit comencer par une lettre, un tiret bas (_) ou un symbol  $
// les caractères qui suivent peuvent etre des chiffres et ou des lettres
// la convention camelCase s'applique pour les variables et les fonctions.

// - Un TYPE DE DONNEE
// 6 types primitifs de données:

// 1. null
var maVariableNulle = null;

// 2. undefined
var maVariableUndefined = undefined;

// ces deux types permettent de vider une variables, mais ne sont pas identiques:
console.log("maVariableNulle:", maVariableNulle);
console.log("maVariableUndefined :", maVariableUndefined);

console.log("typeof maVariableNulle:", typeof maVariableNulle);
console.log("typeof maVariableUndefined :", typeof maVariableUndefined);

console.log("null === undefined", null === undefined);

console.log("null == undefined", null == undefined);

// 3. Chaîne de caractères: string
let string = "ma chaine de caractères";
console.log("string = ", string);
console.log("typeof string :", typeof string);

// 4.type number
// entiers, decimaux, Infinity, -Infinity,
console.log("typeof Infiity:", Infinity);

// 5. BigInt
var grosEntier = 5875468545875856589456n; //BigInt

// Boolean
var iteraateur = 0;
iteraateur++;

console.log("iteraateur:", iteraateur);

// concatenatio moderne
// let phrase4 = `la ${poisson} de ${age} ans nage dans un ${lieu}`;
// console.log("phrase4:", phrase4);

// Les ternaires
let salutation = "Bonjour";

salutation === "Bonjour" ? console.log("bonjour") : console.lo("Bonsoir");

var soleil = true;
var piscine;

soleil ? (piscine = true) : (piscine = false);
console.log("piscine:", piscine);
