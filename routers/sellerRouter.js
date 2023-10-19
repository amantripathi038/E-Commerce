const { createCatalog, getOrders } = require('../controllers/sellerController');

const router = require('express').Router();

router.get('/orders', getOrders);

router.post('/create-catalog', createCatalog);

module.exports = router;