App.RunTargetRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('runTarget', params.runTarget_id);
  }
});
