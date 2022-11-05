const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  age: {
    type: Number,
  },
  grade: {
    type: Number,
  },
  publicID: {
    type: String,
  },
  imageUri: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
