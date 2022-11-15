// require start
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// require end

// middlewears start
app.use(cors());
app.use(express.json());
// middlewears end

// basic setup start

app.get("/", (req, res) => {
  res.send("Doctors Portal is Running");
});

app.listen(port, () => {
  console.log(`Doctors Portal is Running on Port ${port}`);
});

// basic setup end
