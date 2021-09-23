const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardsSchema = new Schema({
  number: {
    type: Number,
    required: true,
    index: { unique: true }
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      required: true,
    },
    quantity: {
      type: Number,
      default: 1
    }
  }]
},
  {
    timestamps: true,
  }
);

const Cards = mongoose.model('Cards', CardsSchema);
module.exports = Cards;