const { createMovie } = require("../controllers/movie.controller");


const MovieRoutes = (app)=>{
    app.post('/mba/api/v1/movies', createMovie);
}


module.exports = MovieRoutes;