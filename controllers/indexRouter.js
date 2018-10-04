module.exports = function(app){
  require("./htmlRouter.js")(app);
  require("./yelpRouter.js")(app);
};
