const mongoose = require("mongoose");
const userModel = require("../Models/user");

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
