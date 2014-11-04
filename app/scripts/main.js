// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group :::::: entire_group is collection of classmates
// View Constructor is ClassView :::::  -------------------------------------------------------------------------------------------------------------------------------------------------

(function(){

  var findID;
  var uniqueID;

  // Brings down data from server
  App.entire_group.fetch().done(function() {
    new App.Views.ClassView({});
    new App.Views.FormView({});
  });
  
  App.feed_collection.fetch().done(function(){
    new App.Views.FeedView({});
  });

}());
