App.LoginController = Ember.ObjectController.extend({
  needs: 'application',

  app: Ember.computed.alias('controllers.application'),

  actions: {
      /*
    login: function() {
      var self = this;
      var email = this.get('email');
      var password = this.get('password');

    $.post('login', { email: email, password: password }, function(response) {
        localStorage.user_id = response.user.id;
        self.set('app.userId', response.user.id);
        self.transitionToRoute('home');
      }).fail( function() {
        alert('Invalid login');
      });
    }
    */
  }
});
