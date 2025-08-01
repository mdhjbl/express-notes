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

const isAdminMiddleWare = require("../middlewares/isadmin")
const express = require("express");
const userControllers = require("../controllers/userController");
const userRouter = express.Router();

userRouter.use(isAdminMiddleWare)

userRouter.delete("/:id", userControllers.deleteUser);
userRouter.post("/", userControllers.addUser);
userRouter.get("/", userControllers.getAllUsers);
userRouter.get("/:id", userControllers.getUser);

module.exports = userRouter;

