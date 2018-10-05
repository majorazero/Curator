/**
 * Clan Router
 */

// Dependencies
// --------------------------------------------

const db = require("../models");

// Export Clan Routes
// --------------------------------------------

module.exports = (app) => {
<<<<<<< HEAD:controllers/clanRouter.js
    // Find all clans by clan id
    app.get("/api/clans/:id", (req, res) => {
        db.Clan
=======
        // Find all groups by group where isPublic is true
        app.get("/api/groups", (req, res) => {
            db.Group
            .findAll({
                where: {
                    isPublic: true
                }
            })
            .then((data) => {
                console.log(data);
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            });
        });
    // Find all groups by group id
    app.get("/api/groups/:id", (req, res) => {
        db.Group
>>>>>>> new push:controllers/groupRouter.js
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
    // Find all clans by user id
    app.get("/api/clans/users/:id", (req, res) => {
        db.Clan
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
    // Find all clans by restaurant
    app.get("/api/clans/restaurant/:id", (req, res) => {
        db.Clan
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
<<<<<<< HEAD:controllers/clanRouter.js
    // Create new clan
    app.post("/api/clans/new", (req, res) => {
        db.Clan
=======
    // Create new group
    app.post("/api/groups/new", (req, res) => {
        console.log(req.body);
        db.Group
>>>>>>> new push:controllers/groupRouter.js
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
    // Update clan
    app.put("/api/clans/:id", (req, res) => {
        db.Clan
        .update({
            name: req.body.name,
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
    // Delete clan
    app.delete("/api/clans/:id", (req, res) => {
        db.Clan
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

