'use strict';

window.App = Ember.Application.create();

App.Route = Ember.Route.extend({
  beforeModel: function() {
    if(!this.get('router.url')) {
      return;
    } else if (!localStorage.user_id) {
      return this.transitionTo('login');
    }
  }
});
