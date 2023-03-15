const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  clubname: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }

},{timestamps:true})

module.exports = mongoose.model('Player', PlayerSchema)