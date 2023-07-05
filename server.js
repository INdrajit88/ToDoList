const express= require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port= 3000;
let workItems=[];
var items=["INdrajit","NandinI"];
var item="";

app.use(bodyParser.urlencoded({entended: true }));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
const today=new Date();
// const currentDay= today.getDay();
var options ={
    weekday : "long",
    day : "numeric",
    month: "long"
};
var day = today.toLocaleDateString("en-US",options)// to gate the date
    res.render("list",{
        listTitle:day,
        newListItems:items,
    });
});

 

app.post("/",function(req,res){
    console.log(req.body);
    var item =req.body.newItem;
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){

    res.render("list",{ 
        listTitle:"Work List",
        newListItems: workItems 
    });
});   

app.post("/work",function(req,res){
    var item =req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
app.get("/about",function(req,res){
    res.render("about");
});
app.listen(port,function(){
    console.log("server is running on port"+ port);
});