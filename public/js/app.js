'use strict';

window.App = Ember.Application.create();

App.Route = Ember.Route.extend({
  beforeModel: function() {
    if(this.controllerFor('application').get('logout') ||
      !this.get('router.url') ||
      this.get('router.url') === '/signup') {
      this.controllerFor('application').set('logout', false);
      return;
    } else if (!localStorage.user_id) {
      return this.transitionTo('login');
    }
  }
});
