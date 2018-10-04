
$("#group-name1").on("click", function () {
    $('#exampleModalCenter').modal('show');
});


$("#group-name2").on("click", function () {
    $('#exampleModalCenter').modal('show');
});


$("#group-name3").on("click", function () {
    $('#exampleModalCenter').modal('show');
});

//Top 5 choices modal
$("#expand-btn").on("click", function () {
    $("body").css("overflow", "hidden");
    $('#exampleModalCenter').modal('hide');
    $('#expanded-modal').modal('show');
});

//Nav bar
$("#navbar-log-sign").on("click", function () {
    $('#log-sign-modal').modal('show');
});



//Back button from expand to returant modal
$("#backto-scroll-modal").on("click", function () {
    $('#expanded-modal').modal('hide');
    $('#exampleModalCenter').modal('show');
});

$('.scrollmenu').mousewheel(function (e, delta) {
    this.scrollLeft -= (delta * 1);
    e.preventDefault();
});

