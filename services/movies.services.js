const Movie = require("../models/movie.model");

const getMovieById = async (movieId) => {
    const movie = await Movie.findById(movieId);
    if(!movie){
        return{
            error: "No Movie is found for the corresponding Id",
            data: {},
            statusCode: 404,
        }
    }
    return {
        error: "",
        data: movie,
        statusCode: 200,
    };
}

module.exports = {
    getMovieById,
}