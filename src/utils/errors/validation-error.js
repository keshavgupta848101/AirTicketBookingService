const { StatusCodes } = require('http-status-codes');
class ValidationError extends Error {
    constructor(error) {
        super();
        let explaination = [];

        error.error.forEach(element => {
            explaination.push(element.message);
        });
        this.name = 'ValidationError';
        this.message = 'Not able to validate the data sent in the request';
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = ValidationError;