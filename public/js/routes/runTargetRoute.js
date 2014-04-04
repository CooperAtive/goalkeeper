'use strict';
App.RunTargetRoute = Ember.Route.extend({
  model: function(params) {
    var a = this.store.find('runTarget', params.runTarget_id);
    console.log(a);
    return a;
  }
});
