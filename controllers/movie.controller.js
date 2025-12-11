const Movie = require("../models/movie.model");
const { getMovieById } = require("../services/movies.services");


const createMovie = async(req,res) =>{
    try {
        const movie = await Movie.create(req.body);
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

const errorResponseBody = {
    success: false,
    error: {},
    data: {},
    message: 'Unable to fetch the Movie',
}

const successResponseBody = {
    success: true,
    error: {},
    data: {},
    message: 'Successfully found the movie',
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
        const response = await Movie.deleteOne({_id: movieId});
        return res.status(200).json({
            success: true,
            error: {},
            message: 'Successfully deleted movie',
            data: response,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error,
            message: 'Something went wrong',
            data:{},
        });
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie,
};
