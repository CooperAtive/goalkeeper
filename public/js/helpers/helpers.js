'use strict';
Ember.Handlebars.helper('formatDate', function(date) {
    var mDate = moment(date);
    return moment(mDate).format('MMM Do YYYY');
});
Ember.Handlebars.helper('userId', function() {
    return localStorage.user_id;
});

