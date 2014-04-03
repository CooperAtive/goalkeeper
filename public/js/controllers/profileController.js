'use strict';
App.ProfileController = Ember.ObjectController.extend({
  actions: {
    edit: function() {
        this.transitionToRoute('profileEdit');
    }
  }
});
