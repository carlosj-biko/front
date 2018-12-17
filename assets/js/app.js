"use strict";

(function ($) {
  "use strict";

  $(function () {
    $(".js-btn-descarga").click(function (e) {
      e.preventDefault();
      var url = $(this).data("url");
      $(".js-btn-descargar-popup").attr("href", url);
    });
  });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsImRhdGEiLCJhdHRyIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1g7O0FBRUFBLElBQUUsWUFBVztBQUNYQSxNQUFFLGtCQUFGLEVBQXNCQyxLQUF0QixDQUE0QixVQUFTQyxDQUFULEVBQVk7QUFDdENBLFFBQUVDLGNBQUY7QUFDQSxVQUFJQyxNQUFNSixFQUFFLElBQUYsRUFBUUssSUFBUixDQUFhLEtBQWIsQ0FBVjtBQUNBTCxRQUFFLHlCQUFGLEVBQTZCTSxJQUE3QixDQUFrQyxNQUFsQyxFQUEwQ0YsR0FBMUM7QUFDRCxLQUpEO0FBS0QsR0FORDtBQU9ELENBVkQsRUFVR0csTUFWSCIsImZpbGUiOiJkb3dubG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gICQoZnVuY3Rpb24oKSB7XG4gICAgJChcIi5qcy1idG4tZGVzY2FyZ2FcIikuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHVybCA9ICQodGhpcykuZGF0YShcInVybFwiKTtcbiAgICAgICQoXCIuanMtYnRuLWRlc2Nhcmdhci1wb3B1cFwiKS5hdHRyKFwiaHJlZlwiLCB1cmwpO1xuICAgIH0pO1xuICB9KTtcbn0pKGpRdWVyeSk7XG4iXX0=

"use strict";

(function ($) {
  "use strict";

  $(function () {
    $(".js-hamburger").click(function (e) {
      $(this).toggleClass("hamburger--active");
      $(".js-site-nav").toggleClass("site-nav--active");
    });
  });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyJdLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJlIiwidG9nZ2xlQ2xhc3MiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFTQSxDQUFULEVBQVk7QUFDWDs7QUFFQUEsSUFBRSxZQUFXO0FBQ1hBLE1BQUUsZUFBRixFQUFtQkMsS0FBbkIsQ0FBeUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ25DRixRQUFFLElBQUYsRUFBUUcsV0FBUixDQUFvQixtQkFBcEI7QUFDQUgsUUFBRSxjQUFGLEVBQWtCRyxXQUFsQixDQUE4QixrQkFBOUI7QUFDRCxLQUhEO0FBSUQsR0FMRDtBQU1ELENBVEQsRUFTR0MsTUFUSCIsImZpbGUiOiJoYW1idXJnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAkKGZ1bmN0aW9uKCkge1xuICAgICQoXCIuanMtaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJoYW1idXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgICQoXCIuanMtc2l0ZS1uYXZcIikudG9nZ2xlQ2xhc3MoXCJzaXRlLW5hdi0tYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9KTtcbn0pKGpRdWVyeSk7XG4iXX0=

'use strict';

/**
 * Hace scroll suave hasta un ancla (que no sea una pestaña #tab-pane),
 * salvando la altura de una cabecera fija.
 */
(function ($) {
  $(function () {
    $('a.js-soft-scroll').click(function (e) {
      e.preventDefault();
      soft_scroll(this.hash);
    });

    function soft_scroll(target) {
      var offset = $(target).offset();
      var MARGIN_TOP_OFFSET = 50;
      $('html, body').animate({ scrollTop: offset.top - MARGIN_TOP_OFFSET }, 1000);
    }
  });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvZnQtc2Nyb2xsLmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNvZnRfc2Nyb2xsIiwiaGFzaCIsInRhcmdldCIsIm9mZnNldCIsIk1BUkdJTl9UT1BfT0ZGU0VUIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInRvcCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUlBLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1hBLElBQUUsWUFBWTtBQUNaQSxNQUFFLGtCQUFGLEVBQXNCQyxLQUF0QixDQUE0QixVQUFTQyxDQUFULEVBQVk7QUFDdENBLFFBQUVDLGNBQUY7QUFDQUMsa0JBQVksS0FBS0MsSUFBakI7QUFDRCxLQUhEOztBQUtBLGFBQVNELFdBQVQsQ0FBc0JFLE1BQXRCLEVBQThCO0FBQzVCLFVBQUlDLFNBQVNQLEVBQUVNLE1BQUYsRUFBVUMsTUFBVixFQUFiO0FBQ0EsVUFBSUMsb0JBQW9CLEVBQXhCO0FBQ0FSLFFBQUUsWUFBRixFQUFnQlMsT0FBaEIsQ0FBd0IsRUFBQ0MsV0FBVUgsT0FBT0ksR0FBUCxHQUFhSCxpQkFBeEIsRUFBeEIsRUFBb0UsSUFBcEU7QUFDRDtBQUNGLEdBWEQ7QUFZRCxDQWJELEVBYUdJLE1BYkgiLCJmaWxlIjoic29mdC1zY3JvbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhhY2Ugc2Nyb2xsIHN1YXZlIGhhc3RhIHVuIGFuY2xhIChxdWUgbm8gc2VhIHVuYSBwZXN0YcOxYSAjdGFiLXBhbmUpLFxuICogc2FsdmFuZG8gbGEgYWx0dXJhIGRlIHVuYSBjYWJlY2VyYSBmaWphLlxuICovXG4oZnVuY3Rpb24oJCkge1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdhLmpzLXNvZnQtc2Nyb2xsJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc29mdF9zY3JvbGwodGhpcy5oYXNoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNvZnRfc2Nyb2xsICh0YXJnZXQpIHtcbiAgICAgIHZhciBvZmZzZXQgPSAkKHRhcmdldCkub2Zmc2V0KCk7XG4gICAgICB2YXIgTUFSR0lOX1RPUF9PRkZTRVQgPSA1MDtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6b2Zmc2V0LnRvcCAtIE1BUkdJTl9UT1BfT0ZGU0VUfSwgMTAwMCk7XG4gICAgfVxuICB9KTtcbn0pKGpRdWVyeSk7XG4iXX0=
