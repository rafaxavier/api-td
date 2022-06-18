const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    dogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Dog',    //referenciando a esse model
    }]
},{
    timestamps: true,
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password , 10);
    this.password = hash;

    next();
})

module.exports = model('User', UserSchema );