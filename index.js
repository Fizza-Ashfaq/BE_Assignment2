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
//create method to add new items in array
app.post("/addItems",(req, res)=>{
    const data=req.body;
    obj.push(data);
    res.json({array:obj});
})

//Read method to get all items in array
app.get("/getItems",(req,res)=>
{
    res.json(obj);
})

//Read method to get a single item by id
app.get("/getItembyId/:id",(req,res)=>{
    const id =req.params.id;
    const data=obj.find(p=>p.id==id);
    res.json({data});

});

//Read method to get searched item
app.get("/getItembySearch",(req,res)=>{
    const search=req.query.name;
    const data=obj.find(p=>p.name==search);
    res.json({array:data});
    })

const port=3000;
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
});
