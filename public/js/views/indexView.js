App.IndexView = Ember.View.extend({
  didInsertElement: function() {

    $( "#goal1" ).animate({
      left: "+=22%"
    }, 2000, function() {
      // Animation complete.
    });

    $( "#goal2" ).animate({
      left: "-=10%"
    }, 2000, function() {
      // Animation complete.
    });

    $( "#goal3" ).animate({
      left: "+=10%"
    }, 2000, function() {
      // Animation complete.
    });

    $( "#goal4" ).animate({
      left: "-=20%"
    }, 2000, function() {
      // Animation complete.
    });

    $( "#goal-circle1" ).fadeIn(5000, function() {
      // Animation complete
    });

  }
});
