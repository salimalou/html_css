// $(function() {
//     // Effets de fondu:
//     //Disparition du titre en 400ms lors du clic sur #b1
//     $("#b1").click(function(){
//         $("#ex1 h1").fadeOut();
//     });

//     //Apparition du titre en 2 secondes lors du clic sur #b2
//     $("#b2").click(function(){
//         $("#ex1 h1").fadeIn(2000);
//     });

//     //Inversion de l'état de visibilité de h1 avec un effet de fondu
//     //Apparition du titre en 2 secondes lors du clic sur #b3
//     $("#b3").click(function(){
//         $("#ex1 h1").fadeToggle(2000);
//     });

//     //Fondu jusqu'à un certain niveau d'opacité (0.3 ici)
//     $("#b4").click(function(){
//         $("#ex1 h1").fadeTo(2000, 0.3);
//     });

//     // reset
//     $("#b5").click(function(){
//         $("#ex1 h1").removeAttr('style');
//     });

//     // Slide en jQuery
//     //Replie le titre en 400ms lors du clic sur #b1
//     $("#b6").click(function(){
//         $("#ex2 h1").slideUp();
//     });

//     //Déplie le titre en 2 secondes lors du clic sur #b2
//     $("#b7").click(function(){
//         $("#ex2 h1").slideDown(2000);
//     });

//     //Déplie le titre s'il est plié ou le plie s'il est déplié
//     $("#b8").click(function(){
//         $("#ex2 h1").slideToggle(2000);
//     });

//     // afficher/cacher - show() et hide()

//     //Dès qu'on clique sur #b1, on applique hide() au titre
//     $("#b9").click(function(){
//         $("#ex3 h1").hide();
//     });

//     //Dès qu'on clique sur #b1, on applique show() au titre
//     $("#b10").click(function(){
//         $("#ex3 h1").show();
//     });

//     // show() et hide() progressivement
//     $("#b11").click(function(){
//         $("#ex4 h1").hide(5000, "linear", function(){
//             alert("Titre bien caché");
//         });
//     });

//     $("#b12").click(function(){
//         $("#ex4 h1").show();
//     });

//     // la méthode toggle():
//     //Inverse l'état de visibilité de h1 lors d'un clic sur #b1
//     $("#b13").click(function(){
//         $("#ex5 h1").toggle();
//     });

//     //Inverse progressivement l'état de visibilité de h2 lors d'un
//     //clic sur #b2 en conservant la fonction d'accélération par défaut
//     //et alert un message à la fin
//     $("#b14").click(function(){
//         $("#ex5 h2").toggle(2000, function(){
//             alert("Etat de visibilité changé");
//         });
//     });

// });

$(function () {
  // effet fadeOut()
  $("#b1").on("click", function (e) {
    $("#ex1 h1").fadeOut();
  });

  // effet fadeIn()
  $("#b2").on("click", function (e) {
    $("#ex1 h1").fadeIn();
  });

  // effet fadeToggle()
  $("#b3").on("click", function (e) {
    $("#ex1 h1").fadeToggle();
  });

  //effet fadeTo
  $("#b4").on("click", function (e) {
    $("#ex1 h1").fadeTo(2000, 0.3);
  });

  // effet Reset
  $("#b5").on("click", function (e) {
    $("#ex1 h1").removeAttr("style");
  });

  // Slide en jQuery
  // Replie le titre en 400ms lors du clic sur #b1
  $("#b6").click(function () {
    $("#ex2 h1").slideUp();
  });

  //Déplie le titre en 2 secondes lors du clic sur #b2
  $("#b7").click(function () {
    $("#ex2 h1").slideDown(2000);
  });

  //Déplie le titre s'il est plié ou le plie s'il est déplié
  $("#b8").click(function () {
    $("#ex2 h1").slideToggle(2000);
  });

  // afficher/cacher - show() et hide()

  //Dès qu'on clique sur #b1, on applique hide() au titre
  $("#b9").click(function () {
    $("#ex3 h1").hide();
  });

  //Dès qu'on clique sur #b1, on applique show() au titre
  $("#b10").click(function () {
    $("#ex3 h1").show();
  });

  // show() et hide() progressivement
  $("#b11").click(function () {
    $("#ex4 h1").hide(5000, "linear", function () {
      alert("Titre bien caché");
    });
  });

  $("#b12").click(function () {
    $("#ex4 h1").show();
  });

  // la méthode toggle():
  //Inverse l'état de visibilité de h1 lors d'un clic sur #b1
  $("#b13").click(function () {
    $("#ex5 h1").toggle();
  });
  //Inverse progressivement l'état de visibilité de h2 lors d'un
  //clic sur #b2 en conservant la fonction d'accélération par défaut
  //et alert un message à la fin
  $("#b14").click(function () {
    $("#ex5 h2").toggle(2000, function () {
      alert("Etat de visibilité changé");
    });
  });
});
