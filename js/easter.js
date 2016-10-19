(function($){
  $(function(){
    $("#s").click(function() {
      $("#orange").toggleClass("amber-text");
      $("#orange").toggleClass("pink-text text-lighten-2");
      $("#pink").toggleClass("amber-text");
      $("#pink").toggleClass("pink-text text-lighten-2");
      $("#pinkorange").effect("bounce", 500);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
