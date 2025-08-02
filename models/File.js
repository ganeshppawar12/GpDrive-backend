const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  url: String,
  size: Number,
   type: String,
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('File', fileSchema);
