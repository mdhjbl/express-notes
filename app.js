const express = require('express')
const app = express()


//!hello world basic api
// app.get('/' , ( req, res)=>{
//     res.send("Hello World :)")
    
// })

//!getting data with id from the client
/*app.get('/languages/:id', (req, res) => {
    const languages = [
        { "id": 1, "name": "English", "rate": 4.5 },
        { "id": 2, "name": "French",  "rate": 3.8 },
        { "id": 3, "name": "Russian", "rate": 4.8 }
    ]

    const language = languages.find(lang => lang.id == Number(req.params.id))
    if (language) {
        res.send(language)
    } else {
        res.send("The language not found :(")
    }
})*/

//!type of sending response
// app.get('/' , ( req, res)=>{
    // res.send("this response sended by .send()") --> the background is white
    // res.end("this response sended by .end()") --> the background is black
    // res.json("this response sended by .json()") --> put it on double cotation ""
// })

//?develope API with CRUD with express
// Create
// app.post("/languages", (req, res) => res.status(201).send("Added!"));
// Read
// app.get("/languages", (req, res) => res.send("All languages"));
// Update
// app.put("/languages/:id", (req, res) => res.send("Updated!"));
// Delete
// app.delete("/languages/:id", (req, res) => res.send("Deleted!"));

//* Receiving multiple route parameters in an API
// app.get("/api/users/:userID/articles/:articleID", (req, res) => {
//     res.send("mutiple route params ;)")
// });
// Reference: file://./explenation.txt#L17

//!receiving request body
// Middleware to parse JSON body
// app.use(express.json());

// Optional: also parse form-urlencoded data
// app.use(express.urlencoded());

// app.post("/api", (req, res) => {
//     console.log(req.body);
//     res.send(`Request body is: ${JSON.stringify(req.body)}`);
// });
// Reference: file://./explenation.txt#L22

//* Working with body-parser middleware
// const bodyParser = require("body-parser");

// Parse incoming JSON data and attach it to req.body
// app.use(bodyParser.json());

// Parse URL-encoded data (like from HTML forms)
// extended: false => uses the classic querystring library
// app.use(bodyParser.urlencoded({ extended: false }));
// Reference: file://./explenation.txt#L28

//?connect to database with mongoose
require('./configs/db')
// Reference: file://./explenation.txt#L40


//!creating first model wirh mongoose and document in the collection
app.use(express.json());
const languageModel = require('./Models/language') 

// app.post("/api/language" , (req,res)=>{
//     let {name , level} = req.body
//     if(name === "" || level === ""){          
//         res.status(422).json({               
//             message:"Data is not valid :("
//         });
//     }else{
//         languageModel.create({           
//             name, level                
//         })
//         res.status(201).json({
//             message : "new language added successfully"
//         })  
//     }
// })

//?req.body validation with fastest-validator
const userModel = require('./Models/user') 
const registerValidator = require('./validator/register')

//!2 types for objectID validation
//? way 1 const {isValidObjectID} = require("mongoose")
const mongoose = require("mongoose");

// app.get("/users/:id", (req, res) => {
    // const { id } = req.params;
    // console.log(id);
    //? way 1 res.send(isValidObjectID(id))
    //? way 2 res.send(mongoose.Types.ObjectId.isValid(id));
// });

//!develop Api for removing user
// app.delete("/api/users/:id" , async(req, res)=>{
//     const {id} = req.params
//     if(mongoose.Types.ObjectId.isValid(id)){
//         const removedUser = await userModel.findByIdAndDelete({_id : id})
//         res.json({
//             message:"the user removed successfully"
//         })
//         if(!removedUser){
//             return res.status(404).json({
//                 message : "there is not user with this id"
//             })
//         }
//     }else{
//         return res.status(404).json({
//             message: "this id is not valid !"
//         })
//     }

// })

//!Category Apies with Routers
const userRouter = require("./routers/userRouter");
const { default: camelcaseKeys } = require('camelcase-keys');
// app.use("/api/users", userRouter);

//?describe middleware
// app.use("/api/users", (req, res, next) => {
//     console.log("Middleware Runned!");
//     next();
// }, userRouter);
// Reference: file://./explenation.txt#L59

//!local middleware
// app.get(
//     "/api/test",
//     (res , req ,next)=>{
//         console.log("first middleware Runned !")
//         next()
//     },
//     (res , req , next)=>{
//         console.log("second middleware runnded !")
//         next()
//     },
//     (req,res)=>{
//         console.log("okay!")
//     }
// )

//!global middleware
// const {testMiddleWare} = require("./middlewares/test")
// app.use(testMiddleWare)
// app.get("/api/test" , (req , res)=>{
//     console.log("okay!")
// })

app.use("/api/users" , userRouter)

//?test the morgan package
// const morgan = require("morgan")
// app.use(morgan("tiny"))
// app.use(morgan("combined"))
// app.use(morgan("common"))
// app.use(morgan("dev"))
// app.use(morgan("short"))
// app.get("/api/test-morgan" , (res , req)=>{
//     req.json({
//         message : "HI "
//     })
// })

//!Query params 
// app.get("/api/test", (req, res) => {
//     console.log(req.query);
//     res.json({
//         message: "HI "
//     });
// });

//!using camelcase middleware 
app.use(express.json());
const camelCaseKeys = async (...args) => {
  const { default: camelcaseKeys } = await import("camelcase-keys");
  return camelcaseKeys(...args, { deep: true });
};
const camelCase = async (req, res, next) => {
  try {
    req.body = await camelCaseKeys(req.body);
    console.log("After camelCase:", req.body);
    next();
  } catch (error) {
    next(error);
  }
};
app.use("/api/test", camelCase);
app.post("/api/test", (req, res) => {
  res.json({
    message: "HI ",
    body: req.body,
  });
});



app.listen(3000 , ()=>{
    console.log("server is running on port 3000 ")
})
