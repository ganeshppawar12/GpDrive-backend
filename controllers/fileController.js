const File = require('../models/File');

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file received' });
    }

    const mimeType = req.file.mimetype || 'application/octet-stream';
    const fileType = mimeType.split('/')[0] || 'unknown';

    const file = new File({
      filename: req.file.originalname,
      url: req.file.path,
      size: req.file.size,
      type: fileType, 
      uploadedBy: req.user.id
    });

    await file.save();

    res.status(201).json({ message: 'File uploaded successfully', file });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find({ uploadedBy: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch files", error: err });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const fileId = req.params.id;
    const file = await File.findByIdAndDelete(fileId);
    if (!file) return res.status(404).json({ message: 'File not found' });
    res.json({ message: 'File deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.renameFile = async (req, res) => {
  try {
    const fileId = req.params.id;
    const { newName } = req.body;
    const file = await File.findByIdAndUpdate(
      fileId,
      { filename: newName },
      { new: true }
    );
    if (!file) return res.status(404).json({ message: 'File not found' });
    res.json({ message: 'File renamed', file });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

