const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(cors());

app.listen(4000, () => {
  console.log("listening on port 4000");
});
const profile = multer.diskStorage({
  destination: "userlist/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: profile,
});
app.use("/uploads", upload.single("pic"), (req, res) => {});
