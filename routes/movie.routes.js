const { createMovie, deleteMovie, getMovie, updateMovie } = require("../controllers/movie.controller");
const { movieValidater } = require("../middleware/movie.middleware");

const MovieRoutes = (app)=>{
    app.post('/mba/api/v1/movies', movieValidater, createMovie);
    app.delete('/mba/api/v1/movies/:movieId', deleteMovie);
    app.get('/mba/api/v1/movies/:movieId', getMovie);
    app.patch('/mba/api/v1/movies/:movieId', updateMovie);
    app.put('/mba/api/v1/movies/:movieId', updateMovie);
}


module.exports = MovieRoutes;