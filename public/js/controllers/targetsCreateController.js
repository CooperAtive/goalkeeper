'use strict';

App.TargetsCreateController = Ember.ObjectController.extend({
  actions: {
    createTarget: function() {
      var self = this;

      var model = this.get('model');
      model.set('user_id', localStorage_userId);
        model.save()
        .then(function() {
          self.transitionToRoute('runTarget', self.get('model'));
        }, function() {
          alert('Target not successfully saved');
      });
    }
  }
});
