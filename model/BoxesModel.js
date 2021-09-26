const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoxesSchema = new Schema({
  code: {
    type: String,
    required: true,
    index: { unique: true }
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: [{
    neighboorhood:{
        type: String,
        required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  CEP: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
}]
}, 
  {
    timestamps: true,
  }
);

const Boxes = mongoose.model('Boxes', BoxesSchema);
module.exports = Boxes;