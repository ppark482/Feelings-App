// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group
// -------------------------------------------------------------------------------------------------------------------------------------------------
var findID;
var uniqueID;

$('#update').on('submit', function(e){

  // e.preventDefault();

  var secret = $('#secretID').val();
  var newHigh = $('#highUpdate').val();
  var newLow = $('#lowUpdate').val();

  // update groupArray from server
  // entire_group.fetch().done( function(data){
  //   findID = entire_group.findWhere({sID : secret});
  //   console.log(findID);
  //   // entire_group.add(findID);
  // });

  findID = entire_group.findWhere({sID : secret});
  uniqueID = findID.attributes._id;
  console.log(uniqueID);

  var matching = entire_group.findWhere({_id: uniqueID});
  matching.attributes.high = newHigh;
  matching.save();

  // _.each(entire_group, function(x){
  //   if(x._id === uniqueID){
  //     console.log(x);
  //   }
  // });

  // console.log(uniqueID);
  // findID.set('high', newHigh).set('low', newLow);

  // uniqueID.set('high', newHigh).set('low', newLow);
  // Save groupArray to server
  // findID.save();

});