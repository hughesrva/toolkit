const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

console.log("express running");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// connects to Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/toolkit")
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

mongoose.set("debug", true);

app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.html"));
});

// starts API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
