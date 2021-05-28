const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const app = express()
const vetSchema = require('./models/vet.js')
const profileSchema = require('./models/profile.js')

const port = 3000

app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home')
})

// database connection
const dbURI = 'mongodb://localhost:27017/ezyvet'
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {app.listen(3000); console.log('Server open on localhost:3000')})
  .catch((err) => console.log(err))
const Vet = mongoose.model('vet', vetSchema)
const Profile = mongoose.model('profile', profileSchema)

app.get('/getvet', async (req, res) => {
  try {
    console.log("Got request")
    let vet = await Vet.find({});
    console.log(vet)
    res.json(vet)
  } catch(e) {
    console.log(e)
  }
})

app.post('/getprofile', async (req, res) => {
  const { lat, lng, rd } = req.body

  console.log(req.body)
  console.log(lat, lng, rd)

  try{
    console.log("Got /getprofile request!")
    let vet = await Profile.find()
    //console.log(vet)
    res.json(vet)
  } catch(e) {
    console.log(e)
  }
})
/*
app.listen(port, () => {
  console.log(`VetSwiper Backend listening at http://localhost:${port}`)
})
*/