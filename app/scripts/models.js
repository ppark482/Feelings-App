(function(){

  App.Models.Classmate = Parse.Object.extend({

    className: 'classmates',

    idAttribute: 'objectId',

    defaults: {

      name: '',
      class: 'Front End Hackorz',
      sID: '', // secret id
      low: '',
      high: '',
      avatar: '',
      gif: ''
    },

    initialize: function() {}

  });

}()); // end of IIF
