const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("Must attach a file");
  }

  let files = req.files.myfile;
  console.log(files);

  if (files.truncated === true) {
    return res.status(400).send("file too large");
  }
  if (
    !(
      files.mimetype == "image/jpeg" ||
      files.mimetype == "image/jpg" ||
      files.mimetype == "image/png"
    )
  ) {
    console.log("Image not found");
    return res.send("Please Choose Image");
  }

  let filename = files.name;
  console.log(filename);

  files.mv("./images/" + filename, function (err) {
    if (err) {
      return res.send("error");
    } else {
      return res.send("add");
    }
  });
});

module.exports = router;
