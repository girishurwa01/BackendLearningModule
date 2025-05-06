const express=require('express');
const axios=require('axios');
const app=express();
app.use(express.json());
const port=3000;

app.get('/fetchnews',async(req,res)=>{

try{
    const response=await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4caad05816a40f6a0d1e5e617e93170',
    {timeout:3500}
);

console.log(response.data);

 const newsurl=response.data.articles.map(article=>article.url);
 res.status(200).json({
  url:newsurl
 });
 
}
catch(err){
  res.status(500).json({
    error:'Failed to fetch from API',details:err.message
  })
}
});

app.listen(port,()=>{

console.log(`Server Running on ${port} Handwritten code!!`)

});
