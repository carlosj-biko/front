(function ($, Drupal) {
  Drupal.behaviors.scroll_to_anchor = {
    attach: function (context, settings) {
      const $link = $('.scroll-to-anchor');
      if($link.length && $link.attr('href').match("^#")) { //Es un link con anchor
        $link.once('scroll_to_anchor').click(function scrollToAnchor() {
          $tagAnchor = $($(this).attr('href'));
          $('html,body').animate({scrollTop: $tagAnchor.offset().top}, 'slow');
        });
      }
    }
  }
})(jQuery, Drupal);