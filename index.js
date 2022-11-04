require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose   = require('mongoose');
// const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
const port = process.env.PORT || 8080;



const startServer = async () => {

    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/`);

        app.listen(port, () => console.log(`Server is running at port ${port}`));

    } catch (err) {
        console.log("Error in starting server: ", err);
    }

};

startServer();


// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


// app.listen(port, console.log(`Listening on port ${port}...`));
