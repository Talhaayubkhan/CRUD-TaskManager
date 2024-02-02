


class customApiError extends Error {
     constructor(message, statusCode) {
          super(message);
          this.statusCode = statusCode;
          this.message = message || "Something went wrong, please try again!!";
     }
}


const createCustomError = (msg, statusCode) => {
     return new customApiError(msg, statusCode);
}

module.exports = {createCustomError, customApiError};