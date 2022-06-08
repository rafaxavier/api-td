const express = require('express');
const DogController = require('./controllers/DogController');
const UserController = require('./controllers/UserController');
// const LikeController = require('./controllers/LikeController');
// const DislikeController = require('./controllers/DislikeController');


const routes = express.Router();

routes.get('/',(req, res)=>{
    return res.json("Bem-vindo a API Tindog");
});

routes.post('/users', UserController.store);

routes.post('/dogs', DogController.store);

// routes.get('/devs', DogController.index);

// routes.post('/devs/:devId/likes', LikeController.store);
// routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;