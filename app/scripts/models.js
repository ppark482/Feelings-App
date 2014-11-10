(function(){

  App.Models.Classmate = Parse.Object.extend({

    className: 'classmates',

    defaults: {

      name: '',
      class: 'Front End Hackorz',
      sID: '', // secret id
      low: '',
      high: '',
      avatar: '',
      gif: ''
    },

    idAttribute: 'objectId', // need because we are using MongoDB

    initialize: function() {}

  });

}()); // end of IIF
