$("#expand-btn").on("click", function () {
    //$("body").css("overflow", "hidden");
    $('#firstLayerModal').modal('hide');
    $("#expandedModalTitle").text($(this).parent().attr("data-name"));
    $.ajax({
      url: "/api/ratings/groupRest",
      type: "POST",
      data: {
        clanId: $(this).parent().attr("data-id")
      }
    }).then(function(data){
      console.log(data);
      $("#expanded-scrollMenu").empty();
      //constructs scrollmenu for expanded
      for(let i = 0; i < data.length; i++){
        let outerWrapper = $("<div>").addClass("row group-rest-info");
        let restPortrait = $("<div>").addClass("col-sm-3 rest-img");
        $(restPortrait).append("<img src='"+data[i].Restaurant.imageLink+"' class='img-fluid' />");
        let infoCard = $("<div>").addClass("col-sm-7");
        $(infoCard).append("<div class='rest-name'>"+data[i].Restaurant.name+"</div>");
        $(infoCard).append("<div class='rest-address'>"+data[i].Restaurant.address+"</div>");
        $(infoCard).append("<div class='rest-price' >"+data[i].Restaurant.price+"</div>");
        //have to figure out how ratings work still
        let ratingCard = $("<div>").addClass("col-sm-2 rest-rating").text("*****");

        $(outerWrapper).append(restPortrait);
        $(outerWrapper).append(infoCard);
        $(outerWrapper).append(ratingCard);
        $("#expanded-scrollMenu").append(outerWrapper);
      }

      $('#expanded-modal').modal('show');
    });

});
