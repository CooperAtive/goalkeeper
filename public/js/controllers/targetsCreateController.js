App.TargetsCreateController = Ember.ObjectController.extend({
  actions: {
    createTarget: function() {
      var self = this;

      this.get('model')
        .save()
        .then(function() {
          self.transitionToRoute('runTarget', self.get('model'));
        }, function() {
          alert('Target not successfully saved');
      });
    }
  }
});
