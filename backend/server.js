const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const PORT = process.env.PORT || 5000;
const { errorMiddleware } = require("./middleware/errorMiddleware");
const authRoute = require("./routes/authRoutes");
const connectDB = require("./config/db");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api/auth", authRoute)
app.use(errorMiddleware)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

