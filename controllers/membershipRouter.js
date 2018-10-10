var db = require("../models");
const crypto = require("crypto");

module.exports = function (app) {



    // // GET route for getting all of the memberships
    // app.get("/api/memberships", function (req, res) {
    //     db.Membership.findAll({}).then(function (response) {
    //         res.json(response);
    //     });
    // });

    app.post("/api/memberships/clanUserIsMember",function(req,res){
      db.Membership.findAll({
        where: {
           clanId: req.body.clanId,
           userId: req.body.userId
        }
      }).then(function(data){
        res.json(data);
      })
    });

    // GET route for getting all of the memberships by UserId
    // And if user is a member
    app.post("/api/memberships/userGroups", function (req, res) {
        db.Membership
        .findAll({
            where: {
                userId: req.body.id,
                isMember: true
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });

    // GET route for getting all of the memberships by UserId
    // And
    app.post("/api/memberships/user", function (req, res) {
        db.Membership
        .findAll({
            includes: [{
                model: db.Clan,
                as: "userClans"
            }],
            where: {
                userId: req.body.id
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });


    app.post("/api/memberships/inviteCode",function(req,res) {
      let mykey = crypto.createDecipher("aes-128-cbc","inviteCode");
      let token = mykey.update(req.body.inviteCode,'hex','utf8');
      token += mykey.final('utf8');
      db.Membership.findAll({
        where: {
          clanId: token,
          userId: req.body.userId
        }
      }).then(function(data){
        console.log(data);
        if(data.length === 0){
          //membership does not exist lets make one
          db.Membership.create({
            clanId: token,
            userId: req.body.userId,
            isMember: true
          }).then(function(){
            res.json("Success!");
          });
        }
        else if (data[0].dataValues.isMember === false){
          //if they're following
          db.Membership.update({
            isMember: true
          },{
            where: {
              userId: req.body.userId
            }
          }).then(function(){
            res.json("Success!");
          });
        }
        else {
          //memberships exist
          //member exists, return a message that they're already in this group
          res.json("Already in this group.");
        }
      });
    });


    // GET route for getting all of the memberships by clanId
    app.get("/api/memberships/clans/:id", function (req, res) {
        db.Membership.findAll({
            where: {
                clanId: req.params.id
            }
        }).then(function (response) {
            if (response.length === 0) {
                res.json("No Membership Found");
            }
            else {
                res.json(response);
            }
        });
    });

    //finds all members of clan
    app.get("/api/memberships/activeMemberClans/:id", function (req, res) {
        db.Membership.findAll({
            where: {
                clanId: req.params.id,
                isMember: true
            },
            include:[{
              model: db.User
            }]
        }).then(function (response) {
            if (response.length === 0) {
                res.json("No Membership Found");
            }
            else {
                res.json(response);
            }
        });
    });

    // GET route for getting all of the memberships by UserId
    app.get("/api/memberships/users/:id", function (req, res) {
        db.Membership.findAll({
            where: {
                userId: req.params.id
            }
        }).then(function (response) {
            if (response.length === 0) {
                res.json("No Membership Found");
            }
            else {
                res.json(response);
            }
        });
    });

    // GET route for retrieving a single member
    app.get("/api/memberships/:id", function (req, res) {
        db.Membership.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (response) {
            if (response === null) {
                res.json("No Membership Found");
            }
            else {
                res.json(response);
            }
        });
    });

    // POST route for saving a new restaurant
    app.post("/api/memberships", function (req, res) {
        console.log("Route hit~!")
        db.Membership.create({
            isAdmin: req.body.isAdmin,
            isMember: req.body.isMember,
            userId: req.body.userId,
            clanId: req.body.clanId
        }).then(function (response) {
            res.json(response);
        }).catch(err => res.status(404).json(err));
    });
    // DELETE route for deleting a restaurant
    app.delete("/api/memberships/:id", function (req, res) {
        db.Membership.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (response) {
            if (response === []) {
                res.json("No Membership Found");
            } else {
                res.json(response);
            }
        });
    });

    app.delete("/api/memberships/follow/:id/:clanId",function(req,res){
      db.Membership.destroy({
        where: {
          userId: req.params.id,
          clanId: req.params.clanId
        }
      }).then(function(response){
        res.json("Destroyed");
      });
    })

    // PUT route for updating a restaurant
    app.put("/api/memberships/:id", function (req, res) {
        db.Membership.update({
            isAdmin: req.body.isAdmin,
            isMember: req.body.isMember,
            userId: req.body.userId,
            clanId: req.body.clanId
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (response) {
                res.json(response);
            });
    });
};
