const express =require('express');
const app=express();

const port=3000;

app.get('/',(req,res) => {
    res.send("hello 3LIG");
});

app.listen(port,() =>{
    console.log(`Application sur le port ${port} ` )
});