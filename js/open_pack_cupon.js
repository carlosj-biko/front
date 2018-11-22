(function ($, Drupal) {
  Drupal.behaviors.open_pack_cupon = {
    attach: function (context, settings) {
      const $packCupon = $('.pack-cupon');
      const $buttonPack = $('#button-pack');
      const $closeForm = $('.pack-cupon .close');
      $buttonPack.click(function () {
        $packCupon.css("display", "block");
        $packCupon.css("bottom", "0px");
        $(this).css("bottom", "-200px");
      });
      $closeForm.click(function () {
        $packCupon.css("bottom", "-500px");
        $buttonPack.css("bottom", "0px");
      });
    }
  }
})(jQuery, Drupal);