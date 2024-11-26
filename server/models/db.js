// models/db.js
const mongoose = require('mongoose');
const Urldb = process.env.MONGODB;  // Ensure that the MongoDB URL is correctly stored in the environment variable

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(Urldb);
    console.log('MongoDB connected:', connection.connection.host);  // Logs the host for connection success
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.stack || error.message); // More detailed error message
    process.exit(1); // Exit the process with a failure status (non-zero code)
  }
};

module.exports = connectDB;
