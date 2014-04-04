'use strict';

App.RunMilestone = DS.Model.extend({
  target_id: DS.belongsTo('runTarget'),
  distance: DS.attr(),
  date: DS.attr(),
  time: DS.attr()
});
