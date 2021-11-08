const express = require("express");
const upload = require("express-fileupload");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  if (!req.files) {
    return res.send("No file found");
  }

  let file = req.files.file;
  let filename = file.name;
  console.log(filename);

  file.mv("./images/" + filename, function (err) {
    if (err) {
      return res.send("error");
    } else {
      return res.redirect("/");
    }
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
