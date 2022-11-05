const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
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
