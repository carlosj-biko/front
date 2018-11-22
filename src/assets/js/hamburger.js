(function($) {
  "use strict";

  $(function() {
    $(".js-hamburger").click(function(e) {
      $(this).toggleClass("hamburger--active");
      $(".js-site-nav").toggleClass("site-nav--active");
    });
  });
})(jQuery);
