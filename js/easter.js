(function($){
  $(function(){
    $("#w").click(function() {
      animateForever();
    });
    $("#s").click(function() {
      animateOnce();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

function animateForever() {
  changeColors();
  $("#pinkorange").effect("bounce", 500).delay(300).queue(function(){
    $(this).dequeue();
    animateForever();
  });
}

function changeColors() {
  $("#orange").toggleClass("amber-text");
  $("#orange").toggleClass("pink-text text-lighten-2");
  $("#pink").toggleClass("amber-text");
  $("#pink").toggleClass("pink-text text-lighten-2");
}

function animateOnce() {
  changeColors();
  $("#pinkorange").effect("bounce", 500);
}
