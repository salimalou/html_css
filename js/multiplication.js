// var nb1 = Number(prompt("Saisisez un nombre"));

// for (i = 1; i <= 10; i++) {
//   document.write(nb1 + " x " + i + " = " + nb1 * i + "<br>");
// }
// var nb1 = Number(prompt("Saisisez un nombre entre 2 et 9"));
// while (nb1 < 2 || nb1 > 9) {
//   alert("Insérez un chiffre entre 2 et 9");
//   var nb1 = Number(prompt("SAISISEZ UN NOMBRE ENTRE 2 ET 9 !!"));
// }
// for (i = 1; i <= 10; i++) {
//   document.write(nb1 + " x " + i + " = " + nb1 * i + "<br>");
// }

var nb1 = Number(prompt("Saisisez un nombre entre 2 et 9"));
while (nb1 > 1 || nb1 < 10) {
  if (nb1 >= 2 && choix <= 9) {
    for (var i = 1; i <= 10; i++) {
      var res = nb1 * 1;
      document.write(nb1 + " x " + i + " = " + res + "<br>");
    }
    break;
  } else {
    var nb1 = Number(prompt("Saisisez un nombre entre 2 et 9"));
  }
}
