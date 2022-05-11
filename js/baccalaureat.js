var nb1 = parseFloat(prompt("Entrez votre moyen"));

if (nb1 < 10) {
  document.write("Vous etre recalé :(");
} else if (nb1 >= 10 && nb1 < 12) {
  document.write("Vous etre reçu");
} else {
  document.write("Recu avec mention");
}
