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

app.use("/", require("./router/image_router"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
