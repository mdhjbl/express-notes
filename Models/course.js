const mongoose = require("mongoose");
const {teacherSchema} = require("../Models/teacher")
const commentModel = require("./comment")

const courseModel = mongoose.model("course" , {
    title: {
        type: String,
        required : true
    },
    teacher : {
        type: teacherSchema
    },
    comments : [
        {
            type : mongoose.Types.ObjectId,
            ref : "comment"
        }
    ]
})

module.exports = courseModel;
