App.IndexView = Ember.View.extend({
  didInsertElement: function() {
    $('#get-started-button').click(function() {
      window.location.href = 'login.html';
    });
  }
});
