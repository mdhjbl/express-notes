const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 13,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/  // regex for basic email format
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, { timestamps: true });

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
