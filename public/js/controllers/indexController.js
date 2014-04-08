App.IndexController = Ember.Controller.extend({
  actions: {
    go_login: function() {
      if(localStorage.user_id) {
        this.transitionToRoute('home');
      } else {
        this.transitionToRoute('login');
      }
    }
  }
});
