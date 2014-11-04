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
      App.entire_group.fetch().done(function() {

        console.log(e);

      var id = $(e.currentTarget).attr('id');

      console.log(id);

      var feature = App.entire_group.get(id);

      console.log(feature);

      $('#featured').css('display', 'block');

      // var featuredImage = $(feature).attributes.('avatar');
      // var featuredHigh = $(feature).attributes.('high');
      // var featuredLow = $(feature).attributes.('low');
      $('.featuredImg').html(" <img src='" + featured.attributes.avatar + "' /> ")
      $('.high').html(featured.attributes.high);
      $('.low').html(featured.attributes.low);

    });


     // refreshes collection
      // var featuredImage = $(this).data('avatar');
      // var featuredHigh = $(this).data('high');
      // var featuredLow = $(this).data('low');
      // $('.featuredImg').html(" <img src='" + featuredImage + "' /> ")
      // $('.high').html(featuredHigh);
      // $('.low').html(featuredLow);
    },


  });

}());


// // Populate the featured section
// $('.profileGrid').on('click', 'li', function() {
//   entire_group.fetch().done(function() {
//     new App.Views.ClassView({
//         collection: entire_group
//     });
//     $('#featured').css('display', 'block');
//   }); // refreshes collection
//   var featuredImage = $(this).data('avatar');
//   var featuredHigh = $(this).data('high');
//   var featuredLow = $(this).data('low');
//   $('.featuredImg').html(" <img src='" + featuredImage + "' /> ")
//   $('.high').html(featuredHigh);
//   $('.low').html(featuredLow);
// });