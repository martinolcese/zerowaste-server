const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  tip:{
    type: String,
    required: true,
  },
  info_chart: {
    type: String,
    required: true,
  },
  season: {
    option1: {
      fruit_type: {
        type: String,
        required: true,
      },
      period: {
        type: String,
        required: true,
      },
    },
    option2: {
      fruit_type: {
        type: String,
        required: true,
      },
      period: {
        type: String,
        required: true,
      },
    },
  },
  misc: {
    item1: {
      type: String,
      required: true,
    },
    item2: {
      type: String,
      required: false,
    },
    item3: {
      type: String,
      required: false,
    },
  },




},
  {
    timestamps: true,
  }
);

const Products = mongoose.model('Products', ProductsSchema);
module.exports = Products;