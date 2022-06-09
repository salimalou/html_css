$(function() {
    // Inserer du contenu DANS un élément html:

    // La methode prepend():
    $(".conteneur").prepend("<p>Paragraphe ajouté avec prepend()</p>");
    // equivalent à:
    // $("<p>Paragraphe ajouté avec prepend()</p>").prependTo(".conteneur");

    // La methode append():
    $(".conteneur").append("<ul><li>Element n°1</li><li>Element n°2</li></ul>");
    // equivalent à:
    // $("<ul><li>Element n°1</li><li>Element n°2</li></ul>").appendTo(".conteneur");


    // Ajouter du contenu AVANT ou APRES un élément html:

    // La méthode before():
    $("#p1").before("<p>Paragraphe ajouté avec before()</p>");
    // equivalent à:
    // $("<p>Paragraphe ajouté avec before()</p>").insertBefore('#p1');

    // la méthode after():
    $("#p1").after("<span>Span ajouté avec after().</span>");
    // equivalent à:
    // $("<span>Span ajouté avec after().</span>").insertAfter('#p1');



    // Ajouter du contenu autour d'un élément html:

    // La methode wrapAll():
    $("p").wrapAll("<section></section>");

    // La methode wrap():
    $("p").wrap("<div></div>");

    // La methode wrapInner():
    $("p").wrapInner("<span></span>");


    // déplacement de contenu dans le DOM:
    $("body").prepend($("#p3"));

});