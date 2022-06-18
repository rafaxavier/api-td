const {Schema, model} = require('mongoose');

const DogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    Weight: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dog',    //referenciando a esse model
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dog',      //referenciando a esse model
    }],
},{
    timestamps: true,
});

module.exports = model('Dog', DogSchema);