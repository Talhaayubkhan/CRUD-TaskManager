const { customApiError } = require('../errors/customError')

const errorHandlerMiddleware = (err, req, res, next) => {
     if(err instanceof customApiError) {
          return res.status(err.statusCode).json({msg: err.message});
     }
     return res.status(500).json({ msg: "Something went Wrong, try again later" });
     

     // console.log(`error ${err.message}`);
     // const status = err.status || 500;
     // return res.status(status).json(err.message);
}


module.exports = errorHandlerMiddleware;