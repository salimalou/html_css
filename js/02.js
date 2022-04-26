//alert("Hi");

/*---------
LA CONCATENATION
---------*/
var annee = 2017; // à quoi sert une var, différents types de var
var futur = 3;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul + "<br>");// -> 2020 avec saut de ligne

var mois = "7";
var calcul2 = annee + mois;
console.log(calcul2); // -> 20207<br>  parce que pas de calcul avec des strings
document.write(calcul2 + "<br>");

var DebutPhrase = "Aujourd'hui ";
var NbStagiaires = 12;
var SuitePhrase = " stagiaires";
var FinPhrase = "sont présents."; // pas d'espace exprès

// -- Nous souhaitons afficher la phrase en un seul morceau avec la concaténation => à vos claviers !
document.write(DebutPhrase + NbStagiaires + SuitePhrase + " " + FinPhrase);
// le " " est utile quand on a des données récupérées directement de l'utilisateur