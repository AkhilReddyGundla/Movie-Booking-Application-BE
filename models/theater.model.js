const mongoose = require('mongoose');

const {Schema} = mongoose;

const theaterSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    address: String,
},{timestamps: true});

const Theater = mongoose.model('Theater',theaterSchema);

module.exports = Theater;