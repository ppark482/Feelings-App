var ClassmateView = Backbone.View.extend({

  initialize: function(){
      console.log('classmate view initialized');
  },

  // Compile the template using underscore
  template: _.template( $("#classmate_template").html(), {} ),

  render: function(){
      // Load the compiled HTML into the Backbone "el"
      this.$el.html(this.template);
  }

});

// The initialize function is always called when instantiating a Backbone View.
// Consider it the constructor of the class.

var classmate_view = new ClassmateView({ el: $('.classmates') });
