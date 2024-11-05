const express=require('express');
const app=express();

app.use(express.json());
const obj=[{
    id:1,
    name:"John",
    age:30,
    city:"New York"
},
{
    id:2,
    name:"Jane",
    age:25,
    city:"Los Angeles"
}
];

app.post("/addItems",(req, res)=>{
    const data=req.body;
    obj.push(data);
    res.json({array:obj});
})
app.get("/getArray",(req,res)=>
{
    res.json(obj);
})

const port=3000;
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
});
