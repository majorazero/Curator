let currentDataSet;

$("#addRestButton").on("click",function(){
  //hide expanded Modal
  $("#expanded-modal").modal("hide");
  $("#addRestSearchWarning").hide();
  $("#addRest").modal("show");
});

$("#addRestSearchButt").on("click",function(){
  $.ajax({
    type: "GET",
    url: "/api/yelp/"+sessionStorage.getItem("currentLoc")+"/"+$("#restSearch").val()
  }).then(function(data){
    console.log(data.businesses);
    currentDataSet = data.businesses;
    //loop through the 20
    $("#restResult").empty();
    for(let i = 0; i < data.businesses.length; i++){
      let outerWrapper = $("<div>").addClass("row group-rest-info").attr("data-id",data.businesses[i].id).attr("index-id",i);

      outerWrapper.on("click",function(){
        let yelpId = $(this).attr("data-id");
        let indexId = $(this).attr("index-id")
        //we need to see if this restaunts exists already within this group's context
        $.ajax({
          type: "GET",
          url: "/api/ratings/checkExist/"+sessionStorage.getItem("currentClan")+"/"+$(this).attr("data-id")
        }).then(function(data){
          console.log(data);
          if(data.length === 0){
            //A-Ok to insert. We need to prompt an intial rating first.
            $("#addRest").modal("hide");
            $("#addRestRating").attr("data-restId",yelpId);
            $("#addRestRating").attr("data-indexId",indexId);
            $("#addRestScoreWarning").hide();
            $("#addRestRating").modal("show");
          }
          else{
            //Already exists
            console.log("We already have an entry of this.");
            $("#addRestSearchWarning").show();
          }
        });
      });

      let restPortrait = $("<div>").addClass("col-sm-3 rest-img");
      $(restPortrait).append("<img src='"+data.businesses[i].image_url+"' class='img-fluid' />");
      let infoCard = $("<div>").addClass("col-sm-7");
      $(infoCard).append("<div class='rest-name'>"+data.businesses[i].name+"</div>");
      $(infoCard).append("<div class='rest-address'>"+data.businesses[i].location.display_address[0]+"</div>");
      if(data.businesses[i].location.display_address[1] !== undefined){
        $(infoCard).append("<div class='rest-address'>"+data.businesses[i].location.display_address[1]+"</div>");
      }
      if(data.businesses[i].price === undefined){
        $(infoCard).append("<div class='rest-price' >No earthly idea.</div>");
      }
      else{
        $(infoCard).append("<div class='rest-price' >"+data.businesses[i].price+"</div>");
      }
      $(outerWrapper).append(restPortrait);
      $(outerWrapper).append(infoCard);
      $("#restResult").append(outerWrapper);
    }
  });
});

$("#addRestRatingButt").on("click",function(){
  if($("#addRestRatingScore").val() <=5 && $("#addRestRatingScore").val() >=0){
    //score input is valid
    //does restaurant exist in our database?
    let target = currentDataSet[parseInt($("#addRestRating").attr("data-indexid"))];
    $.ajax({
      url: "/api/restaurants/"+target.id,
      type: "GET"
    }).then(function(data){
      if(data === "No Restaurants Found"){
        //you add the restaurant to the restaurant database
        $.ajax({
          url:"/api/restaurants/new",
          type: "POST",
          data: {
            name: target.name,
            imageLink: target.image_url,
            yelpId: target.id,
            address: target.location.display_address[0]+", "+target.location.display_address[1],
            price: target.price
          }
        }).then(function(data){
          //use the id to make a new rating
          let restId = data.id;
          makeRating(restId);
        });
      }
      else {
        //get the restaurant id and make a new rating
        let restId = data[0].id;
        makeRating(restId);
      }
    });
  }
  else{
    $("#addRestScoreWarning").show();
  }
});

function makeRating(restId){
  $.ajax({
    url:"/api/ratings",
    type: "POST",
    data: {
      userId: sessionStorage.getItem("curatorId"),
      restaurantId: restId,
      clanId: sessionStorage.getItem("currentClan"),
      rating: $("#addRestRatingScore").val(),
      comment: $("#addRestRatingComment").val()
    }
  }).then(function(){
    //after you make the rating you should reload the previous modal and close this modal.
    $("#addRestRating").modal("hide");
    secondLayerList($("#expand-btn"));
  })
}
