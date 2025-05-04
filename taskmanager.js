const express = require('express');
const app=express();

app.use(express.json());

let tasks=[];
let id=1;
const port=3000;
//Create

app.post('/tasks',(req,res)=>{
    const {title,completed}=req.body;

    if(!title || completed === undefined){
        return res.status(400).json({error:'Title or Completed Status is required'});
    }

    const createTasks={
    id:id++,
    title:title,
    completed:completed,
    }

    tasks.push(createTasks);
    return res.status(201).json(createTasks);

});

//Read
app.get('/tasks',(req,res)=>{
    res.status(200).json(tasks);

});

//update
app.put('/tasks/:id',(req,res)=>{

    const{title,completed}=req.body;

    const task=tasks.find(t=>t.id===parseInt(req.params.id));

    if(!task){
        res.status(404).json({error:'Task not found'});
    }
    if(title){
        task.title=title;
    }
    if(completed!==undefined){
        task.completed=completed;
    }

    res.status(200).json(task)
});

//delete
app.delete('/tasks/:id',(req,res)=>{

const taskIndex=tasks.findIndex(t=>t.id === parseInt(req.params.id));

if(taskIndex==-1){
    res.status(404).json({error:'Task not found'});
}

tasks.splice(taskIndex,1);
res.status(204).end();

});

app.listen(port,()=>{
   console.log("Handmade server is running");
});