App.SignupController = Ember.ObjectController.extend({
  needs: 'application',

  app: Ember.computed.alias('controllers.application'),

  actions: {
    signup: function() {
      var self = this;
      var user =  {
        first_name: this.get('first_name'),
        last_name: this.get('last_name'),
        email: this.get('email'),
        password: this.get('password')
      };

      if( this.get('password2') !== user.password ) {
        alert('The passwords must match');
      } else {
        $.post('signup', user, function(response) {
          localStorage.user_id = response.user.id;
          self.set('app.userId', response.user.id);
          self.transitionToRoute('home');
        }).fail( function() {
          alert('Signup failure');
        });
      }
    }
  }
});
