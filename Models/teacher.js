const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    fullName: {
        type: String,
        required : true
    },
});

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = {teacherModel , teacherSchema};
