const express= require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { getDate } = require("./date");
const date = require(__dirname+"/date.js");

//console.log(date());

const app = express();
const port= 3000;
const workItems=[];
const items=["INdrajit","NandinI"];
const item="";

app.use(bodyParser.urlencoded({entended: true }));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
 const day = date.getDay();
 const n_date = date.getDate();
    res.render("list",{
        listTitle: n_date,
        newListItems:items,
    });
});

 

app.post("/",function(req,res){
    console.log(req.body);
    const item =req.body.newItem;
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
    const item =req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
app.get("/about",function(req,res){
    res.render("about");
});
app.listen(port,function(){
    console.log("server is running on port"+ port);
});