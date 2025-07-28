const mongoose = require("mongoose");
const userModel = require("../Models/user");
const validateUser = require("../validator/register")

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            message: "This ID is not valid!"
        });
    }

    const removedUser = await userModel.findByIdAndDelete(id);

    if (!removedUser) {
        return res.status(404).json({
            message: "There is no user with this ID"
        });
    }

    res.json({
        message: "The user was removed successfully"
    });
};


exports.addUser = async (req, res) => {
    const validationResult = validateUser(req.body);

    if (validationResult !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResult
        });
    }

    try {
        const { name, username, age, email, password } = req.body;

        const newUser = new userModel({
            name,
            username,
            age,
            email,
            password
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User added successfully",
            user: savedUser
        });
    } catch (error) {
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyValue)[0];
            return res.status(409).json({
                message: `The ${duplicateField} already exists`
            });
        }

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

