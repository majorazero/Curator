let currentDataSet;

$("#addRestButton").on("click",function(){
  //hide expanded Modal
  $("#expanded-modal").modal("hide");
  $("#addRest").modal("show");
});

$("#addRestSearchButt").on("click",function(){
  $.ajax({
    type: "GET",
    url: "/api/yelp/LA/"+$("#restSearch").val()
  }).then(function(data){
    console.log(data);
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
            $("#addRestRating").modal("show");
          }
          else{
            //Already exists
            console.log("We already have an entry of this.");
          }
        });
      });

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

$("#addRestRatingButt").on("click",function(){
  console.log($("#addRestRatingScore").val(),$("#addRestRatingComment").val());
  if($("#addRestRatingScore").val() <=5 || $("#addRestRatingScore").val() >=0){
    //score input is valid
    console.log(currentDataSet);
    console.log($(this).attr("data-indexid"));
  }
  else{
    console.log("Have to input a number between 0-5.");
  }
});
