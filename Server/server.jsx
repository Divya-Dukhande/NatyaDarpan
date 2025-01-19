import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

{/*Creating a database*/}
mongoose.connect("mongodb+srv://ddukhande06:divya0615@cluster0.nv1w8.mongodb.net/")
.then(()=>console.log("MongoDB connected"))
.catch((error) => console.log(error));

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173/', //mentioning client side port
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "content-Type",
            'Authorization',
            'Cache-control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use((express.json));

app.listen(PORT, ()=> console.log(`server is now running on port ${PORT}`))