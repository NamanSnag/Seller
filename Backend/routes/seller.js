const express = require('express');
const { verifyToken } = require('../utills/jwtAuth');
const { storeInfo, addProduct, sellerInventory } = require('../controller/sellerController');
const sellerRouter = express.Router();

sellerRouter.get('/:id', sellerInventory);

sellerRouter.patch('/storeInfo', verifyToken ,storeInfo);

sellerRouter.post('/addProduct', verifyToken, addProduct);

module.exports = sellerRouter;