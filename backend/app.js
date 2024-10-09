//require dotenv and directly invoke config method on it to attach the
//environment variable to the process object
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const classRoutes = require("./routes/classRoutes");
const port = process.env.PORT;

const app = express();

//---------MIDDLEWARE--------------------------------
//everything between request to and response from the server

app.use(cors()); // This allows requests from all origins, or you can configure it for specific origins


app.use(express.json());
//necessary to access the request objects of the routes; looks if there is any
//body to the request coming in, if yes it is parsing and attaching it to the request object

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//grabs all different routes attached to the Router instance via the variable classRoutes and
//defined in the blogRoutes.js file; first argument: classRoutes fired only when it comes to the specific path
app.use("/api/classes", classRoutes);

//-----------------------------------------
//-------------DATABASE--------------------

//connect to data base, it's async and therefore it returns a promise
const startServer = async () => {
  try {
    //conection attempt to MongoDB
    await mongoose.connect(process.env.MONGO_URL);

    //if connection successful, start the server

    app.listen(port, () => {
      console.log(`Connected to DB and listening on port: ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect to DB:", error);
    process.exit(1);
  }
};
startServer();