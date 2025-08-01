module.exports.testMiddleWare = function (req , res , next){
    console.log("middleware runned as globaly")
    next()
}