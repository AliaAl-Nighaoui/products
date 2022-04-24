const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product-route");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/products", router); 

mongoose
  .connect(
    "mongodb+srv://AliaNighaoui:sCH1PKQEZFHnvg60@cluster0.bw0up.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));