const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hola este es mi primer js")
});

const PORT= 3000;
app.listen(PORT,()=>{
    console.log("Servidor escuchando localhost:3000")
});