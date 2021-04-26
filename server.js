const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("hallo dunia")
});

app.listen(9125,()=>{
    console.log('hello dunia')
})