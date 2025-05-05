const express = require('express');
const axios=require('axios');
const app=express();
app.use(express.json());

const port=3000;
let numwin=[];
const numsize=5;
app.get('/fetchnumbers',async(req,res)=>{
  
try {  
  const response=await axios.get(
  'https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=5',
  {timeout:1500}
);
  const newnum=response.data;
  const merged=[...new Set([...numwin,...newnum])];
  numwin=merged.slice(-numsize);
  res.status(201).json({'New Number set':newnum, 'Merged Num Set':numwin});

} 
catch(err){

res.status(500).json({error:'Failed to fetch from API',details:err.message});

}
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});