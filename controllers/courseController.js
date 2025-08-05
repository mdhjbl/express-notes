const courseModel = require("../Models/course");
require("../Models/teacher");

exports.getAll = async (req, res) => {
    const courses = await courseModel.find({} , "-__v").populate("teacher" , "-__v")
    res.json(courses)
};
