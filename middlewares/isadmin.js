const userModel = require("../Models/user")
module.exports = async (req, res, next) => {
    console.log("middleware runned!")
    const { id } = req.body;
    const user = await userModel.findById(id).lean();
    
    req.user = user 

    if (user) {
        if (user.username === "admin") {
            return next();
        } else {
            return res.status(403).json({
                message: "THIS ROUTE IS NOT AVAILABLE FOR YOU"
            });
        }
    } else {
        return res.status(404).json({
            message: "USER NOT FOUND!"
        });
    }
};
