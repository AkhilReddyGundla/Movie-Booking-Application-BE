const Theater = require("../models/theater.model")

const createTheater = async(theaterInfo)=>{
    try {
        const theater = Theater.create(theaterInfo);
        return {
            data: theater,
            statusCode: 200,
            error: "",
            message: "Theater created successfully",
        }
    } catch (error) {
        return {
            data: "",
            statusCode: 401,
            error: error,
            message: "Unable to create theater",
        }
    }
}

const updateTheater = async(theaterInfo)=>{
    try {
        const theaterId = theaterInfo.theaterId;
        const content = theaterInfo.content;
        const theater = await Theater.findByIdAndUpdate(theaterId, content, {new: true, runValidators: true});
        return {
            data: theater,
            statusCode: 200,
            error: "",
            message: "Theater updated successfully",
        }
    } catch (error) {
        return {
            data: "",
            statusCode: 401,
            error: error,
            message: "Unable to update theater",
        }
    }
}

const getTheaterByID = async(theaterId)=>{
    try {
        const theater = await Theater.findById(theaterId);
        if(!theater){
            return {
                data: "",
                statusCode: 404,
                error: "No theater found for the corresponding Id",
                message: "Unable to find theater",
            }
        }
        return {
            data: theater,
            statusCode: 200,
            error: "",
            message: "Theater found successfully",
        }
    } catch (error) {
        return {
            data: "",
            statusCode: 401,
            error: error,
            message: "Unable to find theater",
        }
    }
}

const filterTheaters = async(filter)=>{
    try {
        const theaters = await Theater.find(filter);
        return {
            data: theaters,
            statusCode: 200,
            error: "",
            message: "Theaters found successfully",
        }
    } catch (error) {
        return {
            data: "",
            statusCode: 401,
            error: error,
            message: "Unable to find theaters",
        }
    }
} 

const deleteTheater = async(theaterId)=>{
    try {
        const response = await Theater.findByIdAndDelete(theaterId);
        return response;
    } catch (error) {
        throw error;
    }
} 

module.exports = {
    createTheater,
    updateTheater,
    getTheaterByID,
    filterTheaters,
    deleteTheater,
}