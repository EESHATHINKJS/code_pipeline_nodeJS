const express = require('express')
const app = express();
const PORT = 4001

app.get('/',(req,res)=>{
    res.json({msg:"Server is working fine..."})
})


app.get('/profile',(req,res)=>{
    res.json({
        name : "MD Eesha",
        profile: "Node JS Developer",
        company : "Think JS Private Limited"
    })
})



app.get('/server',(req,res)=>{
    res.json({
        name : "Node JS",
        port: "80",
        msg : "Learing code pipeline"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is runing on PORT : ${PORT}`)
})