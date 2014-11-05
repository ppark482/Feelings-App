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
    // Brings down data from server for
    // the feed sidebar
    App.feed_collection.fetch().done(function(){
      // Instantiates Router after Fetching
      // Data from both collections
      App.router = new App.Routers.AppRouter;
    });

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
