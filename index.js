const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/files', require('./routes/file'));
// app.get('/', (req, res) => {
//   res.send('Hello from your Express.js server!');
// });
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT , () => console.log("Server running on 5000")))
  .catch(err => console.log(err));
