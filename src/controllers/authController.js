const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(userId = {}) {
    return jwt.sign({ id: userId }, authConfig.secret, {
        expiresIn: 86400,
    });
}

module.exports = {
    async register(req, res) {
        try {
            const data = req.body;
            const userExists = await User.findOne({ email: data.email });

            if (userExists) {
                return res.status(400).json({ msg: 'e-mail already exists' });
            }

            const user = await User.create(data);

            user.password = undefined;

            return res.status(201).json({ user, token: generateToken(user.id) });

        } catch (error) {
            return res.status(400).json({ msg: 'error creating a user' });
        }
    },

    async authenticate(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(404).json({ msg: 'user not found' });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ msg: 'Invalid password' });
        }

        user.password = undefined;

        return res.send({ user, token: generateToken(user.id) });
    }
};