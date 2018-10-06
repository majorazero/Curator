module.exports = function(app){
  app.get("/",function(req,res){
    // console.log(localStorage.getItem("token"));
    res.render("index",{});
  });
};
