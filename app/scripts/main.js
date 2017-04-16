(function ($) {

  'use strict';

  $('.section').waypoint({
    handler: function (direction) {
      $('#backgrounds > div').fadeOut(200);
      $(`#backgrounds #${this.element.id}-bg`).fadeIn(200);
    },
    offset: '25%'
  });

}(jQuery));
