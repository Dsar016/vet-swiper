const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
    },
    name: {
        type: String,
        
    },
    email: {
        type: String,
    },
    place_id: {
        type: String,
    },
    vicinity: {
        type: String,
    },
})