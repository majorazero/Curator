/**
 * Rating Router
 */

// Dependencies
// ----------------------------------------

const db = require("../models");

// Export Rating Router
// ----------------------------------------

module.exports = (app) => {
    // Find all ratings by user id
    app.get("/api/ratings/users/:id", (req, res) => {
        db.Rating
        .findAll({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
    // Find all ratings clans id
    app.get("/api/ratings/clans/:id", (req, res) => {
        db.Rating
        .findAll({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
    // Find all ratings by restaurant id
    app.get("/api/ratings/restaurants/:id", (req, res) => {
        db.Rating
        .findAll({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
    //
    app.get("/api/ratings/checkExist/:clanId/:yelpId", (req,res) => {
      console.log(req.params.clanId,req.params.yelpId);
      db.Rating.findAll({
        where: {
          clanId: req.params.clanId
        },
        include: [
          {model: db.Restaurant, where: {yelpId: req.params.yelpId}}
        ]
      }).then(function(data){
        res.json(data);
      });
    });

    // Create a rating
    app.post("/api/ratings", (req, res) => {
        db.Rating
        .create({
            rating: req.body.rating,
            comment: req.body.comment,
            userId: req.body.userId,
            clanId: req.body.clanId,
            restaurantId: req.body.restaurantId
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });

    //
    app.post("/api/ratings/groupRest", (req, res) => {
      db.Rating.findAll({
        where: {
          clanId: req.body.clanId
        },
        include: [
          {model: db.Restaurant},
          {model: db.Clan}
        ],
        order: [
          ["restaurantId","ASC"]
        ]
      }).then(function(data){
        res.json(data);
      });
    });

    // Get groups average rating on restaurant
    app.post("/api/ratings/groupRestAverage", (req, res) => {
        db.Rating
        .findAll({
            where: {
              clanId: req.body.clanId
            },
            include: [
             {
               model: db.Restaurant,
               attributes: [
                   "id",
                   "name",
                   "imageLink",
                   "address",
                   "price",
                   "yelpId",
                   [db.sequelize.fn("AVG", db.sequelize.col("rating")), "averageRating"]
               ]
             }
           ]
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });

    // Update rating
    app.put("/api/ratings/:id", (req, res) => {
        db.Rating
        .update({
            rating: req.body.rating,
            comment: req.body.comment,
            userId: req.body.userId,
            clansId: req.body.clansId,
            restaurantId: req.body.restaurantId
        }, {
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
    // Delete rating
    app.delete("/api/ratings/:id", (req, res) => {
        db.Rating
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
};
