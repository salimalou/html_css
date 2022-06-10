//  chemin relatif : reponses/script-02.js
$(function () {
  $("#ce").css("background-color", "yellow");
  console.log($("#ce"));
  $("#ce").click(function () {
    setTimeout((el) => {
      $(".box").first().toggleClass("disparait");
    }, 100);

    setTimeout((el) => {
      $(".box").eq(1).toggleClass("disparait");
    }, 250);

    setTimeout((el) => {
      $(".box").eq(2).toggleClass("disparait");
    }, 400);

    setTimeout((el) => {
      $(".box").eq(3).toggleClass("disparait");
    }, 550);

    setTimeout((el) => {
      $(".box").eq(4).toggleClass("disparait");
    }, 700);

    setTimeout((el) => {
      $(".box").eq(5).toggleClass("disparait");
    }, 850);

    setTimeout((el) => {
      $(".box").eq(6).toggleClass("disparait");
    }, 1000);

    setTimeout((el) => {
      $(".box").toggleClass("disparait");
    }, 3000);
  });
});
