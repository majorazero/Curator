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
  console.log($(this).attr("data-public"));
  if($(this).attr("data-public") === true){
    console.log(1);
    $("#visiButton").addClass("fa-eye");
  }
  else{
    console.log(2);
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
      console.log(data);
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

    $("#firstLayerModal").modal("show");
  });
});
