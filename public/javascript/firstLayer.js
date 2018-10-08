$(".cardCard").on("click",function(){
  let clanName = $(this).attr("data-name");
  $.ajax({
    url: "/api/ratings/groupRest",
    type: "POST",
    data: {
      userId: sessionStorage.getItem("curatorId"),
      clanId: $(this).attr("data-id")
    }
  }).then(function(data){
    console.log(data);
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
