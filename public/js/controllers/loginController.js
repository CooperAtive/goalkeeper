App.LoginController = Ember.ObjectController.extend({
  actions: {
    login: function() {
      var self = this;
      var email = this.get('email');
      var password = this.get('password');

      $.post('login', { email: email, password: password }, function() {
        self.transitionToRoute('users');
      }).fail( function() {
        alert('Invalid login');
      });
    }
  }
});
