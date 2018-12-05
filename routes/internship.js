const express = require('express');
const router = express.Router();
const Internship = require('../models/internship');

function countMyself() {
    // Check to see if the counter has been initialized
    if ( typeof countMyself.counter == 'undefined' ) {
        // It has not... perform the initialization
        countMyself.counter = 0;
    }

    // Do something stupid to indicate the value
    ++countMyself.counter;

    return countMyself.counter;
}

router.get("/add", (req, res) => {
  res.render("add");
});

//Create Internship Opportunity
router.post("/add", (req, res) => {
  //creates new object
  var newInternship = new Internship({
    company: req.body.company,
    location: [req.body.location],
    id: countMyself()
  });
  //saves object to db
  newInternship.save((err) => {
    if(err){
      throw new Error("Failed to make newInternship");
    }
  })
  // redirects to home page after
  res.redirect("/");
});

router.post("/inc", (req, res) => {
  var name = req.body.company.slice(5);
  console.log(name);
  Internship.findOne({company: name}, function(err, internship) {
    internship.popularity = internship.popularity + 1;

    internship.save(function(err){
      if (err){
          throw new Error("Failed to increase popularity");
      }
    })

  })
})

module.exports = router;
