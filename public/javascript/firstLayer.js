$(".firstLayerClickable").on("click",function(){
  let clanName = $(this).attr("data-name");
  let clanId = $(this).attr("data-id");
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
      $("#firstLayerScroll").append("<img class='img-fluid' src='images/noEntries.gif' />");
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
