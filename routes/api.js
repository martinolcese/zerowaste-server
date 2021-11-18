const express = require('express');
const router = express.Router();

const controller = require('../controllers/APIController');

router.get('/products', controller.listProducts);
router.post('/products', controller.addProduct);
router.put('/products/:id', controller.updateProduct);
router.delete('/products/:id', controller.deleteProduct);

router.get('/certifications', controller.listCertifications);
router.post('/certifications', controller.addCertification);
router.put('/certifications/:id', controller.updateCertification);
router.delete('/certifications/:id', controller.deleteCertification);

router.get('/tips', controller.listTips);
router.post('/tips', controller.addTip);
router.put('/tips/:id', controller.updateTip);
router.delete('/tips/:id', controller.deleteTip);

router.get('/empresas', controller.listEmpresas);

router.get('/eventos', controller.listEventos);


module.exports = router;