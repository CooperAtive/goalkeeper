'use strict';

App.TargetsCreateRoute = App.Route.extend({
  model: function() {
    return this.store.createRecord('runTarget');
  }
});
