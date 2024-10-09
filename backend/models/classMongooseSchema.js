//mongoose allows to create models/schemas, mongodb itself is schemaless

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const classSchema = new Schema(
  {
    //first argument describes the structure respectively how the schema looks
    className: {
      type: String,
      required: true,
    },
    classTeacher: {
      type: String,
      required: true,
    },
    studentCount: {
      type: Number,
      required: true,
    },
    timetable: {
        type: String,
        required: true,
      },
  },
  {
    //second argument, other object with timestamps property
    //to create a createdAt timestamp
    timestamps: true,
  }
);

//a model applies the schema to a model to interact with a collection of that name
//this model can be imported to other files
//the collection will be build automatically in the db

module.exports = mongoose.model("Class", classSchema, "All Classes");