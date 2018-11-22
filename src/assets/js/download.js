(function($) {
  "use strict";

  $(function() {
    $(".js-btn-descarga").click(function(e) {
      e.preventDefault();
      var url = $(this).data("url");
      $(".js-btn-descargar-popup").attr("href", url);
    });
  });
})(jQuery);
