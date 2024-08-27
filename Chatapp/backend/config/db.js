const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("mongoDb conncted....");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(); // Exit the process with a failure code
  }
};

module.exports = dbConnect;
