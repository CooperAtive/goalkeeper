var appController;

module('App.ApplicationController', {
  setup: function() {
    Ember.run(function() {
      appController = App.__container__.lookup('controller:application');
    });
  },

  teardown: function() {

  }
});

test('Verify appController', function() {
  App.reset();
  ok(appController, 'Expecting non-null appController');
});
