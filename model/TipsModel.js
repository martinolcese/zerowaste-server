const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipsSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  //images should be 75x60px
  image: {
    type: String,
    required: true,
  }}, 
  {
    timestamps: true,
  }
);

const Tips = mongoose.model('Tips', TipsSchema);
module.exports = Tips;