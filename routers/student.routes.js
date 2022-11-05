const express = require("express");
const StudentRouter = express.Router();
const upload = require("../middlewares/imageupload.middileware");
const { StudentRegister } = require("../controllers/student.controller");

StudentRouter.post(
  "/registerStudent",
  upload.single("ProfileImage"),
  StudentRegister
);

module.exports = StudentRouter;
