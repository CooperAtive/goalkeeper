'use strict';

App.ProfileRoute = App.Route.extend({
  model: function(params) {
    return Ember.Object.create({first_name: 'Cooper', last_name: 'Cooperton'});
  }
});
