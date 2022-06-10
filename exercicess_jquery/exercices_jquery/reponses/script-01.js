//  chemin relatif : reponses/script-01.js
//

$(function () {
  $(".rouge").css("color", "red");
  console.log();

  let one = $(".rouge").clone();
  console.log(one);

  $("#ce").append(one);

  let dernier = $(".orange").prependTo("#ce");

  $("#ce").append("<div>Il y a 6 div au total</div>");

  for (let i = 0; i < $("#ce").children().length; i++) {
    $("#ce")
      .find("div")
      .eq(i)
      .prepend(` n˚${i + 1} `);
  }
});
