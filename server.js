const express= require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port= 3000;
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
        kindOfDay:day,
        newListItems:items,
    });
});

app.post("/",function(req,res){
    var item =req.body.newItem;
    items.push(item);
    res.redirect("/");
});
// day="";

//     switch (currentDay) {
//         case 0:
//             day="Sunday";
//             break;
//         case 1:day="Monday";
//             break;
//         case 2:day="Tuesday";
//             break;
//         case 3:day="Wednesday";
//             break;
//         case 4:day="Thursday";
//             break;
//         case 5:day="Friday";
//             break;
//         case 6:day="Saturday";
//             break;

//         default:
//             day="tera bura din"
//             break;
//     }

//    


app.listen(port,function(){
    console.log("server is running on port"+ port);
});