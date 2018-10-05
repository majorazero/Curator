/**
 * Group Router
 */

// Dependencies
// --------------------------------------------

const db = require("../models");

// Export Group Routes
// --------------------------------------------

module.exports = (app) => {
    // Find all groups by group id
    app.get("/api/groups/:id", (req, res) => {
        db.Group
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
    // Find all groups by user id
    app.get("/api/groups/users/:id", (req, res) => {
        db.Group
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
    // Find all groups by restaurant
    app.get("/api/groups/restaurant/:id", (req, res) => {
        db.Group
        .findAll({
            where: {
                id: req.parms.id
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
    // Create new group
    app.post("/api/groups/new", (req, res) => {
        db.Group
        .create({
            name: req.body.name,
            location: req.body.location,
            isPublic: req.body.isPublic
        })
        .then(() => {
            res.status(200);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
    // Update group
    app.put("/api/groups/:id", (req, res) => {
        db.Group
        .update({
            name: req.body.nam,
            location: req.body.location,
            isPublic: req.body.isPublic
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
    // Delete group
    app.delete("/api/groups/:id", (req, res) => {
        db.Group
        .destroy({
            where: {
                id: req.parms.id
            }
        })
        .then(() => {
            res.status(200);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
};

