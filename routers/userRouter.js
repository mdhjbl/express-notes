// const express = require("express")
// const mongoose = require("mongoose");
// const userModel = require("../Models/user")

// const userRouter = express.Router();

// userRouter.delete("/:id", async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({
//             message: "This ID is not valid!"
//         });
//     }

//     const removedUser = await userModel.findByIdAndDelete(id);

//     if (!removedUser) {
//         return res.status(404).json({
//             message: "There is no user with this ID"
//         });
//     }

//     res.json({
//         message: "The user was removed successfully"
//     });
// });

const express = require("express");
const userRouter = express.Router();

const userControllers = require("../controllers/userController");

userRouter.delete("/:id", userControllers.deleteUser);

module.exports = userRouter;

