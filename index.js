"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mailAPI = require("./routes/mail-api");

// express body parser
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        limit: "50mb",
        extended: false,
        parameterLimit: 5000,
    })
);

// use the routes specified in route folder
app.use("/api/v1", mailAPI);

const PORT = process.env.PORT || 4444;

// listen to the server
app.listen(PORT, () => {
    console.log(`server running at port: ${PORT}`);
});
