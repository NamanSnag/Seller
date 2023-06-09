const express = require('express');
const { verifyToken } = require('../utills/jwtAuth');
const { storeInfo } = require('../controller/sellerController');
const sellerRouter = express.Router();

sellerRouter.patch('/storeInfo', verifyToken ,storeInfo);

sellerRouter.post('/addProduct', verifyToken, addProduct);

module.exports = sellerRouter;