
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const port = 5000;

// routes
const categoryRoute = require("./routes/categories.js")
const productRoute = require("./routes/products.js")
const invoiceRoute = require("./routes/invoices.js")
const authRoute = require("./routes/auth.js")
const userRoute = require("./routes/users.js")

const connect = async ()=> {
    try {
        await mongoose.connect('mongodb://localhost:27017/pos-app');
        console.log('mongoose connected!');
    }
    catch (error) {
        console.error("connection error:",error.message);
    }
}

connect();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/invoices", invoiceRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})
