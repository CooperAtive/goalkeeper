App.TargetsCreateView = Ember.View.extend({
  didInsertElement: function() {
    $("#pick-goal").change(function() {
      var str = "";

      $("#pick-goal option:selected").each(function() {
        str += $(this).text();
      });

      if (str === "run more") {
        $('.goal-steps').css({ display: 'block'});
      } else {
        $('.goal-steps').hide();
      }
    });
  }
});
