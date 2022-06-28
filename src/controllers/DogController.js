const axios = require('axios');
const Dog = require('../models/Dog');
const User = require('../models/User');

module.exports = {

    async findAll(req, res) {
        const dogs = await Dog.find();

        return res.status(200).json(dogs);
    },

    async store(req, res) {
        try {
            const data = req.body;
            const idUserLogged = req.userId;

            // salvando novo dog no BD
            const dog = await Dog.create(data).then(
                dog => dogId= dog.id
            );
            
            // relacionando Dog inserido ao usuario lodado
            const user = await User.updateOne(
                {   _id: idUserLogged },
                {   $push: { dogs: dogId }}
            );

            return res.status(201).json(user);

        } catch (error) {
            return res.status(400).json({ msg: 'error inserting a dog' });
        }
    }
};