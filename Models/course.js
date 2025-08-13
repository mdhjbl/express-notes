const mongoose = require("mongoose");
const {teacherSchema} = require("../Models/teacher")

const courseModel = mongoose.model("course" , {
    title: {
        type: String,
        required : true
    },
    teacher : {
        type: teacherSchema
    }
})

module.exports = courseModel;
