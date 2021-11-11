const PRODUCTS = require('../model/ProductsModel');
const CERTIFICATIONS = require('../model/CertificationsModel');
const TIPS = require('../model/TipsModel');

//PRODUCTS 
exports.addProduct = function (req, res, next) {
  PRODUCTS.create(req.body)
    .then((product) => {
      res.send(product);
    })
    .catch(next);
};

exports.updateProduct = function (req, res, next) {
  PRODUCTS.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      PRODUCTS.findOne({ _id: req.params.id })
        .then(product => {
          res.send(product);
        });
    })
    .catch(next);
};

exports.deleteProduct = function (req, res, next) {
  PRODUCTS.findByIdAndRemove({ _id: req.params.id })
    .then((product) => res.send(product))
    .catch(next);
};

exports.listProducts = function (req, res, next) {
  PRODUCTS.find()
    .then(products => {
      res.send(products);
    })
    .catch(next);
}

//CERTIFICATIONS 
exports.addCertification = function (req, res, next) {
  CERTIFICATIONS.create(req.body)
    .then((certification) => {
      res.send(certification);
    })
    .catch(next);
};

exports.updateCertification = function (req, res, next) {
  CERTIFICATIONS.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      CERTIFICATIONS.findOne({ _id: req.params.id })
        .then(certification => {
          res.send(certification);
        });
    })
    .catch(next);
};

exports.deleteCertification = function (req, res, next) {
  CERTIFICATIONS.findByIdAndRemove({ _id: req.params.id })
    .then((certification) => res.send(certification))
    .catch(next);
};

exports.listCertifications = function (req, res, next) {
  CERTIFICATIONS.find()
    .then(certifications => {
      res.send(certifications);
    })
    .catch(next);
}

//TIPS 
exports.addTip = function (req, res, next) {
  TIPS.create(req.body)
    .then((tip) => {
      res.send(tip);
    })
    .catch(next);
};

exports.updateTip = function (req, res, next) {
  TIPS.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      TIPS.findOne({ _id: req.params.id })
        .then(tip => {
          res.send(tip);
        });
    })
    .catch(next);
};

exports.deleteTip = function (req, res, next) {
  TIPS.findByIdAndRemove({ _id: req.params.id })
    .then((tip) => res.send(tip))
    .catch(next);
};

exports.listTips = function (req, res, next) {
  TIPS.find()
    .then(tips => {
      res.send(tips);
    })
    .catch(next);
}