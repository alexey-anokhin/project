$(document).ready(function () {

	  function blueasyMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });

      $(window).resize(function() {
        if ($(window).width() > 768 ) {
          $menu.removeAttr('style');
        }
      });

    }
	blueasyMenu();
});