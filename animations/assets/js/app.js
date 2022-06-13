$(function () {
  // booleen permettant de definir la direction
  // de l'animation pour width:
  var big = true;
  // booleen permettant de definir la direction
  // de l'animation pour font-size:
  var bigFont = true;

  //Diminue la largeur de h1 de 20% sur 1 seocnde
  $("#b1").click(function () {
    if (big) {
      $("#ex1 h1").animate({ width: "-=20%" }, 1000);
      big = false;
    } else {
      $("#ex1 h1").animate({ width: "+=20%" }, 1000);
      big = true;
    }
  });

  //Fait passer la hauteur à 0 si elle n'est pas à 0 ou la rétablit
  $("#b2").click(function () {
    $("#ex1 h1").animate({ height: "toggle" });
  });

  //Passe la taille de police à 20px sur 2 secondes
  $("#b3").click(function () {
    if (bigFont) {
      $("#ex1 h1").animate({ fontSize: "20px" }, 2000);
      bigFont = false;
    } else {
      $("#ex1 h1").animate({ fontSize: "30px" }, 2000);
      bigFont = true;
    }
  });

  // Animations combinées
  //Anime plusieurs propriétés en même temps
  // on passe à la méthode animate un objet et une durée en argument.
  var big2 = true;
  $("#b4").click(function () {
    if (big2) {
      $("#ex2 h1").animate(
        {
          width: "-=20%",
          height: "toggle",
          fontSize: "20px",
        },
        1000
      );
      big2 = false;
    } else {
      $("#ex2 h1").animate(
        {
          width: "+=20%",
          height: "toggle",
          fontSize: "30px",
        },
        1000
      );
      big2 = true;
    }
  });

  // Animations successives automatiques
  var big3 = true;
  $("#b5").click(function () {
    //On chaine les méthodes; les animations se font dans l'ordre d'écriture
    if (big3) {
      $("#ex3 h1")
        .animate({ width: "-=20%" }, 1000)
        .animate({ fontSize: "20px" }, 2000)
        .fadeTo(2000, 0.5);
      big3 = false;
    } else {
      $("#ex3 h1")
        .fadeTo(2000, 1)
        .animate({ fontSize: "30px" }, 2000)
        .animate({ width: "+=20%" }, 1000);
      big3 = true;
    }
  });

  // Suppression de la file d'attente dans des animations successives
  var big4 = true;
  $("#b6").click(function () {
    if (big4) {
      $("#ex4 h1")
        .animate({ width: "-=20%" }, 1000)
        //Cette animation se lance immédiatement
        .animate({ fontSize: "20px" }, { queue: false, duration: 2000 })
        .fadeTo(2000, 0.5);
      big4 = false;
    } else {
      $("#ex4 h1")
        .animate({ width: "+=20%" }, 1000)
        //Cette animation se lance immédiatement
        .animate({ fontSize: "30px" }, { queue: false, duration: 2000 })
        .fadeTo(2000, 1);
      big4 = true;
    }
  });

  // La file d'attente
  $("#b7").click(function () {
    enAttente();
    $("#ex5 h1")
      .animate({ width: "-=20%" }, 5000)
      .animate({ fontSize: "20px" }, 2000)
      .fadeTo(2000, 0.5);
  });

  function enAttente() {
    //Récupère les infos liées à la file d'attente
    let queue = $("#ex5 h1").queue("fx");
    //Affiche la taille de la file d'attente
    $("#p1 span").text(queue.length);
    //Actualise (quasiment) en direct cette taille
    setTimeout(enAttente, 10);
  }

  // interferer avec la file d'attente dequeue(), clearqueue()
  $("#b8").click(function () {
    $(".carre")
      .animate({ left: "+=200px" }, 1000)
      .animate({ top: "+=50px" }, 400)
      .queue(function () {
        $(this).toggleClass("bleu orange").dequeue();
      })
      .animate({ left: "-=200px" }, 1000)
      .animate({ top: "-=50px" }, 400);
  });

  // Suppripmer la file d'attente clearQueue()
  $("#b9").click(function () {
    $(".carre2")
      .animate({ left: "+=200px" }, 1000)
      .animate({ top: "+=50px" }, 400)
      .queue(function () {
        $(this).toggleClass("bleu orange").dequeue();
      })
      .animate({ left: "-=200px" }, 1000)
      .animate({ top: "-=50px" }, 400);
  });
  $("#b10").click(function () {
    $(".carre2").clearQueue();
  });

  // Stopper une animation stop() et finish()
  $("#b11").click(function () {
    $(".carre3")
      .animate({ left: "+=200px" }, 1000)
      .animate({ top: "+=50px" }, 400)
      .queue(function () {
        $(this).toggleClass("bleu orange").dequeue();
      })
      .animate({ left: "-=200px" }, 1000)
      .animate({ top: "-=50px" }, 400);
  });
  $("#b12").click(function () {
    $(".carre3").stop(true);
  });

  // finish()
  $("#b13").click(function () {
    $(".carre4")
      .animate({ left: "+=200px" }, 1000)
      .animate({ top: "+=50px" }, 400)
      .queue(function () {
        $(this).toggleClass("bleu orange").dequeue();
      })
      .animate({ left: "-=200px" }, 1000)
      .animate({ top: "-=50px" }, 400);
  });
  $("#b14").click(function () {
    $(".carre4").stop(true);
  });

  // Ajouter un delay à l'exécution - delay()
  $("#b15").click(function () {
    $(".carre5")
      .animate({ left: "+=200px" }, 1000)
      .delay(1000)
      .animate({ top: "+=50px" }, 400)
      .delay(1000)
      .animate({ left: "-=200px" }, 1000)
      .delay(1000)
      .animate({ top: "-=50px" }, 400);
  });
});

$(function () {
  var big = true;

  $("#b1").on("click", function (e) {
    if (big) {
      $("#ex1 h1").animate({ width: "-=20%" }, 1000);
      big = false;
    } else {
      $("#ex1 h1").animate({ width: "+=20%" }, 1000);
      big = true;
    }
  });
});
