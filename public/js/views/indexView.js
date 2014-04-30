App.IndexView = Ember.View.extend({
  didInsertElement: function() {

    $( "#goal1" ).delay(500).animate({left: "+=22%"}, 1000);
    $( "#goal2" ).delay(500).animate({left: "-=10%"}, 1000);
    $( "#goal3" ).delay(500).animate({left: "+=10%"}, 1000);
    $( "#goal4" ).delay(500).animate({left: "-=20%"}, 1000);

    $(".goal-circle").hide(1).delay(1000).fadeIn(1000);
  }
});
