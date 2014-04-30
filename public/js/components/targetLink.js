App.TargetLinkComponent = Ember.Component.extend({
  classNames: ['target-link'],

  didInsertElement: function() {
    var rotation = Math.floor(Math.random() * 180);
    var fill_rotation = rotation;
    var styles = {
      '-webkit-transform': 'rotate(' + fill_rotation + 'deg)',
      '-ms-transform': 'rotate(' + fill_rotation + 'deg)',
      'transform': 'rotate(' + fill_rotation + 'deg)'
    }
    
    this.$().find('.circle .fill, .circle .mask.full').css(styles);
  }
});
