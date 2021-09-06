const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdutcSchema = new Schema({
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

const Product = mongoose.model('Product', ProdutcSchema);
module.exports = Product;