module.exports = function(app){
  require("./htmlRouter")(app);
  require("./yelpRouter")(app);
  require("./userRouter")(app);
  require("./clanRouter")(app);
  require("./ratingRouter")(app);
  require("./restaurantRouter")(app);
  require("./membershipRouter")(app);
};
