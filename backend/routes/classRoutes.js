const express = require("express");

const schoolClass = require("../models/classMongooseSchema")

//create an instance of express router
const router = express.Router();

//router handler, supports reacting to specific requests
//if a request comes in the function (2. argument) will be fired

//get ALL classes
router.get("/", async (req, res) => {
  //using Class Model/Schema
  const schoolClasses = await schoolClass.find({}).sort({ createdAt: -1 });

  //res to client (browser): sending back ok as well as all blogs in json format
  res.status(200).json(schoolClasses);
});

module.exports = router;
