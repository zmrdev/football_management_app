const mongoose = require('mongoose')

const ClubSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    logo: {
      type: String,
    required: true
    }
    
},{timestamps:true})

module.exports = mongoose.model('Club', ClubSchema)