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
