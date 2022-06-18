const express = require('express');
const AuthController = require('../controllers/authController');



const auth = express.Router();

auth.post('/auth/register', AuthController.register);

auth.post('/auth/authenticate', AuthController.authenticate);


module.exports = auth;