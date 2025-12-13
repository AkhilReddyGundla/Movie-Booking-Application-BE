const { createNewMovie, getMovieById, deleteSingleMovie, updateSelectedMovie } = require("../services/movies.services");
const { successResponseBody, errorResponseBody } = require("../utils/responseBody");

const createMovie = async(req,res) =>{
    try {
        const response = await createNewMovie(req.body);
        successResponseBody.data = response.data;
        successResponseBody.message = 'Successfully created a new movie';
        return res.status(201).json(successResponseBody);
    } catch (error) {
        errorResponseBody.message = 'Something went wrong';
        errorResponseBody.error = error;
        return res.status(500).json(errorResponseBody);        
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

const updateMovie = async(req,res)=>{
   try {
    const content = req.body;
    const movieId = req.params.movieId;
    const response = await updateSelectedMovie(movieId, content);
    successResponseBody.data = response.data;
    successResponseBody.message = 'Updated movie';
    return res.status(200).json(successResponseBody);
   } catch (error) {
    errorResponseBody.error = error;
    errorResponseBody.message = 'Unable to update movie details';
    return res.status(500).json(errorResponseBody);
   }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie,
    updateMovie,
};