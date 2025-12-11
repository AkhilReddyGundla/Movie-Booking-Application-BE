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


module.exports = {
    errorResponseBody,
    successResponseBody,
}