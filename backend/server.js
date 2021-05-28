const express = require("express");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors')
const app = express();
const vetSchema = require("./models/vet.js");
const profileSchema = require("./models/profile.js");

app.use(cors())

const port = 2300;

app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

// database connection
const dbURI =
  "mongodb+srv://user:user@vetswiper.adugw.mongodb.net/ezyvet?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(port);
    console.log(`Server open on localhost:${port}`);
  })
  .catch((err) => console.log(err));
const Vet = mongoose.model("vet", vetSchema);
const Profile = mongoose.model("profile", profileSchema);

app.get("/getvet", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    console.log("Got request");
    let vet = await Vet.find({});
    console.log(vet);
    res.json(vet);
  } catch (e) {
    console.log(e);
  }
});

app.get("/getprofiles", async (req, res) => {
  const id = req.query.id;
  console.log(id);

  try {
    console.log("Got /getprofile request!");
    let vet = await Profile.find({ works_at: id });
    //console.log(vet)
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.json(vet);
  } catch (e) {
    console.log(e);
  }
});
/*
app.listen(port, () => {
  console.log(`VetSwiper Backend listening at http://localhost:${port}`)
})
*/
