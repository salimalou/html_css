$(function () {
  var dateFlormat = "mm/dd/yy";

  var dateFormat = "mm/dd/yy";

  var from = $("#from")
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      showAnim: "fadeIn",
      numberOfMonths: 1,
      showButtonPanel: true,
    })
    .on("change", function () {
      to.datepicker("option", "minDate", getDate(this));
    });

  var to = $("#to")
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      showAnim: "fadeIn",
      numberOfMonths: 1,
      showButtonPanel: true,
    })
    .on("change", function () {
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

  $(".debut .triggerIcon").on("click", function (e) {
    from.datepicker("show");
  });

  $(".fin .triggerIcon").on("click", function (e) {
    to.datepicker("show");
  });

  var slideImg = [
    "./assets/img/vehicule1.png",
    "https://media.istockphoto.com/photos/peugeot-logo-on-a-peugeot-car-at-a-car-dealer-in-nuremberg-picture-id1141309925?s=612x612",
    // "https://media.istockphoto.com/photos/peugeot-208-picture-id1190534442?s=612x612",
  ];
  var sliderPrincipal = new MySlider($("#slider"), slideImg);

  var slideeImg = [
    "./assets/img/vehicule2.png",
    "https://cdn.pixabay.com/photo/2017/12/03/23/42/ford-focus-2996069_960_720.jpg",
  ];
  var sliderPrincipal = new MySlider($("#sliderd"), slideeImg);

  var slideerImg = [
    "./assets/img/vehicule3.png",
    "https://cdn.pixabay.com/photo/2017/09/14/00/43/auto-2747658_960_720.jpg",
  ];
  var sliderPrincipal = new MySlider($("#slid"), slideerImg);

  var slideeerImg = [
    "./assets/img/vehicule4.png",
    "https://th.bing.com/th/id/R.932897c36e819978becbbe98d9b57f5d?rik=TCOrNe1bhSMogw&pid=ImgRaw&r=0",
  ];
  var sliderPrincipal = new MySlider($("#sl"), slideeerImg);
});
