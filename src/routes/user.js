const express = require('express');
const DogController = require('../controllers/DogController');
const UserController = require('../controllers/UserController');
// const LikeController = require('./controllers/LikeController');
// const DislikeController = require('./controllers/DislikeController');


const auth = express.Router();

auth.get('/users',(req, res)=>{
    return res.json("Bem-vindo a users");
});

// auth.post('/users', UserController.store);
// auth.get('/users', UserController.index);


// auth.post('/dogs', DogController.store);

// auth.get('/devs', DogController.index);

// auth.post('/devs/:devId/likes', LikeController.store);
// auth.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = auth;