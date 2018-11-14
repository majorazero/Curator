let currTarget;
$(".firstLayerClickable").on("click",function(){
  firstLayerClick($(this));
});

function firstLayerClick(currTar){
  let clanName = currTar.attr("data-name");
  let clanId = currTar.attr("data-id");
  sessionStorage.setItem("currentLoc",currTar.attr("data-location"));
  sessionStorage.setItem("currentClan",clanId);
  sessionStorage.setItem("currentClanName",currTar.attr("data-name"));
  currTarget = currTar;
  $("#followUnfollow").off("click");
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
      $("#firstLayerScroll").append("<img class='img-fluid' id='cat-img' src='/images/noEntries.gif' />");
      $("#firstLayerScroll").append("<h2>Oops, no entries!</h2>");
    }
    else{
      //constructs the scroll menu content
      let currRestId;
      let scoreSum = 0; //sum of ratings
      let ratingAmount = 0; //sum divided by this will give you average
      for(let i = 0; i < data.length; i++){
        //if currRestId changes
        if(currRestId !== data[i].restaurantId){
          //so we don't push in an undefined div.
          if(currRestId !== undefined){
            firstScroll(data[i-1],scoreSum,ratingAmount);
          }
          //set currRestId to the new one.
          currRestId = data[i].restaurantId;
          scoreSum = data[i].rating;
          ratingAmount = 1;
          if (i === data.length-1){
            firstScroll(data[i],scoreSum,ratingAmount);
          }
        }
        else{
          //lets just sum up the rating here
          scoreSum += data[i].rating;
          ratingAmount++;
        }
      }
    }
    followCheck();
  });
}

function firstScroll(data,scoreSum,ratingAmount){
  //append firstScroll onto firstLayerScroll
  let firstScroll = $("<div>").addClass("card scroll-bar-item scroll-item5");
  firstScroll.append("<div class='whitesmoke'>"+data.Restaurant.name+"</div>");
  firstScroll.append("<div class='whitesmoke' ><img class='img-fluid top5-image' src='"+data.Restaurant.imageLink+"' /></div>");
  //have to figure out how ratings works.
  firstScroll.append("<div class='whitesmoke'>"+(scoreSum/ratingAmount).toFixed(2)+"</div>");
  if(data.Restaurant.price === null){
    firstScroll.append("<div>No earthly idea.</div>");
  }
  else{
    firstScroll.append("<div class='whitesmoke'>"+data.Restaurant.price+"</div>");
  }
  $("#firstLayerScroll").append(firstScroll);
}

function followCheck(){
  $("#followUnfollow").show();
  //we check if isMember
  $.ajax({
    type: "POST",
    url: "/api/memberships/clanUserIsMember",
    data: {
      clanId: sessionStorage.getItem("currentClan"),
      userId: sessionStorage.getItem("curatorId")
    }
  }).then(function(data2){
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
      console.log(data2);
      sessionStorage.setItem("currMemStatus",data2[0].isMember);
      sessionStorage.setItem("currAdminStatus",data2[0].isAdmin);
      if(data2[0].isAdmin === true){
        //no buttons
        $("#followUnfollow").hide();
      }
      else{
        if(data2[0].isMember === true){
          $("#followUnfollow").text("Leave Group");
        }
        else{
          $("#followUnfollow").text("Unfollow");
        }
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
    }
    $("#firstLayerModal").modal("show");
  });
}
