// Explore: -> a getAll from the Groups database where isPublic is true.

// Your Follows -> 1. getAll from Memberships where user = current user id
// 2. Display all groups associated with that, minimize database pings if possible.

$("#follow-btn").on("click",function(event){
  event.preventDefault();
  window.location.replace("/yourFollows/"+sessionStorage.getItem("curatorId"));
});

$("#group-btn").on("click",function(event){
  event.preventDefault();
  window.location.replace("/yourGroups/"+sessionStorage.getItem("curatorId"));
})
