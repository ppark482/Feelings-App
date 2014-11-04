(function(){

  App.Views.ClassView = Backbone.View.extend({

    tagName: 'ul',
    className: 'profile',

    events: {
      'click li.individual' : 'setFeatured'
    },

    initialize: function() {
      this.render(App.entire_group);

      App.entire_group.on('sync', this.render, this);
    },

    render: function() {
      // Templates
      var gridTemp = $('#grid').html();
      var renderGrid = _.template(gridTemp);
      // Binding self
      var self = this;
      // iterating through the entire_group
      _.each(App.entire_group.models, function(user){
        self.$el.append(renderGrid(user.attributes));
      });

      // Take data and append to specific
      // DOM element
      $('.profileGrid').html(this.el);

      return this;

    }, // end of render

    setFeatured : function(e) {

      var id = $(e.currentTarget).attr('id');

      var feature = App.entire_group.get(id);

      $('#featured').css('display', 'block');

      $('.featuredImg').html(" <img src='" + feature.attributes.avatar + "' /> ")
      $('.high').html(feature.attributes.high);
      $('.low').html(feature.attributes.low);

    },

  });

  // Form View
  App.Views.FormView = Backbone.View.extend({

    el: '#inputForm',

    events: {
      'click #updateBtn': 'updateFeels'
    },

    initialize: function(){

      this.render();

    },

    render: function(){

      var form = $('#formTemp').html();
      this.$el.html(form);

    },

    updateFeels: function(e){

      // on click of update feelings button
      e.preventDefault();

      // take input values
      // trim removes spaces before or after
      var secret = $.trim( $('#secretID').val() );
      var newHigh = $.trim( $('#highUpdate').val() );
      var newLow = $.trim( $('#lowUpdate').val() );

      // need to compare secretID (secret) to
      // secret IDs in the collection and return
      findID = App.entire_group.findWhere({sID : secret});

      // need to set low and high properties
      // to the new low and high
      findID.set('low', newLow);
      findID.set('high', newHigh);

      // updates to server
      findID.save();

      // Clears input form
      $('#secretID, #highUpdate, #lowUpdate').val('');

    }

  });

}());