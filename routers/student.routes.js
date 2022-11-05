const express = require("express");
const StudentRouter = express.Router();
const upload = require("../middlewares/imageupload.middileware");
const {
  StudentRegister,
  UploadFile,
} = require("../controllers/student.controller");

StudentRouter.post(
  "/registerStudent",
  upload.single("ProfileImage"),
  StudentRegister
);
StudentRouter.post("/uploadImage", UploadFile);

module.exports = StudentRouter;
