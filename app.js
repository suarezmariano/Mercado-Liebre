const express = require('express');
const app = express();
const path = require ("path");


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});


const publicFolderPath = path.resolve(__dirname,'./public');
app.use(express.static(publicFolderPath));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
  });