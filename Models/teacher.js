const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
});

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = {teacherModel , teacherSchema};
