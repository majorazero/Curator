/**
 * Clan Router
 */

// Dependencies
// --------------------------------------------

const db = require("../models");
const crypto = require("crypto");

// Export Clan Routes
// --------------------------------------------

module.exports = (app) => {
    // Find all clans by isPublic true
    app.get("/api/clans/public", (req, res) => {
        db.Clan
        .findAll({
            where: {
                isPublic: true
            }
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    });
    // Find all clans by clan id
    app.get("/api/clans/:id", (req, res) => {
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
    // Create new clan
    app.post("/api/clans/new", (req, res) => {
        db.Clan
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

    //encrypt clan id
    app.post("/api/encrypt", function(req,res) {
      //crpyto
      let mykey = crypto.createCipher("aes-128-cbc","inviteCode");
      let token = mykey.update(req.body.clanId,'utf8','hex');
      token += mykey.final('hex');
      res.json(token);
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
        .then((data) => {
            res.json(data);
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
