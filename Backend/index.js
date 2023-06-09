const express = require('express');
require('dotenv').config();
require('./config/DB/mongoose');

const port = process.env.PORT || 8080;
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse cookies
app.use(cookieParser());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes'));

// Serve static files for production
app.use(express.static(path.join(__dirname, "./client/build")));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const message = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: message,
    stack: err.stack
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});