var nom = [];

for (var i = 0; i < 5; i++) {
  nom[i] = prompt("nom");
  document.write("les prenoms sont:" + nom[i] + "<br>");
}

nom.sort();
for (var i = 0; i < nom.length; i++) {
  document.write("les prenoms sont:" + nom[i] + "<br>");
}
