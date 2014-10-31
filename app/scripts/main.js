// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group
// -------------------------------------------------------------------------------------------------------------------------------------------------
var findID;

$('#update').on('submit', function(e){

  e.preventDefault();

  var secret = $('#secretID').val();
  var newHigh = $('#highUpdate').val();
  var newLow = $('#lowUpdate').val();

  // update groupArray from server
  // entire_group.fetch().done( function(data){
  //   findID = entire_group.findWhere({sID : secret});
  //   console.log(findID);
  //   // entire_group.add(findID);
  // });

  // uniqueID.set('high', newHigh).set('low', newLow);
  // Save groupArray to server
  // findID.save();

});