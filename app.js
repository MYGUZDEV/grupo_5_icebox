const express = require ('express');
const app = express();

const path = require ('path');

const publicPath = path.resolve(__dirname , './public');
app.use (express.static(publicPath));

app.listen (5000, () => {
    console.log ('Servidor 5000 funcianando MODO TURBO------->>>>>>>!!!!!');
});

app.get ('/' , (req , res) => {
    res.sendFile (path.resolve(__dirname , './views/index.html' ));
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});