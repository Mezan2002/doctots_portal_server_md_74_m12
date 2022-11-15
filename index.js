// require start
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// require end

// middlewears start
app.use(cors());
app.use(express.json());
// middlewears end

// mongo DB setup start
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2ahck7i.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// mongo DB run function start
const run = async () => {
  try {
    // collctions start
    const appointmentOptionsCollection = client
      .db("doctorsPortal")
      .collection("appointmentOptions");
    // collctions end

    // get all appointment options API start
    app.get("/appointmentOptions", async (req, res) => {
      const query = {};
      const cursor = appointmentOptionsCollection.find(query);
      const appointmentOptions = await cursor.toArray();
      res.send(appointmentOptions);
    });
    // get all appointment options API end
  } finally {
  }
};

run().catch((error) => console.log(error));

// mongo DB run function end

console.log(uri);
// mongo DB setup end

// basic setup start

app.get("/", (req, res) => {
  res.send("Doctors Portal is Running");
});

app.listen(port, () => {
  console.log(`Doctors Portal is Running on Port ${port}`);
});

// basic setup end
