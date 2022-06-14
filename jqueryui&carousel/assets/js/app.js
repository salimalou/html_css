$(function () {
  var dateFlormat = "mm/dd/yy";

  // on cree 2 datePickers de sélection de range
  var dateFormat = "mm/dd/yy";

  // datepicker permettant de selectionner le début de la periode
  var from = $("#from")
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      showAnim: "fadeIn",
      numberOfMonths: 1,
      showButtonPanel: true,
    })
    .on("change", function () {
      // on configure le datepicker opposé en fonction du choix utilisateur
      to.datepicker("option", "minDate", getDate(this));
    });

  // datepicker permettant de selectionner la fin de la periode
  var to = $("#to")
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      showAnim: "fadeIn",
      numberOfMonths: 1,
      showButtonPanel: true,
    })
    .on("change", function () {
      // on configure le datepicker opposé en fonction du choix utilisateur
      from.datepicker("option", "maxDate", getDate(this));
    });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }

  // on permet aux click sur les icones de déclencher
  // l'ouverture des pickers
  $(".picker-from .triggerIcon").on("click", function (e) {
    from.datepicker("show");
  });

  $(".picker-to .triggerIcon").on("click", function (e) {
    to.datepicker("show");
  });

  // carousel
  var slideImg = [
    "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/07/26/06/29/flowers-402094_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/06/24/18/46/butterfly-3495224_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/10/16/13/24/butterfly-491166_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/17/06/45/butterfly-5180306_960_720.jpg",
  ];

  var sliderPrincipal = new MySlider($("#slider"), slideImg);
});
