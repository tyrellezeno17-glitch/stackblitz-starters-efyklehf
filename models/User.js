const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true }, // stored as hash, never plain txt
    createdAt: {type: Date, default: Date.now }

});

module.exports = mongoose.model('User', userSchema);