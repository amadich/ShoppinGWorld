require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require("./models/db");
const port = 3000;



app.use(cors());
app.use(express.json());
// Connect to MongoDB
connectDB();

// Define routes
app.use("/api", require("./routes/Register.route"));
app.use("/api" , require("./routes/Dashboard/Showallusers.route"));
app.use("/api" , require("./routes/Dashboard/AddProduct.route"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
