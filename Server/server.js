// PACKAGES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

// FILES
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes")


// DOTENV
dotenv.config();

// MONGODB CONNECTION
connectDB();

// REST OBJECT
const app = express();

// MIDDLEWARES
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Authorization', 'Content-Type'],
};
app.use(cors(corsOptions));
app.use(cookieParser()); // TO PARSE COOKIE
app.use(express.json());
app.use(morgan("dev")); // TO HAVE CONSOLE LOGS SUCCESS AND ERROR


// MAIN ROUTE
app.get("", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Natya Darpan!!"
    });
});

// OTHER ROUTES
app.use("/api/v1/auth", userRoutes)
app.use("/api/v1/admin", adminRoutes)
// const response = await axios.post("http://localhost:8080/api/v1/auth/register", { username, email, password }); frontend req

// PORT
const PORT = process.env.PORT || 8080;

// LISTEN
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`.bgGreen.white);
})