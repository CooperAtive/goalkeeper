App.TargetsCreateRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('runTarget');
  }
});
