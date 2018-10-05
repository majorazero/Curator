var db = require("../models");

module.exports = function (app) {



    // // GET route for getting all of the memberships
    // app.get("/api/memberships", function (req, res) {
    //     db.Membership.findAll({}).then(function (response) {
    //         res.json(response);
    //     });
    // });

    // GET route for getting all of the memberships by groupId // if group set idpublic to false
    app.get("/api/memberships/groups/:id", function (req, res) {
        db.Membership.findAll({
            where: {
                groupId: req.params.id
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
    // GET route for getting all of the memberships by UserId
    app.get("/api/memberships/userid/:id", function (req, res) {
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
        db.Membership.create({
            isAdmin: req.body.isAdmin,
            isMember: re.body.isMember,
            userId: re.body.userId,
            groupId: req.body.groupId
        }).then(function (response) {
            res.json(response);
        });
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
    // PUT route for updating a restaurant
    app.put("/api/memberships/:id", function (req, res) {
        db.Membership.update({
            isAdmin: req.body.isAdmin,
            isMember: req.body.isMember,
            userId: req.body.userId,
            groupId: req.body.groupId
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (response) {
            res.json(response);
        });
    });
};