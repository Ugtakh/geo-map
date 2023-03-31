const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("MONGODB connected");
  } catch (error) {
    console.log("MONGO_DB_ERR", err);
  }
};

module.exports = connectDB;
