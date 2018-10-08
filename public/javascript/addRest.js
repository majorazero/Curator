$("#addRestButton").on("click",function(){
  $("#addRest").modal("show");
});
$("#addRestSearchButt").on("click",function(){
  $.ajax({
    type: "GET",
    url: "/api/yelp/LA/"+$("#restSearch").val()
  }).then(function(data){
    console.log(data);
    //loop through the 20
    $("#restResult").empty();
    for(let i = 0; i < data.businesses.length; i++){
      let outerWrapper = $("<div>").addClass("row group-rest-info");
      let restPortrait = $("<div>").addClass("col-sm-3 rest-img");
      $(restPortrait).append("<img src='"+data.businesses[i].image_url+"' class='img-fluid' />");
      let infoCard = $("<div>").addClass("col-sm-7");
      $(infoCard).append("<div class='rest-name'>"+data.businesses[i].name+"</div>");
      $(infoCard).append("<div class='rest-address'>"+data.businesses[i].location.display_address[0]+"</div>");
      $(infoCard).append("<div class='rest-address'>"+data.businesses[i].location.display_address[1]+"</div>");
      $(infoCard).append("<div class='rest-price' >"+data.businesses[i].price+"</div>");
      $(outerWrapper).append(restPortrait);
      $(outerWrapper).append(infoCard);
      $("#restResult").append(outerWrapper);
    }




  });
});
