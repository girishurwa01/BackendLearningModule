const express = require('express');
const app = express();
const port = 3000;

//Route1 Home

app.get('/',(req,res)=>{
    res.send("Girish has just started learning backend")
});


//Excercise 1 with username from url
app.get('/hello/:name',(req,res)=>{
    const username = req.params.name;
    res.send(`First backend code learnt ${username}`)
})

//add 2 numbers from url
app.get('/home/:a/:b',(req,res)=>{
    const a =parseInt(req.params.a);
    const b =parseInt(req.params.b);
    res.json(
        {
            sum:a+b
        }
    );
});


app.listen(port, ()=>{
    console.log(`My first handmade server is running now on ${port}`);
});

