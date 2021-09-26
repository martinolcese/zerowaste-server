const PRODUCTS = require('../model/ProductsModel');
const ITEMS = require('../model/ItemsModel');
const CARDS = require('../model/CardsModel');
const BOXES = require('../model/BoxesModel');

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

exports.addBox = function (req, res, next) {
  BOXES.create(req.body)
    .then((box) => {
      res.send(box);
    })
    .catch(next);
};

exports.updateBox = function (req, res, next) {
  BOXES.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      BOXES.findOne({ _id: req.params.id })
        .then(box => {
          res.send(box);
        });
    })
    .catch(next);
};

exports.deleteBox = function (req, res, next) {
  BOXES.findByIdAndRemove({ _id: req.params.id })
    .then((box) => res.send(box))
    .catch(next);
};

exports.listBoxes = function (req, res, next) {
  BOXES.find()
    .then(boxes => {
      res.send(boxes);
    })
    .catch(next);
}

exports.listItems = function (req, res, next) {
  ITEMS.find()
    .then(items => {
      res.send(items);
    })
    .catch(next);
}

exports.createItem = function (req, res, next) {
  ITEMS.create(req.body)
    .then((items) => {
      res.send(items);
    })
    .catch(next);
};

exports.createCard = function (req, res, next) {
  CARDS.create(req.body)
    .then((card) => {
      res.send(card);
    })
    .catch(next);
};

exports.updateCard = function (req, res, next) {
  CARDS.findOneAndUpdate({ number: req.params.number }, req.body)
    .then(() => {
      CARDS.findOne({ number: req.params.number })
        .then(card => {
          res.send(card);
        });
    })
    .catch(next);
};

exports.listCards = function (req, res, next) {
  CARDS.find()
    .then(cards => {
      res.send(cards);
    })
    .catch(next);
}

exports.getCard = function (req, res, next) {
  CARDS.find({ number: req.params.number })
    .populate("items.product")
    .then((card) => {
      res.send(card[0]);
    })
    .catch(next);
};