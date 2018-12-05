const mongoose = require('mongoose');

const internshipSchema = mongoose.Schema({
  company : {
    type: String,
    required: true
  },
  location: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  id: {
    type: Number,
    required: true
  },
  popularity: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("Internship", internshipSchema);
