App.Profile = DS.Model.extend({
  user_id: DS.attr(),
  email_preferences: DS.attr(),
  text_preferences: DS.attr(),
  alternate_email: DS.attr(),
  notify_friends: DS.attr()
});
