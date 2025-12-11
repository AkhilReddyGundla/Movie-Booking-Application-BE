const Movie = require("../models/movie.model");
const { createNewMovie, getMovieById, deleteSingleMovie } = require("../services/movies.services");
const { successResponseBody, errorResponseBody } = require("../utils/responseBody");

const createMovie = async(req,res) =>{
    try {
        const movie = await createNewMovie(req.body);
        return res.status(201).json({
            success: true,
            error: {},
            data: movie,
            message: 'Successfully created a new movie',
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error,
            data:{},
            message: 'Sonething went wrong',
        });        
    }
}

const getMovie = async(req,res) =>{
    try {
        const movieId = req.params.movieId;
        const response = await getMovieById(movieId);
        
        if(response.error){
            errorResponseBody.error = response.error;
            return res.status(response.statusCode).json(errorResponseBody);
        }
        successResponseBody.success = true;
        successResponseBody.data = response.data;
        successResponseBody.message = "Found movie";
        return res.status(response.statusCode).json(successResponseBody);
    } catch (error) {
        errorResponseBody.error = error;
        console.log(error)
        return res.status(500).json(errorResponseBody);
    }

}


const deleteMovie = async(req,res) =>{
    try {
        const movieId = req.params.movieId;
        const response = await deleteSingleMovie(movieId);
        successResponseBody.message = 'Successfully deleted movie';
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        errorResponseBody.message = 'Something went wrong';
        errorResponseBody.error = error;
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie,
};
