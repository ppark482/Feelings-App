// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group :::::: entire_group is collection of classmates
// View Constructor is ClassView :::::  -------------------------------------------------------------------------------------------------------------------------------------------------

(function(){

  var findID;
  var uniqueID;

  // Brings down data from server for class
  // and form views
  App.entire_group.fetch().done(function() {
    new App.Views.ClassView({});
    new App.Views.FormView({});
  });
  // Brings down data from server for
  // the feed sidebar
  App.feed_collection.fetch().done(function(){
    new App.Views.FeedView({});
  });
  // for a butterfly to follow your cursor
  $(document).ready(function(){
  var follow = $('.follow').css({position: 'absolute'});
  $(document).mousemove(function(e){
    follow.css({
      "top" : e.pageY + 5,
      "left" : e.pageX + 5
      });
    });
  });

}()); // end of IIF
