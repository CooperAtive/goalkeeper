App.SignupController = Ember.ObjectController.extend({
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
        $.post('api/v1/users', user, function() {
          self.transitionToRoute('users');
        }).fail( function() {
          alert('Signup failure');
        });
      }
    }
  }
});
