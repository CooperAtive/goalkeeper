'use strict';

window.App = Ember.Application.create();

App.Route = Ember.Route.extend({
  beforeModel: function() {
    if(!localStorage.user_id) {
      this.transitionTo('login');
    }
  }
});
