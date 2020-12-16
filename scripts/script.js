$(document).ready(function() {
  var rellax = new Rellax('.rellax');

  $("#years").html(new Date().getFullYear() - 2012);

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});
