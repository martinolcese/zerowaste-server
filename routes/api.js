const express = require('express');
const router = express.Router();

const controller = require('../controllers/APIController');

router.get('/products', controller.listProducts);
router.post('/products', controller.addProduct);
router.put('/products/:id', controller.updateProduct);
router.delete('/products/:id', controller.deleteProduct);

router.get('/cards', controller.listCards);
router.get('/cards/:number', controller.getCard);
router.post('/cards', controller.createCard);
router.put('/cards/:number', controller.updateCard);

module.exports = router;