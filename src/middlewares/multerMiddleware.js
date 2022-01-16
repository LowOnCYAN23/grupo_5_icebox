const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './Public/Images/profileImages');
  },
  filename: (req, file, cb) => {
    let imageName = `${Date.now()} _img${path.extname(file.originalname)}`;
    cb(null, imageName);
  },
});
const uploadFile = multer({ storage });

module.exports = uploadFile;
