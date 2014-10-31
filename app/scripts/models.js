var Classmate = Backbone.Model.extend({

  defaults: {

    name: '',
    class: 'Front End Hackorz',
    sID: '', // secret id
    low: '',
    high: '',
    avatar: ''
  },

  idAttribute: '_id',

  initialize: function() {
    console.log("Classmate initialized");
  }


});
