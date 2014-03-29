App.LoginController = Ember.ObjectController.extend({
  actions: {
    login: function() {
      var model = this.get('model');
      console.log(model);
      this.transitionToRoute('users');
    }
  }
});
