const badRequestResponse = {
    success: false,
    error: "",
    data: {},
    message: "Check movie details",
}

const movieValidater = async(req, res, next)=>{
    if(!req.body.title){
        badRequestResponse.error = "The name of the movie is required";
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.description){
        badRequestResponse.error = "Movie description is requried";
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.casts || req.body.casts.length === 0){
        badRequestResponse.error = "Casts are required";
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.language || req.body.language.length === 0){
        badRequestResponse.error = "Language(s) of the movie are required";
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.format || req.body.format.length === 0){
        badRequestResponse.error = "Format(s) of the movie are required";
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.releaseDate){
        badRequestResponse.error = "Release date of the movie is required";
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.jorneral){
        badRequestResponse.error = "Jorneral of the movie is required";
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.director){
        badRequestResponse.error = "Director of the movie is required";
        return res.status(400).json(badRequestResponse);
    }

    if(req.body.realesedStatus === undefined){
        badRequestResponse.error = "Realesed status of the movie is required";
        return res.status(400).json(badRequestResponse);
    }

    next();
}


module.exports = {
    movieValidater,
}