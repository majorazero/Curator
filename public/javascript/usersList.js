$("#usersListButton").on("click",function(){
  //we'll make memberships get
  $.ajax({
    type: "GET",
    url: "/api/memberships/activeMemberClans/"+sessionStorage.getItem("currentClan")
  }).then(function(data){
    $("#usersAdmin").empty();
    $("#usersMember").empty();
    console.log(data);
    if(data === "No Membership Found"){
      let wrapper = $("<div>");
      wrapper.text(data);
      $("#usersAdmin").append(wrapper);
    }
    else{
      for(let i = 0; i < data.length; i++){
        let wrapper = $("<div>");
        wrapper.text(data[i].User.username);
        if(data[i].isAdmin === true){
          $("#usersAdmin").append(wrapper);
        }
        else{
          $("#usersMember").append(wrapper);
        }
      }
    }
    $("#expanded-modal").modal("hide");
    $("#usersList").modal("show");
  });
});

$("#userListBack").on("click",function(){
  $("#usersList").modal("hide");
  $("#expanded-modal").modal("show");
});
