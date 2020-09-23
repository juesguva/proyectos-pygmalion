$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
});

$('.carousel').carousel({
  interval: 1700
});

$(document).ready(function () {
  // Lift card and show stats on Mouseover
  $("#product-card").hover(
    function () {
      $(this).addClass("animate");
    },
    function () {
      $(this).removeClass("animate");
    }
  );
});

