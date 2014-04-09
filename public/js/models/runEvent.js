'use strict';

App.RunEvent = DS.Model.extend({
  target_id: DS.belongsTo('runTarget'),
  distance: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  minutes: function() {
    return Math.floor(time / 60);
  },
  seconds: function() {
    return time % 60;
  }
});



/*
   create table running_events (
   id serial primary key,
   target_id serial references target_running(id),
   user_id serial references users(id),
   distance real,
   date date,
   time interval
   );
   */
