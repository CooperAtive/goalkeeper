App.IndexView = Ember.View.extend({
  didInsertElement: function() {
    $('#login-button').click(function() {
      window.location.href = 'login.html';
    });
  }
});
