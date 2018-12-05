const express = require('express');
const router = express.Router();
const Internship = require('../models/internship');

router.get("/new", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("api new")
    } else {
      res.json(internships.sort((a,b) => b.createdAt - a.createdAt));
    }
  });
});

router.get("/popular", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("api popular")
    } else {
      res.json(internships.sort((a,b) => a.popularity > b.popularity));
    }
  });
});

router.get("/popular/:amount", (req, res) => {
  var amount = parseInt(req.params.amount);
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("api popular amount")
    } else {
      res.json(internships.sort((a,b) => a.popularity < b.popularity).slice(0,amount));
    }
  });
});

router.get("/state/:state", (req, res) => {
  const state = req.params.state;
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("api state")
    } else {
      res.json(internships.filter(a => a.location.includes(state)));
    }
  });
});

router.get("/all", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("api all")
    } else {
      res.json(internships);
    }
  });
});



module.exports = router;
