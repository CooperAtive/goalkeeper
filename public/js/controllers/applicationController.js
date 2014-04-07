App.ApplicationController = Ember.Controller.extend({
  userId: localStorage.user_id,

  actions: {
    logout: function() {
      delete localStorage.user_id;
      this.set('userId', '');
      this.transitionToRoute('/');
    }
  }
});
