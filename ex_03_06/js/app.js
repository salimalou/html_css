function ready(callback) {
  // in case the document is already rendered
  //   callback = parametre
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

ready(function () {
  // function maFonctionAvecParamettresSansValeurRetour(argent, voiture) {
  //     console.log("valeur d'argent : ", argent);
  //     console.log("nom de voiture : ", voiture);
  //     if (argent > 50) {
  //         console.log("Il est allé au cinéma");
  //     } else if (voiture) {
  //         console.log("Il fait le plein");
  //     }

  // }

  //maFonctionAvecParamettresSansValeurRetour(70, "AMG");

  // function maFonctionAvecParamettresEtValeurRetour(argent) {
  //     console.log("valeur de l'argent : ", argent);
  //     if (argent > 50) {
  //         console.log("Il est allé au cinéma");
  //     }
  //     let reste = argent - 10;
  //     return reste;
  // }

  // let retourDeLargent = maFonctionAvecParamettresEtValeurRetour(80);
  // console.log(retourDeLargent);

  //   function maFonctionSansParamettrsEtAvecValeurRetour() {
  //     let pret = "c'est bon";
  //     return pret;
  //   }
  //   let retourDeMaFunction = maFonctionSansParamettrsEtValeurRetour();
  //   console.log(maFonctionSansParamettrsEtAvecValeurRetour);

  function maFonctionSansParamettrsEtSansValeurRetour() {
    console.log("je suis habillé et je vais à l'école");
  }
  maFonctionSansParamettrsEtSansValeurRetour();
});
