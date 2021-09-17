const express = require('express');
const router = express.Router();

const controller = require('../controllers/APIController');

router.get('/products', controller.listProducts);
router.post('/products', controller.addProduct);
router.put('/products/:id', controller.updateProduct);
router.delete('/products/:id', controller.deleteProduct);

module.exports = router;