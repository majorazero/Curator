var db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the restaurants
    app.get("/api/restaurants", function (req, res) {
        db.Restaurant.findAll({}).then(function (response) {
            res.json(response);
        });
    });
    // GET route for getting all of the restaurants by yelp id
    app.get("/api/restaurants/:yelpid", function (req, res) {
        db.Restaurant.findAll({
            where:
            {
                yelpid: req.params.yelpid
            }
        }).then(function (response) {
            if (response === []) {
                res.json("No Restaurants Found");
            }
            else {
                res.json(response);
            }
        });
    });
    // GET route for retrieving a single restaurant
    app.get("/api/restaurants/:id", function (req, res) {
        db.Restaurant.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (response) {
            if (response === []) {
                res.json("No Restaurants Found");
            }
            else {
                res.json(response);
            }
        });
    });
    // POST route for saving a new restaurant
    app.post("/api/restaurants/new", function (req, res) {
        db.Restaurant.create({
            name: req.body.name,
            imageLink: re.body.imageLink,
            address: re.body.address,
            yelpid: req.body.yelpid
        }).then(function (response) {
            res.json(response);
        });
    });
    // DELETE route for deleting a restaurant
    app.delete("/api/restaurants/:id", function (req, res) {
        db.Restaurant.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (response) {
            if (response === []) {
                res.json("No Restaurants Found");
            }
            else {
                res.json(response);
            }
        });
    });
    // PUT route for updating a restaurant
    app.put("/api/restaurants/update", function (req, res) {
        db.Restaurant.update({
            name: req.body.name,
            imageLink: re.body.imageLink,
            address: re.body.address,
            yelpid: req.body.yelpid
        },
            {
                where: {
                    id: req.body.id
                }
            }).then(function (response) {
                res.json(response);
            });
    });
}