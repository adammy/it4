(function ($) {

  'use strict';

  let waypointsInit = false;

  $('.section').waypoint({
    handler: function (direction) {
      if (waypointsInit) {
        $('#backgrounds > div').fadeOut(200);
        $(`#backgrounds #${this.element.id}-bg`).fadeIn(200);
        //$(`#${this.element.id} .animate`).removeClass('animate').addClass('animated');
      }
      waypointsInit = true;
    },
    offset: '25%'
  });

}(jQuery));
