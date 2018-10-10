let currTarget;
$(".firstLayerClickable").on("click",function(){
  let clanName = $(this).attr("data-name");
  let clanId = $(this).attr("data-id");
  sessionStorage.setItem("currentLoc",$(this).attr("data-location"));
  sessionStorage.setItem("currentClan",clanId);
  sessionStorage.setItem("currentClanName",$(this).attr("data-name"));
  currTarget = $(this);
  //sessionStorage.setItem("currTarget",$(this));
  //sessionStorage.setItem("currentIsPublic",$(this).attr("data-public"));
  //not sure if this works the way i think it does
  //annoying handlebar stuff
  if($(this).attr("data-public") === true || $(this).attr("data-public") === "true"){
    $("#visiButton").addClass("fa-eye");
  }
  else{
    $("#visiButton").addClass("fa-eye-slash");
  }
  $.ajax({
    url: "/api/ratings/groupRest",
    type: "POST",
    data: {
      userId: sessionStorage.getItem("curatorId"),
      clanId: clanId
    }
  }).then(function(data){
    //we'll set this module's expand button attribute's data id and data name too.
    $("#firstLayerFooter").attr("data-name",clanName);
    $("#firstLayerFooter").attr("data-id",clanId);
    $("#firstLayerTitle").text(clanName);
    $("#firstLayerScroll").empty();
    if(data.length === 0){
      console.log("Oops no entries!");
      $("#firstLayerScroll").append("<img class='img-fluid' src='/images/noEntries.gif' />");
      $("#firstLayerScroll").append("<h2>Oops, no entries!</h2>");
    }
    else{
      //constructs the scroll menu content
      for(let i = 0; i < data.length; i++){
        let firstScroll = $("<div>").addClass("card scroll-bar-item");
        firstScroll.append("<div>"+data[i].Restaurant.name+"</div>");
        firstScroll.append("<div><img class='img-fluid' src='"+data[i].Restaurant.imageLink+"' /></div>");
        //have to figure out how ratings works.
        firstScroll.append("<div>*****</div>");
        firstScroll.append("<div>"+data[i].Restaurant.price+"</div>");
        $("#firstLayerScroll").append(firstScroll);
      }
    }
    followCheck();
  });
});

function followCheck(){
  //we check if isMember
  $.ajax({
    type: "POST",
    url: "/api/memberships/clanUserIsMember",
    data: {
      clanId: sessionStorage.getItem("currentClan"),
      userId: sessionStorage.getItem("curatorId")
    }
  }).then(function(data2){
    console.log(data2);
    if(data2.length === 0){
      //not an anything with this group
      $("#followUnfollow").text("Follow");
      //create membership
      $("#followUnfollow").on("click",function(){
        $.ajax({
          url: "/api/memberships",
          type: "POST",
          data: {
            isAdmin: false,
            isMember: false,
            userId: sessionStorage.getItem("curatorId"),
            clanId: sessionStorage.getItem("currentClan")
          }
        }).then(function(){
          followCheck();
          $("#followUnfollow").off("click");
        });
      });
    }
    else{
      //is with this group
      $("#followUnfollow").text("Unfollow");
      //destroy
      $("#followUnfollow").on("click",function(){
        $.ajax({
          url: "/api/memberships/follow/"+sessionStorage.getItem("curatorId")+"/"+sessionStorage.getItem("currentClan"),
          type: "delete"
        }).then(function(){
          followCheck();
          $("#followUnfollow").off("click");
        });
      });
    }
    $("#firstLayerModal").modal("show");
  });
}
