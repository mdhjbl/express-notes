const mongoose = require("mongoose");

const commentModel = mongoose.model("comment" , 
    new mongoose.Schema({
        body : {
            type : String, 
            required : true
        }
    })
)

module.exports = commentModel;
