const express = require('express');
const DogController = require('../controllers/DogController');
const UserController = require('../controllers/UserController');
// const LikeController = require('./controllers/LikeController');
// const DislikeController = require('./controllers/DislikeController');


const dogs = express.Router();

dogs.get('/dogs',(req, res)=>{
    return res.json("Bem-vindo a dogs");
});

// dogs.post('/users', UserController.store);
// dogs.get('/users', UserController.index);


// dogs.post('/dogs', DogController.store);

// dogs.get('/devs', DogController.index);

// dogs.post('/devs/:devId/likes', LikeController.store);
// dogs.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = dogs;