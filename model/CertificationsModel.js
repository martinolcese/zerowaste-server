const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CertificationsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
    index: { unique: true }
  },
  address: {
    type: String,
    required: true,
  },
  addressNumber: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  uf: {
    type: String,
    required: true,
  },
  nameResponsible: {
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
  qtyApts: {
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