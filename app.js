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









app.listen(3000 , ()=>{
    console.log("server is running on port 3000 ")
})
