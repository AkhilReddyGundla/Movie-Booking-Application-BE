const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieSchema = new Schema({
    tile: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    casts: {
        type: [String],
        required: true,
    },
    trailerURL: {
        type: String,
    },
    language: {
        type: [String],
        required: true,
    },
    format:{
        type: [String],
        required: true,
    },
    releaseDate: {
        type: String,
        required: true,
    },
    jorneral : {
        type: String,
        required: String,
    },
    director: {
        type: String,
        required: true,
    },
    realesedStatus: {
        type: Boolean,
        required : true,
        default : false,
    },
},{timeseries: true});



const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;