module.exports = function(app){
  require("./htmlRouter.js")(app);
  require("./yelpRouter.js")(app);
  require("./userRouter.js")(app);
  require("./restaurantRouter.js")(app);
  require("./membershipRouter.js")(app);
};
