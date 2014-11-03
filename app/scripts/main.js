// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group :::::: entire_group is collection of classmates
// View Constructor is ClassView :::::  -------------------------------------------------------------------------------------------------------------------------------------------------
var findID;
var uniqueID;

// Brings down data from server
entire_group.fetch().done(function() {
  new ClassView({
    // after fetching from server
    // collection entire_group is populated
    collection: entire_group
  });
});


// On update feelings click
$('#update').on('click', '#updateBtn', function(e){
  // on click of update feelings button
  e.preventDefault();
  // take input values
  // trim removes spaces before or after
  var secret = $.trim( $('#secretID').val() );
  var newHigh = $.trim( $('#highUpdate').val() );
  var newLow = $.trim( $('#lowUpdate').val() );
  // need to compare secretID (secret) to
  // secret IDs in the collection and return
  findID = entire_group.findWhere({sID : secret});
  // need to set low and high properties
  // to the new low and high
  findID.set('low', newLow);
  findID.set('high', newHigh);
  // updates to server
  findID.save();
  // Clears input form
  $('#secretID, #highUpdate, #lowUpdate').val('');
});

// On click of individual profiles
// Populate the featured section
$('.profileGrid').on('click', 'li', function() {
  entire_group.fetch().done(function() {
    new ClassView({
        collection: entire_group
    });
    $('.featured').css('display', 'block');
  }); // refreshes collection
  var featuredImage = $(this).data('avatar');
  var featuredHigh = $(this).data('high');
  var featuredLow = $(this).data('low');
  $('.featuredImg').html(" <img src='" + featuredImage + "' /> ")
  $('.high').html(featuredHigh);
  $('.low').html(featuredLow);
});
