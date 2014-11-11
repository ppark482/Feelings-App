(function(){
  // ClassView
  // -------------------------------------------------------------------------------------- //
  App.Views.ClassView = Parse.View.extend({

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
        self.$el.append(renderGrid(user.toJSON()));
      });

      // Take data and append to specific
      // DOM element
      $('.profileGrid').html(this.el);

      return this;

    }, // end of render

    setFeatured : function(e) {

      var id = $(e.currentTarget).attr('id');

      var feature = App.entire_group.get(id);

      new App.Views.SingleView({id: feature});

    },

  }); // end of classview

  // Form View
  // -------------------------------------------------------------------------------------- //
  App.Views.FormView = Parse.View.extend({
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
      var newGif = $.trim( $('#gifUpdate').val() );
      // need to compare secretID (secret) to
      // secret IDs in the collection and return
      var query = new Parse.Query(App.Models.Classmate);
      query.equalTo('sID', secret);
      var findID = query.find().then(function(object) {
        object.set('high', newHigh );
        object.save();
        console.log(object);
      });
      // var findID = App.feed_collection.findWhere({sID : secret});
      // need to set low and high properties
      // to the new low and high
      // findID.set('low', newLow);
      // findID.set('high', newHigh);
      // findID.set('gif', newGif);
      // findID.set('gif', newGif);

      // Append to feed
      // var newPost = new App.Models.Classmate({
      //   name: findID.attributes.name,
      //   low: findID.attributes.low,
      //   high: findID.attributes.high,
      //   avatar: findID.attributes.avatar,
      //   // Adds the time created to the model
      //   created: $.now()
      // });

      // Remove oldest post from feed_collection
      // Removing oldest instance
      // Limited to 6
      // App.feed_collection.models[0].destroy();

      // Save post to server, then add to collection
      // newPost.save(null, {
      //   success: function(){
      //     App.feed_collection.add(newPost)
      //   }
      // });

      // updates to server
      // findID.save();
      // Clears input form
      // $('#secretID, #highUpdate, #lowUpdate, #gifUpdate').val('');
      // updates featured block
      // new App.Views.SingleView({ 'id' : findID });
    }
  }); // end of form
  // Feed View
  // -------------------------------------------------------------------------------------- //
  App.Views.FeedView = Parse.View.extend({

    el: '#feed',

    events: {
      'click .feedItem' : 'goToFeatured'
    },

    initialize: function(){

      this.render();
      App.feed_collection.on('change', this.render, this);

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
        self.$el.prepend(renderFeed(user.toJSON()));
      });

      // Take data and append to specific
      // DOM element
      $('#feedContainer').html(this.el);

      return this;

    },

    goToFeatured: function(e){
      var id = $(e.currentTarget).attr('id');

      var feature = App.feed_collection.get(id);
      console.log(feature);

      var nameFromFeed = feature.attributes.name;
      var groupMate = App.entire_group.findWhere({name : nameFromFeed});
      var groupMateID = groupMate.get(groupMate.attributes._id);
      console.log(groupMateID);
      new App.Views.SingleView({id: id});
    }

  }); // end of feed view

  // Single View
  // -------------------------------------------------------------------------------------- //
  App.Views.SingleView = Parse.View.extend({

    el: '#featured',

    template: _.template($('#featuredTemp').html()),

    events: {

    },

    initialize: function(options) {
      this.options = options;
      this.render();
      App.entire_group.on('sync', this.render, this);
    },

    render: function () {
      var self = this;
      this.$el.empty();
      this.$el.html(this.template(this.options.id.toJSON()));
    }


  }); // end of single view

}()); // end of IIF
