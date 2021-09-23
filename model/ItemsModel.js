const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  }}, 
  {
    timestamps: true,
  }
);

const Items = mongoose.model('Items', ItemsSchema);
module.exports = Items;