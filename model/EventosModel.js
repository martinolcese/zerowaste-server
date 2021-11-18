const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipsSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }}, 
  {
    timestamps: true,
  }
);

const Eventos = mongoose.model('Eventos', TipsSchema);
module.exports = Eventos;