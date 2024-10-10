const express = require("express");
const mongoose = require("mongoose");

const schoolClass = require("../models/classMongooseSchema");

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

//get a SINGLE classes
router.get("/:id", async (req, res) => {
  //all route parameters are stored on params property
  const { id } = req.params;
 

  //check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //if not, just return with status 400
    return res.status(404).json({ error: "Class ID not found!" });
  }

  //using Blog Model/Schema
  const schoolClasses = await schoolClass.findById(id);
  

  if (!schoolClasses) {
    //res back to client (browser)
    return res.status(404).json({ error: "Class not found!" });
  }
  //res to client (browser): sending back ok as well as all blogs in json format
  res.status(200).json(schoolClasses);
});

//post a NEW class, fire 2nd argument reference to blogController
router.post("/", async (req, res) => {
  //grab all properties from the request body, available due to the
  //middle ware in servjer.js app.use((express.json))
  const { className, classTeacher, studentCount, timetable } = req.body;
  console.log(req.body);
  console.log(className);

  //try to create a new Blog document inside the Blog collection of the db
  try {
    //storing the response of Blog.create inside blog, usually its the new document including the id of the doc
    //inside create an object is passed through which represents the new document to create
    const schoolClasses = await schoolClass.create({
      className,
      classTeacher,
      studentCount,
      timetable,
    });
    res.status(200).json(schoolClasses);
  } catch (error) {
    //error object has a message property on it
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
