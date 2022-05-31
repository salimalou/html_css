/*Stars*/
//Niv 1
afficheStars("&Star;");

//Niv 2
afficheStars("&star;");
/*Count*/
afficheCount("Affichage Compteur");

/*Compte à rebours*/
//On démarre depuis 9
afficheCount("<hr>");
afficheCount("Affichage Compte à rebours");

/*Pyramide*/
affichePyra("Affichage Pyramide");
affichePyra("<hr>");
/*Pyramide Inversée*/
affichePyra("Affichage Pyramide Inversée");

/*Grille => Boucle imbriquée mise en forme par les spans en colonne et les divs en ligne*/
for (let i = 0; i < 10; i++) {
  document.write("<div>");
  for (let j = 1; j <= 10; j++) {
    document.write('<span class="bordered">' + (i * 10 + j) + "</span>");
  }
  document.write("</div>");
}
