const mongoose = require("mongoose");
const {teacherSchema} = require("../Models/teacher")

const courseModel = new mongoose.Schema({
    title: {
        type: String,
    },
    teacher : {
        type: teacherSchema
    }
});

module.exports = courseModel;
