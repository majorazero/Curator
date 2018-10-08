// Explore: -> a getAll from the Groups database where isPublic is true.

// Your Follows -> 1. getAll from Memberships where user = current user id
// 2. Display all groups associated with that, minimize database pings if possible.

$("#follow-btn").on("click",function(event){
  event.preventDefault();
  window.location.replace("/yourFollows/"+sessionStorage.getItem("curatorId"));
  // $.ajax({
  //   url: "/yourFollows/"+sessionStorage.getItem("curatorId"),
  //   type: "GET"
  // }).then(function(data){
  //   //location.reload();
  //   //document.write(data);
  //   window.location = "/yourFollows/"+sessionStorage.getItem("curatorId");
  // });
  //window.location = "/yourFollows/"+sessionStorage.getItem("curatorId");
});
