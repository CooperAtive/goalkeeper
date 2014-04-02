App.ProfileRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('profile', params.user_id);
  }
});
