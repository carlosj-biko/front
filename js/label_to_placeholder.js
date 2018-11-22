(function ($, Drupal) {
  Drupal.behaviors.label_to_placeholder = {
    attach(context, settings) {
      $('form:not(.add_to_cart_personalizacion_tarjeta) :input:not(:checkbox):not(:radio):not(:button)').each((index, elem) => {
        const eId = $(elem).attr('id');
        let label = null;
        if (eId && (label = $(elem).parents('form:not(.add_to_cart_personalizacion_tarjeta)').find(`label[for=${eId}]`)).length == 1) {
          $(elem).attr('placeholder', $(label).html());
          $(label).hide();
        }
      });
      $('#edit-aecc-adyen-billing-address-pane-profile-field-profile-billing-tipo-docum option[value="_none"]').text("- Tipo de documento -");
    },
  };
}(jQuery, Drupal));
