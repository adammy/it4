(function ($) {

  'use strict';

  let waypointsInit = false;

  $('.section').waypoint({
    handler: function (direction) {
      if (waypointsInit) {
        $('#backgrounds > div').fadeOut(300);
        $(`#backgrounds #${this.element.id}-bg`).fadeIn(300);
				$(`#${this.element.id} > div`).show();
      }
      waypointsInit = true;
    },
    offset: '25%'
  });

}(jQuery));
