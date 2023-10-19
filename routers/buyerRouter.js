const { getListOfSellers, getSellerCatalog, createOrder } = require('../controllers/buyerController');

const router = require('express').Router();

router.get('/list-of-sellers', getListOfSellers);

router.get('/seller-catalog/:seller_id', getSellerCatalog);

router.post('/create-order/:seller_id', createOrder);

module.exports = router;