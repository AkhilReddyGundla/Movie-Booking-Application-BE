const Movie = require("../models/movie.model");


const createNewMovie = async(movieInfo) =>{
   try {
     const movie = await Movie.create(movieInfo);
     return movie;
     
   } catch (error) {
        return {
            error,
            data: "",
            statusCode: 406, 
        }
   }
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

const updateSelectedMovie = async(movieId, content)=>{
    try {
        const response = await Movie.findByIdAndUpdate(movieId, content, {new: true, runValidators: true});
        return response;
    } catch (error) {
        if(error.name == 'ValidationError'){
            let err = {};
            Object.keys(error.errors).forEach((key)=>{
                err[ket] = error.errors[key].message;
            });
            return {err, code: 422};
        }else {
            throw error;
        }
    }
}


const fetchMovies = async(filter)=>{
    try {
        const movies = await Movie.find(filter);
        return {
            data: movies,
            statusCode: 200,
        }
    } catch (error) {
        return {
            error,
            data: "",
            statusCode: 500,
        }
    }
}

module.exports = {
    createNewMovie,
    getMovieById,
    deleteSingleMovie,
    updateSelectedMovie,
    fetchMovies,
}