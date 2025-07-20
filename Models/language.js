const mongoose = require("mongoose")
const languegeModel = mongoose.model("languages" , {
    name : {
        type : String ,         
        required : true
    },
    level : {
        type : Number,
        required : true,
        min : 1 ,
        max : 10 
    }
})

module.exports = languegeModel  
