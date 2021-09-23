const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  code: {
    type: String,
    required: true,
    index: { unique: true }
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    default: 0,
  }}, 
  {
    timestamps: true,
  }
);

const Products = mongoose.model('Products', ProductsSchema);
module.exports = Products;