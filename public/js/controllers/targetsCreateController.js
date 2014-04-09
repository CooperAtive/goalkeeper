App.TargetsCreateController = Ember.ObjectController.extend({
  needs: ['application'],

  calculateEndDate: function(unit, duration, start_date) {
    var end_date = new Date();

    switch( unit ) {
      case 'days':
        end_date.setDate( start_date.getDate() + duration);
        break;
      case 'weeks':
        end_date.setDate( start_date.getDate() + duration * 7);
        break;
      case 'months':
        end_date.setMonth( start_date.getMonth() + duration);
        break;
      default:
        end_date.setFullYear( start_date.getFullYear() + duration);
        break;
    }

    return end_date;
  },

  calculateDistance: function(distance, unit) {
    if(unit === 'miles') {
      return distance;
    } else {
      return distance / 1.6;
    }
  },

  calculateFrequency: function(frequency, unit) {
    if(unit === 'week') {
      return frequency;
    } else {
      return frequency / 4;
    }
  },

  actions: {
    createTarget: function() {
      var self = this;

      var time_unit = $("#time-unit option:selected").val();
      var duration = +$('#target-duration').val();
      var start_date = new Date(this.get('model.start_date'));
      var end_date = this.calculateEndDate(time_unit, duration, start_date);
      this.set('model.start_date', start_date)
          .set('model.end_date', end_date);

      var distance = $('#total-distance').val();
      var distance_unit = $('#distance-unit option:selected').val();
      this.set('model.total_miles', this.calculateDistance(distance, distance_unit));

      var frequency = $('#frequency').val();
      var frequency_unit = $('#frequency-unit option:selected').val();
      this.set('model.frequency', this.calculateFrequency(frequency, frequency_unit));

      this.set('model.user_id', this.get('controllers.application').get('userId'));

      console.log()
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
