const axios = require('axios');
const User = require('../models/User');

module.exports = {

    async findAll(req, res){
        const users = await User.find().populate('dogs');

        // const { user } = req.headers;

        // const loggedUser = await User.findById( user );

        // // const users = await Dev.find({
        // //     $and: [
        // //         { _id: {$ne: user} },  //not equals , não trazer user == ao user logado
        // //         { _id: {$nin: loggedDev.likes} },  // not in, trás users exceto os da lista de likes
        // //         { _id: {$nin: loggedDev.dislikes} }, //  || , trás users exceto os da lista de dislikes
        // //     ]
        // // });

        return res.status(200).json(users);
    },

    async findOne(req, res){

        const id = req.params.userId;

        const user = await User.findById(id);

        return res.status(200).json(user);
    },


};