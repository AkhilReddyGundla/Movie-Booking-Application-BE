const Movie = require("../models/movie.model");


const createNewMovie = async(movieInfo) =>{
    const movie = await Movie.create(movieInfo);
    return movie;
}

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

const deleteSingleMovie = async(movieId)=>{
    const response = await Movie.findByIdAndDelete(movieId);
    return response;
}

module.exports = {
    createNewMovie,
    getMovieById,
    deleteSingleMovie,
}