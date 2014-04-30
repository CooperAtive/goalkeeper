App.HomeView = Ember.View.extend({
  didInsertElement: function() {
    $('#container').addClass('home');

    var self = this;

    function distributeGoals() {
      var radius;
      var circles = $('.target-link'),
          container = $('#container'),
          width = container.width(),
          height = container.height(),
          angle = 0,
          step = (2*Math.PI) / circles.length;
          
      if( width < height ) {
        radius = width / 3;
      } else {
        radius = height / 3;
      }

      circles.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        $(this).css({
          left: x + 'px',
          top: y + 'px'
        });

        angle += step;
      });
    }
/*
    function animateGoals() {
      $('.target-link').click(function() {
        $('#pic-circle').animate({top:'-55%', left:'-88%'});
        $('#goalkeeper-circle').animate({left:'1.75%'});
        $('#create-circle').hide();
        $('#goal-outer0').animate({top:'33%', left:'1.75%'});
        $('#goal-outer1').animate({top:'53%', left:'1.75%'});
        $('#goal-outer2').animate({top:'73%', left:'1.75%'});
      });
    }*/

    $(window).resize(function() {
      distributeGoals();
    });

    distributeGoals();
  },

  willClearRender: function() {
    $('body').removeClass('home');
  }
});
