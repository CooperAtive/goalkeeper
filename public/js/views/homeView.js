App.HomeView = Ember.View.extend({
  didInsertElement: function() {
    var goals_array = ['Run', 'Travel', 'Read'];
    var percentage_complete = [0.75, 0.25, 0.50];

    function createGoals() {
      for (var i = 0; i < goals_array.length; i++) {
        var goal = goals_array[i];
        $("#container").append("<div class='radial-progress'> <div class='circle' id='goal-" + i + "'>" +
              "<div class='mask full'> <div class='fill'></div> </div>" +
              "<div class='mask half'> <div class='fill'></div> </div>" +
              "<center class='goal-name'>" + goal + "</center>" +
            "</div> </div>");
      }
    }

    function distributeGoals() {
      var radius;
      var circles = $('.radial-progress'),
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

    function animateGoals() {
      var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];

      $('head style[type="text/css"]').attr('type', 'text/less');
      less.refreshStyles();

      window.randomize = function() {
        var rotation = Math.floor(Math.random() * 180);
        var fill_rotation = rotation;
        for(i in transform_styles) {
          $('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        }
      }

      $('.radial-progress').click(function() {
        $('#pic-circle').animate({top: '-65%', left:'-85%'});
        //$('#pic-circle').css(transform_styles[i], 'scale(.5, .5)');
        //$('#pic-circle').show('scale', {percent: 75}, 2000);

        $(this).animate({left:'250px'});
      });

      window.randomize();

      //setTimeout(window.randomize, 200);
      //$('.radial-progress').click(window.randomize);
    }

    $('body').addClass('home');

    $(window).resize(function() {
      $('.radial-progress').remove();
      createGoals();
      distributeGoals();
      animateGoals();
    });

    createGoals();
    distributeGoals();
    animateGoals();
  },

  willClearRender: function() {
    $('body').removeClass('home');
  }
});
