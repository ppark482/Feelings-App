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
      'click #updateBtn': 'updateFeels',
    },

    initialize: function(){

      this.render();
      App.entire_group.on('sync', this.updateFeels, this);

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

      // Append to feed
      var newPost = new App.Models.Classmate({
        name: findID.attributes.name,
        low: findID.attributes.low,
        high: findID.attributes.high,
        avatar: findID.attributes.avatar
      });
      console.log(newPost);
      App.feed_collection.add(newPost).save();

      // updates to server
      findID.save();
      // Clears input form
      $('#secretID, #highUpdate, #lowUpdate').val('');
      // updates featured block
      $('#featured').css('display', 'block');

      $('.featuredImg').html(" <img src='" + findID.attributes.avatar + "' /> ")
      $('.high').html(findID.attributes.high);
      $('.low').html(findID.attributes.low);

    }

  });

  // Feed view
  App.Views.FeedView = Backbone.View.extend({

    el: '#feed',

    events: {
      'click #updateBtn': 'addToFeed',
    },

    initialize: function(){

      this.render();
      App.feed_collection.on('sync', this.render, this);

    },

    render: function(){

      var feed = $('#feedTemp').html();
      var renderFeed = _.template(feed);

      // Clear our element
      this.$el.empty();

      // Binding self
      var self = this;
      // iterating through the entire_group
      _.each(App.feed_collection.models, function(user){
        self.$el.append(renderFeed(user.attributes));
      });

      // Take data and append to specific
      // DOM element
      $('#feedContainer').html(this.el);

      return this;

    },

    addToFeed: function(){}

  });

}());