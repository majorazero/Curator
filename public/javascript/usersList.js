$("#usersListButton").on("click",function(){
  $(".adminzOnly").show();
  //we'll make memberships get
  userList();
});

function userList(){
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
        let wrapper = $("<div>").addClass("row");
        let username = $("<div>").text(data[i].User.username).addClass("col-sm-10");
        wrapper.append(username);
        if(data[i].isAdmin === true){
          $("#usersAdmin").append(wrapper);
        }
        else{
          let trashIcon = $("<i>").addClass("adminzOnly fa fa-lg fa-trash").attr("data-id",data[i].id);
          trashIcon.on("click",function(){
            //time to kill a member
            $.ajax({
              url:"/api/membership/destroy",
              type: "DELETE",
              data: {
                id: $(this).attr("data-id"),
                clanId: sessionStorage.getItem("currentClan")
              }
            }).then(function(){
              //reloads user
              userList();
            });
          });
          let removeUser = $("<div>").addClass("col-sm-2").append(trashIcon);
          wrapper.append(removeUser);
          $("#usersMember").append(wrapper);
        }
      }
    }
    if(sessionStorage.getItem("currAdminStatus") !== "true"){
      $(".adminzOnly").hide();
    }
    $("#expanded-modal").modal("hide");
    $("#usersList").modal("show");
  });
}

$("#userListBack").on("click",function(){
  $("#usersList").modal("hide");
  $("#expanded-modal").modal("show");
});
