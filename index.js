const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');

const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie.routes');

env.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

MovieRoutes(app);

app.listen(PORT, async()=>{
    console.log(`Server is running at ${PORT}`);
    
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect MongoDB", error);
    }
})