module.exports = function(app){
  require("./htmlRouter.js")(app);
  require("./yelpRouter.js")(app);
<<<<<<< HEAD
  require("./userRouter.js")(app);
=======
  require("./restaurantRouter.js")(app);
>>>>>>> restaurant
};
