const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const restaurantRoutes = require("./routes/restaurantRoutes");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/restaurants", restaurantRoutes);

connectDB(MONGO_URI);
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
