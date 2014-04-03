'use strict';

App.UsersController = Ember.ArrayController.extend({
  actions: {
    profileView: function() {
        var self = this;
        self.transitionToRoute('profile');
    }
  }

});
