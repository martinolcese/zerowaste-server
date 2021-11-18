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

const Empresas = mongoose.model('Empresas', TipsSchema);
module.exports = Empresas;