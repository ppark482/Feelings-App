var ClassView = Backbone.View.extend({

  tagName: 'ul',
  className: 'profile',

  initialize: function(options) {
    this.render(options.collection);
  },

  render: function( collection) {
    // Templates
    var gridTemp = $('#grid').html();
    var renderGrid = _.template(gridTemp);

    // Binding self
    var self = this;
    // iterating through the entire_group
    _.each(collection.models, function(user){
      self.$el.append(renderGrid(user.attributes));
    });

    // Take data and append to specific
    // DOM element
    $('.profileGrid').html(this.el);

    return this;

  } // end of render


});
