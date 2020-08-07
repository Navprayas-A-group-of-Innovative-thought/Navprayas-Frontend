//import everything here
const express = require("express");
const mongoose = require("mongoose");

//for cross origin resource sharing
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
//---------------------------------------------------------------------
// database
mongoose.connect("mongodb://localhost:27017/Navprayas-<your-name>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("database connected"));
//---------------------------------------------------------------------
//import routing here
const myRoute = require("./routes/<your-route>.route.js");

app.use("/api/", myRoute);

//---------------------------------------------------------------------
//Handle request here

const port = 5000;

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
