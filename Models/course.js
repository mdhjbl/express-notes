const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    teacher : {
        type: mongoose.Types.ObjectId,
        ref:"teacher"
    }
});

const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;
