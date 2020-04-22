const express = require("express");
const mongoose = require("mongoose");
const items = require("./routes/api/items");
const app = express();

// bodyparser middlewhar

app.use(express.json());

//db config

const db = require("./config/keys").mongoURI;

//connect to mongo

mongoose
  .connect(db)
  .then(() => console.log("mogodb connected"))
  .catch((err) => console.log(err));

// use routes

app.use("/api/items", items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
