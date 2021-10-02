const express = require("express");
const bodyParser=require("body-parser");
const Date=require(__dirname+"/date.js");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var items=[];
let work=[];

app.get("/", function (request, response) {
  let day=Date.getDate();
  response.render("list", { Title: day, myTask:items });
});

app.get("/work",function(request,response){
  response.render("list",{Title:"Work",myTask:work});
})
app.post("/",function(request,response){
  var itm=request.body.Task;
  if(request.body.button==="Work"){
    work.push(itm);
    response.redirect("/work");
  }
  else{
   
    items.push(itm);
    response.redirect("/");
  }
})
// app.post("/work",function(request,response){
 
//   response.redirect("/work");
// })
app.listen(3000, function () {
  console.log("Server is running at port 3000");
});
