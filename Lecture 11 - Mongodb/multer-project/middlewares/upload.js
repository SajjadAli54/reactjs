const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.mimetype === "application/pdf")
      return callback(null, "uploads/pdfs");
    if (file.mimetype.startsWith("image/"))
      return callback(null, "uploads/images");

    callback(null, "uploads/others");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
