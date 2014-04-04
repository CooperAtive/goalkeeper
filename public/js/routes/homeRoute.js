'use strict';

App.HomeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('targetLite');
  }
});
