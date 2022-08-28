const express = require("express");
// const morgan = require("morgan");
const cors = require("cors");
const languageRoutes = require("./routes/user_routes.js");

const app = express();

//--------------settings ---------------//

app.set("port", process.env.PORT || 4000);

//------------Middlewares--------------//
// app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//----------- Routes -----------------//
app.use("/api/users", languageRoutes);

module.exports = app;
