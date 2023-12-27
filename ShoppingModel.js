const mongoose = require('mongoose');

const shoppingSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Shopping', shoppingSchema);