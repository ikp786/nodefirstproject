const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    username:{
        type:String,
    }
});

module.exports = mongoose.model('data', dataSchema);