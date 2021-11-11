const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CertificationsSchema = new Schema({
  code: {
    type: String,
    required: true,
    index: { unique: true }
  },
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  managerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  qtyApt: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "pendente",
  }}, 
  {
    timestamps: true,
  }
);

const Certifications = mongoose.model('Certifications', CertificationsSchema);
module.exports = Certifications;