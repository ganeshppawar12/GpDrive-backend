const express = require('express');
const router = express.Router();
const { uploadFile, getFiles,deleteFile ,renameFile } = require('../controllers/fileController');
const auth = require('../middlewares/authMiddleware');

const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const upload = multer({ storage });

router.post('/upload', auth, upload.single('file'), uploadFile);
router.get('/', auth, getFiles);
router.delete('/:id', auth, deleteFile);
router.put('/:id/rename', auth, renameFile);


module.exports = router;
