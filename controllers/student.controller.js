const Student = require("../models/student.model");
const {
  UploadToCloudinary,
  RemoveFromCloudinary,
} = require("../services/cloudinary");
const StudentRegister = async (req, res) => {
  try {
    const { fullName, age, grade } = req.body;
    console.log(req.file.path);
    const data = await UploadToCloudinary(req.file.path, "Profile-Image");

    const dtudentData = {
      fullName: fullName,
      age: age,
      grade: grade,
      publicID: data.public_id,
      imageUri: data.url,
    };

    const result = await Student.create(dtudentData);

    if (result) {
      return res.status(200).send({ status: true, message: "student added" });
    } else {
      return res
        .status(403)
        .send({ status: true, message: "Somthing went wrong" });
    }
  } catch (err) {
    return res.status(400).send({ status: false, message: err });
  }
};

const UploadFile = async (req, res) => {
  const { imageUri } = req.body;

  await Student.create({ imageUri: imageUri });

  return res.status(200).send({ status: true, message: "image added" });
};

module.exports = { StudentRegister, UploadFile };
