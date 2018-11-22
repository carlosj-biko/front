/**
 * Hace scroll suave hasta un ancla (que no sea una pestaña #tab-pane),
 * salvando la altura de una cabecera fija.
 */
(function($) {
  $(function () {
    $('a.js-soft-scroll').click(function(e) {
      e.preventDefault();
      soft_scroll(this.hash);
    });

    function soft_scroll (target) {
      var offset = $(target).offset();
      var MARGIN_TOP_OFFSET = 50;
      $('html, body').animate({scrollTop:offset.top - MARGIN_TOP_OFFSET}, 1000);
    }
  });
})(jQuery);
