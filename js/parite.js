var resultat = Number(prompt("choisisez un nombre !"));

for (var i = resultat; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + "est pair");
  } else if (i % 2 === 1) {
    console.log(i + "est impair");
  }
}

// while (i <= 10) {
//   if (resultat % 2 === 0) {
//     console.log(resultat + "est pair");
//     i += 2;
//   } else console.log(resultat + "est impair");
// }
