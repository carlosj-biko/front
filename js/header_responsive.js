(function ($, Drupal) {
  Drupal.behaviors.header_responsive = {
    attach: function (context, settings) {
      var menuRight = document.getElementById('cbp-spmenu-s2'),
          showRightPush = document.getElementById('showRightPush'),
          closeRightPush = document.getElementById('closeRightPush'),
          body = document.body;

      showRightPush.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toleft');
        classie.toggle(menuRight, 'cbp-spmenu-open');
        disableOther('showRightPush');
      };
      closeRightPush.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toleft');
        classie.toggle(menuRight, 'cbp-spmenu-open');
        disableOther('closeRightPush');
      };

      function disableOther(button) {
        if (button !== 'showRightPush') {
          classie.toggle(showRightPush, 'disabled');
        }
      }
    }
  }
})(jQuery, Drupal);