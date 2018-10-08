$(".cardCard").on("click",function(){
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
    console.log(data);
    //we'll set this module's expand button attribute's data id and data name too.
    $("#firstLayerFooter").attr("data-name",clanName);
    $("#firstLayerFooter").attr("data-id",clanId);
    //constructs the scroll menu content
    $("#firstLayerTitle").text(clanName);
    $("#firstLayerScroll").empty();
    for(let i = 0; i < data.length; i++){
      let firstScroll = $("<div>").addClass("card scroll-bar-item");
      firstScroll.append("<div>"+data[i].Restaurant.name+"</div>");
      firstScroll.append("<div><img class='img-fluid' src='"+data[i].Restaurant.imageLink+"' /></div>");
      //have to figure out how ratings works.
      firstScroll.append("<div>*****</div>");
      firstScroll.append("<div>"+data[i].Restaurant.price+"</div>");
      $("#firstLayerScroll").append(firstScroll);
    }
    $("#firstLayerModal").modal("show");
  });
});
