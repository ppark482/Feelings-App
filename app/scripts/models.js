(function(){

  App.Models.Classmate = Backbone.Model.extend({

    defaults: {

      name: '',
      class: 'Front End Hackorz',
      sID: '', // secret id
      low: '',
      high: '',
      avatar: ''
    },

    idAttribute: '_id', // need because we are using MongoDB


    initialize: function() {
    }


  });

}());
