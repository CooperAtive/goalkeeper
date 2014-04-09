App.IndexView = Ember.View.extend({
  didInsertElement: function() {

    $( "#goal1" ).delay(500).animate({left: "+=22%"}, 3000);
    $( "#goal2" ).delay(500).animate({left: "-=10%"}, 3000);
    $( "#goal3" ).delay(500).animate({left: "+=10%"}, 3000);
    $( "#goal4" ).delay(500).animate({left: "-=20%"}, 3000);

    $(".goal-circle").hide(1).delay(2499).fadeIn(3000);
  }
});
