const express = require('express');
const router = express.Router();
const Internship = require('../models/internship');

const states = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
    "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
    "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
    "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]

router.get("/", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("Landing page get")
    } else {
      res.render("landing", {internships, search: true});
    }
  });
});

router.get("/new", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("new page get")
    } else {
      res.render("landing", {internships: internships.sort((a,b) => b.createdAt - a.createdAt)});
    }
  });
});

router.get("/alphabetical", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("alphabetical page get")
    } else {
      res.render("landing", {internships: internships.sort((a,b) => a.company > b.company)});
    }
  });
});

router.get("/random", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("random page get")
    } else {
      res.render("landing", {internships: internships.sort(() => Math.random() - .5)});
    }
  });
});

router.get("/popular", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("popular page get")
    } else {
      res.render("landing", {internships: internships.sort((a,b) => a.popularity < b.popularity)});
    }
  });
});

router.get("/states", (req, res) => {
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("states page get")
    } else {
      res.render("states", {states});
    }
  });
});

router.get("/states/:state", (req, res) => {
  const state = req.params.state;
  Internship.find({}, (err, internships) => {
    if (err) {
      throw new Error("specific state page get")
    } else {
      res.render("landing", {internships: internships.filter(a => a.location.includes(state))});
    }
  });
});

module.exports = router;
