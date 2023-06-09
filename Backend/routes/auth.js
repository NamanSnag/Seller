const express = require('express');
const { sellerRegistration, sellerSignin } =  require('../controller/authController');
const authRouter = express.Router();

authRouter.post('/seller/register', sellerRegistration);

authRouter.post('/seller/login', sellerSignin);

module.exports = authRouter;
