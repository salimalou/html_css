// ceci est un commentaire sur une seule ligne

/*
ceci est un commentaire multi lignes
// */

// // AFFICHAGE
// // on peut afficher les résultats de nos programmes via la console.
// console.log("Hello word!");

// //LES VARIABLES
// // Une variable est une entité informartique qui sert de conteneur à une donnée.
// // Toute donnée fournie à une ordinateur est stockée dans une zone mémoire repérable

// // par la machine grace à une adresse mémoire. Une variable est crée pour contenir cette adresse

// // mémoire.

// //la valeur est donc stockée quelque part dans la RAM. la variable contient l'adresse à laquelle

// //la machine peut aller récupérer cette valeur

// // DECLARATION DE VARIABLE
// // -let
// // -var
// // -const

// // const permet de déclarer une constante nommée.
// // Elle doit etre initialisée dès sa déclaration et ne peut plus changer de valeur
// // dans la suite du script.
// const maConstante = "ma constante";
// console.log(maConstante);

// //tentative de reaffectation d'une valeur à une constante:
// // maConstante = "Bonjour mond"; // renvoie une erreur

// // var permet de déclarer une variable globale. Elle apartient d'office à lespace globale
// // meme si elle est déclarée à l'intérieur d'un bloc.

// if (true) {
//   var varGlobale = 5;
// }

// console.log("varGlobale = ", varGlobale);

// // let permet de déclarer une variable de bloc. Elle n'est accesible que dans le bloc auquel elle appartient.
// if (true) {
//   let varLocale = 5;
//   console.log("varLocale depuis lespace global = ", varLocale);
// }

// // console.log("varLocale depuis lespace global = ", varLocale); // gènére une erreur

// var animal = "Chien";
// console.log("animal:", animal);
// console.log("Chien");
// // On ne peut pas appeler une variable par sa valeur
// // console.log(Chien); // genère une erreur

// var volaille = "poulet";
// var Volaille = "canard";

// console.log("vollaile : ", volaille);
// console.log("vollaile : ", Volaille);

// // une variable doit etre déclaré avant d'etre utilisée.
// // le code suivant gènére une erreur:
// console.log(typeof bonjour);
// var bonjour = "bonjour";

// // mais celui ci n'en génnère pas:
// // console.log (bonjour);
// // var bonjour = "bonjour";

// console.log(num);
// num = 6;
// num += 5;
// var num;
// // Une variable possède:
// // -Un NOM
// // doit comencer par une lettre, un tiret bas (_) ou un symbol  $
// // les caractères qui suivent peuvent etre des chiffres et ou des lettres
// // la convention camelCase s'applique pour les variables et les fonctions.

// // - Un TYPE DE DONNEE
// // 6 types primitifs de données:

// // 1. null
// var maVariableNulle = null;

// // 2. undefined
// var maVariableUndefined = undefined;

// // ces deux types permettent de vider une variables, mais ne sont pas identiques:
// console.log("maVariableNulle:", maVariableNulle);
// console.log("maVariableUndefined :", maVariableUndefined);

// console.log("typeof maVariableNulle:", typeof maVariableNulle);
// console.log("typeof maVariableUndefined :", typeof maVariableUndefined);

// console.log("null === undefined", null === undefined);

// console.log("null == undefined", null == undefined);

// // 3. Chaîne de caractères: string
// let string = "ma chaine de caractères";
// console.log("string = ", string);
// console.log("typeof string :", typeof string);

// // 4.type number
// // entiers, decimaux, Infinity, -Infinity,
// console.log("typeof Infiity:", Infinity);

// // 5. BigInt
// var grosEntier = 5875468545875856589456n; //BigInt

// // Boolean
// var iteraateur = 0;
// iteraateur++;

// console.log("iteraateur:", iteraateur);

// // concatenatio moderne
// // let phrase4 = `la ${poisson} de ${age} ans nage dans un ${lieu}`;
// // console.log("phrase4:", phrase4);

// // Les ternaires
// let salutation = "Bonjour";

// salutation === "Bonjour" ? console.log("bonjour") : console.lo("Bonsoir");

// var soleil = true;
// var piscine;

// soleil ? (piscine = true) : (piscine = false);
// console.log("piscine:", piscine);

let oiseau = {
  espece: "pie",
  age: "3mois",
  habitat: "ville",
};

for (spec in oiseau) {
  console.log(spec);
  console.log(oiseau[spec]);
}

var peintures = new Array("La Joconde", "L'homme au gant", "le pandémonius");

document.write("<h2> listes de peintures </h2>");
document.write("<ul> ");
for (let peiture of peintures) {
  document.write("<li>" + peiture + "</li>");
}
document.write("</ul>");

// L'INSTRUCTION BREAK
// let indexPeinture = null;
// let peintureRecherchee = "l'homme au gant";

// for (let i = 0; i < peintures.length; i++) {
//   if (peintures[i] === peintureRecherchee) {
//     indexPeinture = i;

//     break;
//   }
// }

// if (indexPeinture) {
//   document.write(
//     'la peinture nommée "' +
//       peintureRecherchee +
//       '" est en position n° ' +
//       (indexPeinture + 1) +
//       " dans le tableau."
//   );
// } else {
//   document.write(
//     "La peinture recherche n'existe pas dans la liste de peintures"
//   );

// L'INSTRUCTION CONTINUE
let i = 0;

let num = 0;

while (i < 5) {
  console.log(
    "tour de boucle n° " + (i + 1) + " => i = " + i + ", num = " + num
  );

  i++;

  if (i === 3) {
    continue;
  }

  num += i;
}

let t = ["element1", "element2", "element3"];
document.write(t);

let tableauFruit = ["appel", "banana"];

let tableauLegumes = ["citrouille", "courgette"];

console.log(tableauFruit);
console.log(tableauLegumes);

tableauFruit.forEach(function (element, index, array) {
  console.log(index, element);
});

// LES FONCTIONS
const article = document.querySelector("article");
console.log("article", article);

article.innerHTML = "<h2>Les Fonctions </h2>";

function maFonction(parametre1, parametre2, parametre3) {
  console.log("execution du code interne de maFonction()......");
  console.log("parametre1:", parametre1);
  console.log("parametre2:", parametre2);
  console.log("parametre3:", parametre3);

  article.innerHTML += "<p><ul>";
  article.innerHTML += "<li>" + parametre1 + "</li>";
  article.innerHTML += "<li>" + parametre2 + "</li>";
  article.innerHTML += "<li>" + parametre3 + "</li>";
}

// pour declancher l'execution de maFonction() il faut l'appeler
maFonction("chien", true, 153);

const carre = (nombre) => {
  console.log(nombre);
  article.innerHTML += `<p>${nombre * nombre}</p>`;
};
carre(9);

var animal = "orang-outang";
const maFonction2 = function () {
  let animal = "pingouin";
  let autreAnimal = "escargot";
  console.log(animal);
  return autreAnimal;
};

let resultatMaFoction2 = maFonction2();
console.log(animal);
console.log(resultatMaFoction2);

function ecrire(texte) {
  article.innerHTML += `<p><i>${texte}</i></p>`;
  console.log(this);
  return texte.length;
}

// let tailleTexte = ecrire("Bonsoir !! Passez une super soirée !!");
// ecrire2("le texte fait" + tailleTexte + "caractères...jfindpfiiiiiiiujnfisucn");

function ecrire2(texte) {
  if (texte.length <= 50) {
    let taille = ecrire(texte);
    return taille;
  } else {
    article.innerHTML += `<p><i>Texte trop long (max 50 caracteres) !</i></p>`;
    return 0;
  }
}

var tailleChaine = ecrire2("Hello, je fait moins de 50!!");
console.log("tailleChaine:", tailleChaine);

// Les fonctions automatiques sont executées dès qu'elle sont lues par l'interpreteur.

(function autoFonction(e) {
  console.log("autoFonction en cours : " + e);
})("parametres de autoFonction");

((e) => {
  console.log("parametre de fonction AUTO et FLECHEE:", e);
})("parametre");

// Fonction de rappel: Les callBacks

function salutation(name) {
  if (name) {
    alert("Bonjour  " + name);
  }
}
// function executeTache1(){
// window.setTimeout(() =>{
//   console.log('fin de tache 1')
// }, 4000);
// }
processUserInput(salutation);
function processUserInput(callBacks) {
  let nom = prompt("fonction processUserInput: Entrez votre nom.");
  typeof callBacks === "function" && callBacks(nom);
}

// Très souvent les callback seront définies directement dans l'appel de la fonction
// englobante:

processUserInput((name) => {
  if (name) {
    alert("salut à toi " + name + "!");
  }
});

// Les paramètres de la callback sont définis dans la fonction englobante
// et passée à la callback

function processUserInput2(callback) {
  let name = prompt("Fonction processUserInput2() : Entrez votre nom.");
  let index = 5;
  typeof callback === "function" && callback(name, index);
}

processUserInput2((n, i) => {
  console.log(n);
  console.log(i);
  if (n) {
    alert("salut" + n) + "lindex fourni est" + i;
  }
});

var docChildren = document.children;
console.log(docChildren);

var docNodes = document.childNodes;
console.log(docNodes);
