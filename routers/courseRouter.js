const express = require("express")
const courseController = require("../controllers/courseController")
const courseRouter = express.Router()

courseRouter.route("/").get(courseController.getAll)
module.exports = courseRouter

