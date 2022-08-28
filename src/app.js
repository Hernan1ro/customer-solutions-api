const express = require("express");
const morgan = require("morgan");
const languageRoutes = require("./routes/user_routes.js");

const app = express();

//--------------settings ---------------//

app.set("port", 4000);

//------------Middlewares--------------//
app.use(morgan("dev"));
app.use(express.json());

//----------- Routes -----------------//
app.use("/api/users", languageRoutes);

module.exports = app;
