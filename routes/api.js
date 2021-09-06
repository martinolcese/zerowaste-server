const express = require('express');
const router = express.Router();

const controller = require('../controllers/APIController');

router.get('/teste', controller.test);

router.get('/products', controller.listProducts);
router.post('/product', controller.addProduct);
router.put('/product/:id', controller.updateProduct);
router.delete('/product/:id', controller.deleteProduct);

module.exports = router;