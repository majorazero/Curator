const db = require("../models");
const TokenUtility = require("../helper/token-utility");

module.exports = function(app){
  ////////////////////////////////////
  //////Read Routes
  ///////////////////////////////////


  ////////////////////////////////////
  //////Create Routes
  ///////////////////////////////////
  app.post("/api/tokenLogin",function(req,res){
    db.User.findOne({
      where: {
        token: req.body.token
      }
    }).then(function(data){
      if (data !== null){
        res.json(data.dataValues);
      } else {
        //we didn't
        res.json("No matching token.");
      }
    });
  });
  app.post("/api/login",function(req,res){
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user){
      if(user === null){
        //sends back user dne as womp2 response
        res.json("womp2");
      } else{
        if(user.dataValues.password === req.body.password){
          console.log("Yep!");
          //if password matches, we'll make a token, by encryption
          //tokens are uniquely generated based on user name and password
          const tokenUtil = new TokenUtility(req.body.username);
          let token = tokenUtil.encode(req.body.password);
          res.cookie("token", token, {expires: new Date(Date.now() + 999999999)});
          const sessionUser = {
            token: token, 
            id: user.dataValues.id, 
            username: user.dataValues.username
          };
          req.session.user = sessionUser;
          //saves token
          db.User.update({
            token: token
          },{
            where: {
              username: req.body.username
            }
          }).then(function(data){
            //sends token back to front end.
            res.json(sessionUser);
          });
        } else {
          //sends bad password back as a womp response
          res.json("womp");
        }
      }
    });
  });

  app.post("/api/newUser",function(req,res){
    console.log(req.body);
    //we need to check if the user exists already.
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(data){
      //if we found someone
      if(data !== null){
        res.json("Username already used.");
      } else {
        //we'll build our user
        db.User.create({
          username: req.body.username,
          password: req.body.password
        }).then(function(createRes){
          res.end();
        }).catch(err => res.status(404).json(err));
      }
    });
  });
  ////////////////////////////////////
  //////Update Routes
  ///////////////////////////////////
  app.put("/api/updateUserPass",function(req,res){
    db.User.update({
      password: req.body.password
    },{
      where: {
      username: req.body.username
      }
    }).then(function(){
      res.json("Password updated!");
    });
  });
  ////////////////////////////////////
  //////Destroy Routes
  ///////////////////////////////////
  app.delete("/api/deleteUser",function(req,res){
    db.User.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(){
      res.json("User destroyed.");
    });
  });
};
