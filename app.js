const express = require('express');
const app = express();
const routes = require("./routes/tasks");
const connectDB = require('./db/connect');
const notfound = require('./middleware/notFound');
const errorHandler = require("./middleware/errorHandler");
require('dotenv').config();

// middlewares
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use("/api/v1/tasks", routes);


app.use(notfound);
app.use(errorHandler);


const port = 3000;
const start = async () =>{
     try {
          await connectDB(process.env.MONGO_URI);
          app.listen(port, () => {
               console.log(`Server is listening on ${port}`);
          });
     } catch (error) {
          console.log(error);
     }
}

start();
