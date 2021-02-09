const express = require("express");
const profileRouter = express.Router();
const db = require("../models");

function router() {
  profileRouter
    .route("/all")
    // GET: get list of all profiles using Promise syntax
    .get((req, res) => {
      if (req.isAuthenticated()) {
        console.log("from All route", req.user);
        db.ProfileModel.find()
          .sort({ createdOn: "1" })
          .exec()
          .then((profileDocs) => {
            res
              .header("Access-Control-Allow-Origin", "*")
              .status(200)
              .json(profileDocs);
          })
          .catch((err) => {
            res.status(422).json({
              message: "Error finding the profiles",
              error: err,
            });
          });
      } else {
        res.json("not logged in");
      }
    });
  profileRouter
    .route("/view/:profileType")
    // GET: get all (profileType) profile documents in profiles collection
    .all((req, res, next) => {
      const { profileType } = req.params;
      req.profileType = profileType;
      switch (profileType) {
        case "student":
          req.Model = db.StudentModel;
          break;
        case "athlete":
          req.Model = db.AthleteModel;
          break;
        case "cadet":
          req.Model = db.CadetModel;
          break;
      }
      next();
    })
    .get((req, res) => {
      const { profileType } = req;
      db.ProfileModel.find({ profileType: profileType }, (err, docs) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.header("Access-Control-Allow-Origin", "*").status(200).send(docs);
      });
    })
    // POST: post, create a new profile document based on req.Model
    .post((req, res) => {
      if (req.isAuthenticated()) {
        console.log(req.user);
        // add an isAuthtened on this
        const dbModel = new req.Model(req.body, { userRef: req.user });
        dbModel.save((err, doc) => {
          if (err) {
            return res.status(400).json(err);
          }
          res.status(200).json(doc);
        });
      }
    });
  return profileRouter;
}

module.exports = router();
