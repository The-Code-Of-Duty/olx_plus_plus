const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    phone :{
        type: Number,
        required: true,
        size: 10
    }
})

module.exports = mongoose.model("Service", ServiceSchema);